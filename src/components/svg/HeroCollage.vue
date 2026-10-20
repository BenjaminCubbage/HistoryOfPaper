<template>
    <svg class="hero-collage" viewBox="0 0 1039.94 780.36">
        <g class="shadow">
            <image :href="shadowUrl" x="176.060000" y="611.090000" width="708.060000" height="169.290000" preserveAspectRatio="none"/>
        </g>
        <g class="ribbon-back">
            <image :href="ribbon_backUrl" x="124.810000" y="425.690000" width="804.730000" height="174.980000" preserveAspectRatio="none"/>
        </g>
        <g class="ball">
            <image :href="ballUrl" x="150.660000" y="-0.020000" width="762.030000" height="728.930000" preserveAspectRatio="none"/>
        </g>
        <g class="ribbon-fore">
            <image :href="ribbon_foreUrl" x="124.790000" y="421.690000" width="804.740000" height="191.473000" preserveAspectRatio="none"/>
        </g>
        <g>
            <g class="r">
                <image :href="rUrl" x="826.900000" y="207.750000" width="213.060000" height="228.800000" preserveAspectRatio="none"/>
            </g>
            <g class="p1">
                <image :href="p1Url" x="-0.020000" y="157.630000" width="245.220000" height="276.110000" preserveAspectRatio="none"/>
            </g>
            <g class="a"><image :href="aUrl" x="237.760000" y="221.280000" width="182.830000" height="189.990000" preserveAspectRatio="none"/>
            </g>
            <g class="p2">
                <image :href="p2Url" x="405.690000" y="215.010000" width="248.830000" height="261.180000" preserveAspectRatio="none"/>
            </g>
            <g class="e">
                <image :href="eUrl" x="636.930000" y="235.000000" width="208.470000" height="187.810000" preserveAspectRatio="none"/>
            </g>
        </g>
    </svg>
</template>

<script setup>
import p1Url from '@/assets/img/hero-img/letter-p-first.svg?url&no-inline';
import aUrl from '@/assets/img/hero-img/letter-a.svg?url&no-inline';
import p2Url from '@/assets/img/hero-img/letter-p-second.svg?url&no-inline';
import eUrl from '@/assets/img/hero-img/letter-e.svg?url&no-inline';
import rUrl from '@/assets/img/hero-img/letter-r.svg?url&no-inline';
import ballUrl from '@/assets/img/hero-img/parchment.svg?url&no-inline';
import ribbon_foreUrl from '@/assets/img/hero-img/ribbon-front.svg?url&no-inline';
import ribbon_backUrl from '@/assets/img/hero-img/ribbon-back.svg?url&no-inline';
import shadowUrl from '@/assets/img/hero-img/shadow.svg?url&no-inline';
</script>

<style scoped>
.hero-collage {
    pointer-events: none;
}

.ball {
    pointer-events: auto;
    transform-origin: fill-box;
}

.p1, .a, .p2, .e, .r {
    animation: hero-collage-letter-wobble 2.5s infinite steps(1, end);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform;
}

.p1 { animation-delay: -4s; }
.a  { animation-delay: -3s; }
.p2 { animation-delay: -2s; }
.e  { animation-delay: -1s; }
.r  { animation-delay: 0; }

.ribbon-fore,
.ribbon-back {
    animation: hero-collage-ribbon-float 2.5s infinite steps(1);
}

.ball {
    animation: hero-collage-ball-wobble 2.5s infinite steps(1);
}

.shadow {
    animation: hero-collage-shadow-wobble 2.5s infinite steps(1);
}

@keyframes hero-collage-letter-wobble {
    0%, 100% {
        transform: perspective(700px) rotateX(0deg) rotateY(0deg) rotateZ(2.1deg);
    }

    20% {
        transform: perspective(700px) rotateX(0.7deg) rotateY(-1.4deg) rotateZ(0.7deg);
    }

    40% {
        transform: perspective(700px) rotateX(-2.1deg) rotateY(0.7deg) rotateZ(-0.7deg);
    }

    60% {
        transform: perspective(700px) rotateX(1.4deg) rotateY(0.7deg) rotateZ(0.7deg);
    }

    80% {
        transform: perspective(700px) rotateX(-0.7deg) rotateY(-1.4deg) rotateZ(-0.7deg);
    }
}

@keyframes hero-collage-ribbon-float {
    0%, 100% {
        transform: rotate(-1.4deg);
    }

    20% {
        transform: rotate(-0.7deg);
    }

    40% {
        transform: rotate(0.7deg);
    }

    60% {
        transform: rotate(1.4deg);
    }

    80% {
        transform: rotate(0deg);
    }
}

@keyframes hero-collage-ball-wobble {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
    }

    20% {
        transform: translate(1.4px, -1.4px) rotate(1.4deg);
    }

    40% {
        transform: translate(-0.7px, -2.1px) rotate(-0.7deg);
    }

    60% {
        transform: translate(-1.4px, 0.7px) rotate(-1.4deg);
    }

    80% {
        transform: translate(0.7px, 1.4px) rotate(0.7deg);
    }
}

@keyframes hero-collage-shadow-wobble {
    0%, 100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(1.4px);
    }

    40% {
        transform: translateX(-1.4px);
    }

    60% {
        transform: translateX(-0.7px);
    }

    80% {
        transform: translateX(2.8px);
    }
}


</style>
