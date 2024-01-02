<button class="pushable">
	<span class="shadow"></span>
	<span class="edge"></span>
	<span class="front bg-accent text-primary text-lg sm:text-xl py-4 px-8">
		<slot />
	</span>
</button>

<style>
	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
	}
	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsla(0, 1%, 36%, 0.35);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: linear-gradient(
			to left,
			hsl(176, 22%, 41%) 0%,
			hsl(176, 24%, 52%) 8%,
			hsl(176, 24%, 52%) 92%,
			hsl(176, 22%, 41%) 100%
		);
	}
	.front {
		display: block;
		position: relative;
		border-radius: 12px;
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.pushable:hover {
		filter: brightness(110%);
	}
	.pushable:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
