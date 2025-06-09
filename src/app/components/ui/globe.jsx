"use client";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

export function Globe({ globeConfig, data }) {
    const globeRef = useRef(null);
    const groupRef = useRef();
    const [isInitialized, setIsInitialized] = useState(false);

    const defaultProps = {
        pointSize: 1,
        atmosphereColor: "#ffffff",
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: "rgba(255,255,255,0.7)",
        globeColor: "#1d072e",
        emissive: "#000000",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig,
    };

    useEffect(() => {
        if (!globeRef.current && groupRef.current) {
            globeRef.current = new ThreeGlobe();
            groupRef.current.add(globeRef.current);
            setIsInitialized(true);
        }
    }, []);

    useEffect(() => {
        if (!globeRef.current || !isInitialized) return;
        const globeMaterial = globeRef.current.globeMaterial();
        globeMaterial.color = new Color(defaultProps.globeColor);
        globeMaterial.emissive = new Color(defaultProps.emissive);
        globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
        globeMaterial.shininess = defaultProps.shininess;
    }, [isInitialized, globeConfig]);

    useEffect(() => {
        if (!globeRef.current || !isInitialized || !data) return;

        let points = [];
        data.forEach((arc) => {
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: arc.color,
                lat: arc.startLat,
                lng: arc.startLng,
            });
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: arc.color,
                lat: arc.endLat,
                lng: arc.endLng,
            });
        });

        const filteredPoints = points.filter(
            (v, i, a) =>
                a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
        );

        globeRef.current
            .hexPolygonsData(countries.features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.7)
            .showAtmosphere(defaultProps.showAtmosphere)
            .atmosphereColor(defaultProps.atmosphereColor)
            .atmosphereAltitude(defaultProps.atmosphereAltitude)
            .hexPolygonColor(() => defaultProps.polygonColor);

        globeRef.current
            .arcsData(data)
            .arcStartLat((d) => d.startLat)
            .arcStartLng((d) => d.startLng)
            .arcEndLat((d) => d.endLat)
            .arcEndLng((d) => d.endLng)
            .arcColor((e) => e.color)
            .arcAltitude((e) => e.arcAlt)
            .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
            .arcDashLength(defaultProps.arcLength)
            .arcDashInitialGap((e) => e.order)
            .arcDashGap(15)
            .arcDashAnimateTime(() => defaultProps.arcTime);

        globeRef.current
            .pointsData(filteredPoints)
            .pointColor((e) => e.color)
            .pointsMerge(true)
            .pointAltitude(0.0)
            .pointRadius(2);

        globeRef.current
            .ringsData([])
            .ringColor(() => defaultProps.polygonColor)
            .ringMaxRadius(defaultProps.maxRings)
            .ringPropagationSpeed(RING_PROPAGATION_SPEED)
            .ringRepeatPeriod(
                (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
            );
    }, [isInitialized, data, globeConfig]);

    useEffect(() => {
        if (!globeRef.current || !isInitialized || !data) return;
        const interval = setInterval(() => {
            const newRings = genRandomNumbers(0, data.length, Math.floor(data.length * 0.8));
            const ringsData = data
                .filter((_, i) => newRings.includes(i))
                .map((d) => ({
                    lat: d.startLat,
                    lng: d.startLng,
                    color: d.color,
                }));
            globeRef.current.ringsData(ringsData);
        }, 2000);

        return () => clearInterval(interval);
    }, [isInitialized, data]);

    return <group ref={groupRef} />;
}

export function World(props) {
    const { globeConfig } = props;
    return (
        <Canvas
            camera={{ position: [0, 0, cameraZ], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            frameloop="always"
        >
            <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
            <directionalLight color={globeConfig.directionalLeftLight} position={[-400, 100, 400]} />
            <directionalLight color={globeConfig.directionalTopLight} position={[-200, 500, 200]} />
            <pointLight color={globeConfig.pointLight} position={[-200, 500, 200]} intensity={0.8} />
            <Globe {...props} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={globeConfig.autoRotateSpeed || 0.5}
                minDistance={cameraZ}
                maxDistance={cameraZ}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI - Math.PI / 3}
            />
        </Canvas>
    );
}

function genRandomNumbers(min, max, count) {
    const arr = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (!arr.includes(r)) arr.push(r);
    }
    return arr;
}
