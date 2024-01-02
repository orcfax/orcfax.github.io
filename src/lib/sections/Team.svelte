<script>
	import { base } from '$app/paths';
	import Link from '$lib/components/Link.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<PageSection id="team" class="bg-primary pb-32">
	<h2>Team</h2>
	<div
		class="flex flex-col justify-center items-center gap-10 sm:flex-row sm:items-start lg:items-center sm:gap-4"
	>
		<div class="flex flex-col gap-8 text-lg">
			<p>
				Meet our founder, <Link href="https://twitter.com/pjvangarderen" isNewTab
					>Peter Van Garderen</Link
				> - a long-time and <Link href="https://www.youtube.com/watch?v=jOWsTt-RLBM" isNewTab
					>passionate advocate</Link
				> for decentralization and its promise to create a more equitable world.
			</p>
			<p>
				Peter is a digital archivist and open-source software developer. He is channelling his
				significant career-expertise to transform the oracle landscape.
			</p>
			<p>
				The ever-growing team at Orcfax also consists of in-house software development, business
				development, and community management teams.
			</p>
		</div>
		<img
			class="rounded-full w-64 h-64 xs:w-72 xs:h-72 sm:mt-4 lg:w-[22rem] lg:h-[22rem] lg:mt-0"
			src={`${base}/images/team/peter-van-garderen.webp`}
			alt="A headshot of Peter Van Garderen, the founder of the Orcfax project, he is looking up and into the distance smiling with a hopeful look in his eyes."
		/>
	</div>
</PageSection>
