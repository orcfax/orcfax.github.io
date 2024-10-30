<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<PageSection id="about" class="bg-accent pb-32">
	<div class="flex flex-col gap-6">
		<h2>About Orcfax</h2>
		<p class="font-bold italic">
			Orcfax is an oracle service for the Cardano blockchain that publishes data about real-world
			events into Cardano transaction datum.
		</p>
		<p>
			These are made available as on-chain data inputs to smart contracts, scripts, and dApps that
			are running on the Cardano blockchain.
		</p>
		<p>
			Orcfax data is made available in Cardano's native eUTXO format using our <Link
				href="https://docs.orcfax.io/consume"isNewTab>Oracle Protocol</Link
			>.
		</p>
	</div>

	<div class="flex flex-col gap-6 pt-12">
		<h3>A Better Way to Deliver Oracle Data</h3>
		<p>
			Orcfax collects real-world data from multiple sources for each data point and uses a
			distributed network of validator nodes to deliver truly <b>decentralized oracle feeds</b>.
		</p>
		<p>
			Orcfax provides full <b>audit logs</b> of its data collection and validation process for each
			datum on a permisionless, decentralized storage network. This allows users to
			<b>"trust but verify"</b>
			the Fact Statements published by Orcfax.
		</p>
		<p>
			Orcfax is finely-tuned to deliver <b>authentic</b> and <b>accurate</b> oracle data. This is a critical
			requirement to fulfill the mostly unmet promise of DeFi. There are also many other business models
			and industries that remain poised to leverage distributed trust technology.
		</p>
		<p class="font-bold text-xl sm:text-2xl">
			<Link class="underline text-xl sm:text-2xl" href="#connect">Join us</Link> on our mission to revolutionize
			oracle feeds!
		</p>
	</div>
</PageSection>
