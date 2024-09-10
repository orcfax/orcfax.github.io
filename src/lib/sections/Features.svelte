<script lang="ts">
	import { base } from '$app/paths';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	export const features = [
		{
			title: 'Triangulated Data',
			description: 'All feed data collected from multiple primary sources',
			image: `${base}/images/features/triangulated-data.webp`,
			altText:
				'A row of large white radio telescopes pointing skyward, aligned on either side of a dirt road leading towards the horizon under a clear blue sky. The foreground shows dry grassland, while the background hints at a flat landscape with distant mountains.'
		},
		{
			title: 'Fully Auditable',
			description: 'Permanent audit trails (in human readable format) for all data feed activity',
			image: `${base}/images/features/fully-auditable.webp`,
			altText:
				'A close-up of a technical drawing or blueprint with a grid layout, featuring a black ballpoint pen with its tip on the paper, suggesting the process of design or planning. The background is a smooth, light-colored surface, emphasizing the detail of the drawing and the precision of the work.'
		},
		{
			title: 'Stake-Based Validation',
			description:
				'Decentralized oracle pools of independent validator nodes verify the accuracy and authenticity of source data, driven by stake-based reward incentives',
			image: `${base}/images/features/stake-based-validation.webp`,
			altText:
				'A black and white image depicting a hand holding a magnifying glass over a laptop keyboard, suggesting scrutiny, investigation, or detailed examination. The magnifying glass is focused on the keyboard, blurring the surrounding area and drawing attention to the keys beneath it. The laptop brand is partially visible, indicating a modern and possibly professional context.'
		},
		{
			title: 'Archived Forever',
			description:
				'All data stored on decentralized, sustainable storage using a standards-compliant archival packaging format for permanent access and re-use',
			image: `${base}/images/features/archived-forever.webp`,
			altText:
				'A vertical image featuring the front view of a grey filing cabinet with two drawers, each with a black handle. The cabinet has a label at the top with the text "Triumph," indicating the brand. The background is plain and white, putting the focus on the cabinet.'
		},
		{
			title: 'Cardano-Native eUTXO Design',
			description:
				'Orcfax created and implements the Oracle Protocol, which has been designed to support and enhance eUTXO datum publication. Key objectives of the protocol are to leverage the eUTXO design and to streamline the datum to reduce on-chain fees.',
			image: `${base}/images/features/cardano-native-design.webp`,
			altText:
				'A black and white image showing an abstract representation of a network with interconnected nodes and lines, with several larger circles grouped in the center, forming the Cardano logo. The design suggests connectivity and complexity.'
		}
	];
</script>

<PageSection id="features" class="bg-gradient-to-b from-accent to-primary pb-32">
	<div class="flex flex-col gap-6">
		<h2>Features</h2>
		<ul class="flex flex-col gap-16 pt-4">
			{#each features as { title, description, image, altText }}
				<FeatureCard {title} {description} {image} {altText} />
			{/each}
		</ul>
	</div>
</PageSection>
