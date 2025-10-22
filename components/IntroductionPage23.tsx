import React, { memo, useMemo } from "react";
import { Dimensions, View } from "react-native";
import Svg, {
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    G,
    Path,
    Rect,
    Text as SvgText,
} from "react-native-svg";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { colors } from "../utils/colors";

const { width: W, height: H } = Dimensions.get("window");

interface IntroductionPage23Props {
    pageNumber: number;
}

/**
 * Concave scalloped path for "ripped paper" effect
 */
function scallopPath(
    cx: number,
    cy: number,
    lobes = 8,
    r = 190,
    depth = 0.32,
    rotate = -Math.PI / 12
) {
    const steps = lobes * 120;
    const d: string[] = [];
    for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2;
        const wave = 1 - depth * (0.5 + 0.5 * Math.sin(lobes * t));
        const rr = r * wave;
        const x = cx + rr * Math.cos(t + rotate);
        const y = cy + rr * Math.sin(t + rotate);
        d.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    d.push("Z");
    return d.join(" ");
}

const IntroductionPage23 = memo(({ pageNumber }: IntroductionPage23Props) => {
    const cx = W / 2;
    const cy = H * 0.6; // lowered for better balance

    const paths = useMemo(() => {
        const outer = scallopPath(cx, cy, 8, Math.min(W, H) * 0.36, 0.35);
        const mid = scallopPath(cx, cy, 8, Math.min(W, H) * 0.29, 0.32);
        const inner = scallopPath(cx, cy, 8, Math.min(W, H) * 0.23, 0.3);
        return { outer, mid, inner };
    }, [cx, cy]);

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={{ flex: 1, backgroundColor: "#4D2ACD" }}>
                <Svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`}>
                    <Defs>
                        {/* Gold gradient for main text */}
                        <LinearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
                            <Stop offset="0%" stopColor="#FFF8D6" />
                            <Stop offset="35%" stopColor="#FFD768" />
                            <Stop offset="65%" stopColor="#C9971A" />
                            <Stop offset="100%" stopColor="#6E4F0F" />
                        </LinearGradient>

                        {/* Background vignette */}
                        <RadialGradient id="bgVignette" cx="50%" cy="40%" r="80%">
                            <Stop offset="0%" stopColor="#5E3AE6" />
                            <Stop offset="100%" stopColor="#4D2ACD" />
                        </RadialGradient>

                        {/* Soft pink radial gradient for mid layer */}
                        <RadialGradient id="pinkSoft" cx="50%" cy="50%" r="65%">
                            <Stop offset="0%" stopColor="#FF8EDB" />
                            <Stop offset="100%" stopColor="#FF49B4" />
                        </RadialGradient>
                    </Defs>

                    {/* Page background */}
                    <Rect x={0} y={0} width={W} height={H} fill="url(#bgVignette)" />

                    {/* Hot pink paint bar behind subtitle */}
                    <Rect
                        x={W * 0.1}
                        y={H * 0.165}
                        width={W * 0.8}
                        height={H * 0.045}
                        rx={8}
                        fill="#FF4FB8"
                        opacity={0.9}
                    />

                    {/* Spray speckles for graffiti texture */}
                    {Array.from({ length: 100 }).map((_, i) => {
                        const r = Math.random() * 2.4 + 0.5;
                        const x = Math.random() * W;
                        const y = Math.random() * H * 0.4;
                        return (
                            <Path
                                key={i}
                                d={`M${x} ${y} m-${r},0 a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 -${r * 2},0`}
                                fill="#000"
                                opacity={0.12 * Math.random()}
                            />
                        );
                    })}

                    {/* Ripped paper group */}
                    <G>
                        {/* Off-white paper underlay */}
                        <Path d={paths.outer} fill="#F7F2EE" />

                        {/* Soft drop shadow */}
                        <Path
                            d={paths.outer}
                            fill="none"
                            stroke="#000"
                            strokeOpacity={0.12}
                            strokeWidth={18}
                        />

                        {/* Outer torn edge with white stroke */}
                        <Path
                            d={paths.outer}
                            fill="#FF2B9D"
                            stroke="#FFFFFF"
                            strokeWidth={10}
                            strokeLinejoin="round"
                        />

                        {/* Mid and inner pink layers */}
                        <Path d={paths.mid} fill="url(#pinkSoft)" />
                        <Path d={paths.inner} fill="#FFC1EC" />
                    </G>

                    {/* HEADER TEXT */}
                    <G>
                        {/* Title with shadow */}
                        <SvgText
                            x={W / 2 + 3}
                            y={H * 0.12 + 3}
                            fontSize={Math.min(W, H) * 0.085}
                            fontWeight="900"
                            textAnchor="middle"
                            fill="#000"
                            opacity={0.25}
                        >
                            Hip-Hop Time Capsule
                        </SvgText>

                        <SvgText
                            x={W / 2}
                            y={H * 0.12}
                            fontSize={Math.min(W, H) * 0.085}
                            fontWeight="900"
                            textAnchor="middle"
                            fill="url(#gold)"
                            stroke="#000"
                            strokeWidth={3.2}
                            letterSpacing={1}
                        >
                            Hip-Hop Time Capsule
                        </SvgText>

                        {/* Subtitle on pink bar */}
                        <SvgText
                            x={W / 2}
                            y={H * 0.205}
                            fontSize={Math.min(W, H) * 0.038}
                            fontWeight="800"
                            textAnchor="middle"
                            fill="#FFFFFF"
                        >
                            Document Your Journey
                        </SvgText>
                    </G>

                    {/* CENTER WORD */}
                    <SvgText
                        x={cx + 3}
                        y={cy + 15}
                        fontSize={Math.min(W, H) * 0.095}
                        fontWeight="900"
                        textAnchor="middle"
                        fill="#000"
                        opacity={0.25}
                    >
                        QUESTIONS
                    </SvgText>
                    <SvgText
                        x={cx}
                        y={cy + 12}
                        fontSize={Math.min(W, H) * 0.095}
                        fontWeight="900"
                        textAnchor="middle"
                        fill="url(#gold)"
                        stroke="#000"
                        strokeWidth={4}
                        letterSpacing={1.5}
                    >
                        QUESTIONS
                    </SvgText>
                    {/* Page number */}
                    <SvgText
                        x={W / 2}
                        y={H * 0.96}
                        fontSize={16}
                        textAnchor="middle"
                        fill="#000"
                    >
                        {pageNumber}
                    </SvgText>
                </Svg>
            </View>
        </SafeAreaWrapper>
    );
});

export default IntroductionPage23;
