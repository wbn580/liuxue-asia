declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"asia-budget-ranking.md": {
	id: "asia-budget-ranking.md";
  slug: "asia-budget-ranking";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-compare.md": {
	id: "asia-compare.md";
  slug: "asia-compare";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-cross-major-master.md": {
	id: "asia-cross-major-master.md";
  slug: "asia-cross-major-master";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-decision.md": {
	id: "asia-decision.md";
  slug: "asia-decision";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-english-taught-distribution.md": {
	id: "asia-english-taught-distribution.md";
  slug: "asia-english-taught-distribution";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-master-duration-graduation-timing.md": {
	id: "asia-master-duration-graduation-timing.md";
  slug: "asia-master-duration-graduation-timing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-part-time-work-while-studying.md": {
	id: "asia-part-time-work-while-studying.md";
  slug: "asia-part-time-work-while-studying";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-post-study-work-rights.md": {
	id: "asia-post-study-work-rights.md";
  slug: "asia-post-study-work-rights";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"asia-universities-new-programme-cadence-polyu.md": {
	id: "asia-universities-new-programme-cadence-polyu.md";
  slug: "asia-universities-new-programme-cadence-polyu";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-8universities.md": {
	id: "hk-8universities.md";
  slug: "hk-8universities";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-cost.md": {
	id: "hk-cost.md";
  slug: "hk-cost";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-guide.md": {
	id: "hk-guide.md";
  slug: "hk-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-iang.md": {
	id: "hk-iang.md";
  slug: "hk-iang";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-undergrad-masters.md": {
	id: "hk-undergrad-masters.md";
  slug: "hk-undergrad-masters";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hongkong-part-time-master.md": {
	id: "hongkong-part-time-master.md";
  slug: "hongkong-part-time-master";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hongkong-research-master-and-phd.md": {
	id: "hongkong-research-master-and-phd.md";
  slug: "hongkong-research-master-and-phd";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hongkong-subdegree-mainland-students.md": {
	id: "hongkong-subdegree-mainland-students.md";
  slug: "hongkong-subdegree-mainland-students";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hongkong-vs-singapore-masters-budget.md": {
	id: "hongkong-vs-singapore-masters-budget.md";
  slug: "hongkong-vs-singapore-masters-budget";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"japan-daigakuin-research-student-vs-master.md": {
	id: "japan-daigakuin-research-student-vs-master.md";
  slug: "japan-daigakuin-research-student-vs-master";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"japan-eju-and-internal-exam.md": {
	id: "japan-eju-and-internal-exam.md";
  slug: "japan-eju-and-internal-exam";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"japan-language-school-selection.md": {
	id: "japan-language-school-selection.md";
  slug: "japan-language-school-selection";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"japan-senmon-gakko-vs-university.md": {
	id: "japan-senmon-gakko-vs-university.md";
  slug: "japan-senmon-gakko-vs-university";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"japan-transfer-admission.md": {
	id: "japan-transfer-admission.md";
  slug: "japan-transfer-admission";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"jp-cost.md": {
	id: "jp-cost.md";
  slug: "jp-cost";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"jp-employment.md": {
	id: "jp-employment.md";
  slug: "jp-employment";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"jp-guide.md": {
	id: "jp-guide.md";
  slug: "jp-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"jp-life.md": {
	id: "jp-life.md";
  slug: "jp-life";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"jp-sgu.md": {
	id: "jp-sgu.md";
  slug: "jp-sgu";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"korea-language-institute.md": {
	id: "korea-language-institute.md";
  slug: "korea-language-institute";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"korea-seoul-vs-local-universities.md": {
	id: "korea-seoul-vs-local-universities.md";
  slug: "korea-seoul-vs-local-universities";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"korea-topik-levels.md": {
	id: "korea-topik-levels.md";
  slug: "korea-topik-levels";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"korea-transfer-admission.md": {
	id: "korea-transfer-admission.md";
  slug: "korea-transfer-admission";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kr-gsis.md": {
	id: "kr-gsis.md";
  slug: "kr-gsis";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kr-guide.md": {
	id: "kr-guide.md";
  slug: "kr-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kr-life-career.md": {
	id: "kr-life-career.md";
  slug: "kr-life-career";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kr-scholarship.md": {
	id: "kr-scholarship.md";
  slug: "kr-scholarship";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1159.md": {
	id: "liuxue-asia-1159.md";
  slug: "liuxue-asia-1159";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1160.md": {
	id: "liuxue-asia-1160.md";
  slug: "liuxue-asia-1160";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1161.md": {
	id: "liuxue-asia-1161.md";
  slug: "liuxue-asia-1161";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1162.md": {
	id: "liuxue-asia-1162.md";
  slug: "liuxue-asia-1162";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1163.md": {
	id: "liuxue-asia-1163.md";
  slug: "liuxue-asia-1163";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"liuxue-asia-1164.md": {
	id: "liuxue-asia-1164.md";
  slug: "liuxue-asia-1164";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"malaysia-degree-chinese-certification.md": {
	id: "malaysia-degree-chinese-certification.md";
  slug: "malaysia-degree-chinese-certification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"malaysia-public-vs-private-university.md": {
	id: "malaysia-public-vs-private-university.md";
  slug: "malaysia-public-vs-private-university";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"malaysia-student-visa-emgs.md": {
	id: "malaysia-student-visa-emgs.md";
  slug: "malaysia-student-visa-emgs";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"my-cost.md": {
	id: "my-cost.md";
  slug: "my-cost";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"my-guide.md": {
	id: "my-guide.md";
  slug: "my-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"my-life-career.md": {
	id: "my-life-career.md";
  slug: "my-life-career";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"my-twinning.md": {
	id: "my-twinning.md";
  slug: "my-twinning";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"polyu-vs-cityu-vs-hkbu-2027.md": {
	id: "polyu-vs-cityu-vs-hkbu-2027.md";
  slug: "polyu-vs-cityu-vs-hkbu-2027";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-cost-breakdown.md": {
	id: "sg-cost-breakdown.md";
  slug: "sg-cost-breakdown";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-living-guide.md": {
	id: "sg-living-guide.md";
  slug: "sg-living-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-masters-guide.md": {
	id: "sg-masters-guide.md";
  slug: "sg-masters-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-popular-majors.md": {
	id: "sg-popular-majors.md";
  slug: "sg-popular-majors";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-post-graduation-work.md": {
	id: "sg-post-graduation-work.md";
  slug: "sg-post-graduation-work";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-public-vs-private.md": {
	id: "sg-public-vs-private.md";
  slug: "sg-public-vs-private";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-study-guide.md": {
	id: "sg-study-guide.md";
  slug: "sg-study-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-undergrad-application.md": {
	id: "sg-undergrad-application.md";
  slug: "sg-undergrad-application";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-visa-guide.md": {
	id: "sg-visa-guide.md";
  slug: "sg-visa-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sg-vs-hk.md": {
	id: "sg-vs-hk.md";
  slug: "sg-vs-hk";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"singapore-alevel-vs-ib.md": {
	id: "singapore-alevel-vs-ib.md";
  slug: "singapore-alevel-vs-ib";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"singapore-low-age-with-parent.md": {
	id: "singapore-low-age-with-parent.md";
  slug: "singapore-low-age-with-parent";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"singapore-private-partnership-degree.md": {
	id: "singapore-private-partnership-degree.md";
  slug: "singapore-private-partnership-degree";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"singapore-research-vs-taught-master.md": {
	id: "singapore-research-vs-taught-master.md";
  slug: "singapore-research-vs-taught-master";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"welcome.md": {
	id: "welcome.md";
  slug: "welcome";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
