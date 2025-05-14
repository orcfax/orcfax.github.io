<div
    class="absolute inset-0 flex items-center justify-center opacity-65 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
>
    <div class="sonar">
        <div class="sonar__container">
            <div class="distance">
                <div class="distance__circle"></div>
                <div class="distance__circle"></div>
                <div class="distance__circle"></div>
                <div class="distance__circle"></div>
                <div class="distance__circle"></div>
            </div>

            <!-- <div class="matrix"></div> -->

            <div class="rotary"></div>

            <div class="display">
                <div class="ship-1"></div>
                <div class="ship-2"></div>
                <div class="ship-3"></div>
                <div class="ship-4"></div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Sonar */
    .sonar {
        width: 100%;
        padding-top: 100%;
        height: 0;
        position: relative;
    }

    .sonar__container {
        width: calc(100% - 60px);
        height: calc(100% - 60px);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;

        border-radius: 50%;
    }

    /* Distance circles */
    .distance {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    .distance__circle {
        background: transparent;
        box-shadow:
            inset 1px 0 0 0 #374151,
            inset -1px 0 0 0 #374151,
            inset 0 1px 0 0 #374151,
            inset 0 -1px 0 0 #374151;
        border-radius: 50%;
        border-width: 1px;
        border-color: rgba(var(--foreground-rgb), 0.5);
        opacity: 0.3;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    /* Manually expanded distance circles sizes */
    .distance__circle:nth-child(1) {
        width: 20%;
        height: 20%;
    }
    .distance__circle:nth-child(2) {
        width: 40%;
        height: 40%;
    }
    .distance__circle:nth-child(3) {
        width: 60%;
        height: 60%;
    }
    .distance__circle:nth-child(4) {
        width: 80%;
        height: 80%;
    }
    .distance__circle:nth-child(5) {
        width: 100%;
        height: 100%;
    }

    /* Rotary radar */
    .rotary {
        width: 100%;
        height: 100%;
        background: conic-gradient(#66a29e 20%, rgba(0, 7, 22, 0) 86%, #a3c7c4);
        overflow: hidden;
        border-radius: 50%;
        animation: rotating 5.4s linear infinite;
        transform-origin: center center;
        z-index: -1;
        position: relative;
    }

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* Matrix */
    .matrix {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            0deg,
            rgba(65, 245, 37, 0.1) 25%,
            #52817e 25%,
            #52817e 50%,
            rgba(65, 245, 37, 0.1) 50%,
            rgba(65, 245, 37, 0.1) 75%,
            #52817e 75%,
            #52817e 100%
        );
        background-size: 4px 4px;
        border-radius: 50%;
    }

    /* Display */
    .display {
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: -2;
    }

    /* Ships */
    .ship-1 {
        width: 4%;
        height: 4%;
        background: #41f525;
        position: absolute;
        top: 21%;
        left: 45%;
        border-radius: 50%;
        box-shadow: 0px 0px 6px 2px #41f525;
    }

    .ship-2 {
        width: 4%;
        height: 4%;
        background: #41f525;
        position: absolute;
        top: 14%;
        left: 78%;
        border-radius: 50%;
        box-shadow: 0px 0px 6px 2px #41f525;
    }

    .ship-3 {
        width: 4%;
        height: 4%;
        background: #41f525;
        position: absolute;
        top: 50%;
        left: 20%;
        border-radius: 50%;
        box-shadow: 0px 0px 6px 2px #41f525;
    }

    .ship-4 {
        width: 4%;
        height: 4%;
        background: #41f525;
        position: absolute;
        top: 50%;
        left: 80%;
        border-radius: 50%;
        box-shadow: 0px 0px 6px 2px #41f525;
    }
</style>
