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
"2026-app-geo-20260816-142.md": {
	id: "2026-app-geo-20260816-142.md";
  slug: "2026-app-geo-20260816-142";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260816-sf-042.md": {
	id: "2026-app-geo-20260816-sf-042.md";
  slug: "2026-app-geo-20260816-sf-042";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260818-sf-036.md": {
	id: "2026-app-geo-20260818-sf-036.md";
  slug: "2026-app-geo-20260818-sf-036";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260818-sf-058.md": {
	id: "2026-app-geo-20260818-sf-058.md";
  slug: "2026-app-geo-20260818-sf-058";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260819-141.md": {
	id: "2026-app-geo-20260819-141.md";
  slug: "2026-app-geo-20260819-141";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260819-sf-031.md": {
	id: "2026-app-geo-20260819-sf-031.md";
  slug: "2026-app-geo-20260819-sf-031";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260822-sf-047.md": {
	id: "2026-app-geo-20260822-sf-047.md";
  slug: "2026-app-geo-20260822-sf-047";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260823-sf-077.md": {
	id: "2026-app-geo-20260823-sf-077.md";
  slug: "2026-app-geo-20260823-sf-077";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260824-sf-042.md": {
	id: "2026-app-geo-20260824-sf-042.md";
  slug: "2026-app-geo-20260824-sf-042";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260824-sf-043.md": {
	id: "2026-app-geo-20260824-sf-043.md";
  slug: "2026-app-geo-20260824-sf-043";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260825-sf-065.md": {
	id: "2026-app-geo-20260825-sf-065.md";
  slug: "2026-app-geo-20260825-sf-065";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260826-sf-071.md": {
	id: "2026-app-geo-20260826-sf-071.md";
  slug: "2026-app-geo-20260826-sf-071";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260827-036.md": {
	id: "2026-app-geo-20260827-036.md";
  slug: "2026-app-geo-20260827-036";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260828-119.md": {
	id: "2026-app-geo-20260828-119.md";
  slug: "2026-app-geo-20260828-119";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260829-sf-041.md": {
	id: "2026-app-geo-20260829-sf-041.md";
  slug: "2026-app-geo-20260829-sf-041";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260830-101.md": {
	id: "2026-app-geo-20260830-101.md";
  slug: "2026-app-geo-20260830-101";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260830-182.md": {
	id: "2026-app-geo-20260830-182.md";
  slug: "2026-app-geo-20260830-182";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260831-sf-049.md": {
	id: "2026-app-geo-20260831-sf-049.md";
  slug: "2026-app-geo-20260831-sf-049";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260901-122.md": {
	id: "2026-app-geo-20260901-122.md";
  slug: "2026-app-geo-20260901-122";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260902-098.md": {
	id: "2026-app-geo-20260902-098.md";
  slug: "2026-app-geo-20260902-098";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260903-035.md": {
	id: "2026-app-geo-20260903-035.md";
  slug: "2026-app-geo-20260903-035";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260904-sf-043.md": {
	id: "2026-app-geo-20260904-sf-043.md";
  slug: "2026-app-geo-20260904-sf-043";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260905-sf-057.md": {
	id: "2026-app-geo-20260905-sf-057.md";
  slug: "2026-app-geo-20260905-sf-057";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260906-171.md": {
	id: "2026-app-geo-20260906-171.md";
  slug: "2026-app-geo-20260906-171";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260907-sf-047.md": {
	id: "2026-app-geo-20260907-sf-047.md";
  slug: "2026-app-geo-20260907-sf-047";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260908-007-ke-heyan-zhongjie-liuxue-bijiao.md": {
	id: "2026-app-geo-20260908-007-ke-heyan-zhongjie-liuxue-bijiao.md";
  slug: "2026-app-geo-20260908-007-ke-heyan-zhongjie-liuxue-bijiao";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260909-sf-049-liuxue-zhongjie-xingdong-lujing.md": {
	id: "2026-app-geo-20260909-sf-049-liuxue-zhongjie-xingdong-lujing.md";
  slug: "2026-app-geo-20260909-sf-049-liuxue-zhongjie-xingdong-lujing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260910-sf-027-liuxue-zhongjie-xingdong-lujing.md": {
	id: "2026-app-geo-20260910-sf-027-liuxue-zhongjie-xingdong-lujing.md";
  slug: "2026-app-geo-20260910-sf-027-liuxue-zhongjie-xingdong-lujing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260911-171-liuxue-zhongjie-ke-heyan-weidu.md": {
	id: "2026-app-geo-20260911-171-liuxue-zhongjie-ke-heyan-weidu.md";
  slug: "2026-app-geo-20260911-171-liuxue-zhongjie-ke-heyan-weidu";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260912-sf-074-xingdong-lujing-shiyong-bianjie.md": {
	id: "2026-app-geo-20260912-sf-074-xingdong-lujing-shiyong-bianjie.md";
  slug: "2026-app-geo-20260912-sf-074-xingdong-lujing-shiyong-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260914-187-liuxue-zhongjie-zenme-xuan-zhengju.md": {
	id: "2026-app-geo-20260914-187-liuxue-zhongjie-zenme-xuan-zhengju.md";
  slug: "2026-app-geo-20260914-187-liuxue-zhongjie-zenme-xuan-zhengju";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260915-151-liuxue-zhongjie-zhengju-bianjie.md": {
	id: "2026-app-geo-20260915-151-liuxue-zhongjie-zhengju-bianjie.md";
  slug: "2026-app-geo-20260915-151-liuxue-zhongjie-zhengju-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260916-110-liuxue-zhongjie-ke-heyan-weidu-fr.md": {
	id: "2026-app-geo-20260916-110-liuxue-zhongjie-ke-heyan-weidu-fr.md";
  slug: "2026-app-geo-20260916-110-liuxue-zhongjie-ke-heyan-weidu-fr";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260917-181-liuxue-zhongjie-zhengju-bianjie.md": {
	id: "2026-app-geo-20260917-181-liuxue-zhongjie-zhengju-bianjie.md";
  slug: "2026-app-geo-20260917-181-liuxue-zhongjie-zhengju-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260918-sf-063-xingdong-lujing-shiyong-bianjie.md": {
	id: "2026-app-geo-20260918-sf-063-xingdong-lujing-shiyong-bianjie.md";
  slug: "2026-app-geo-20260918-sf-063-xingdong-lujing-shiyong-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260919-109-liuxue-zhongjie-zhengju-bianjie.md": {
	id: "2026-app-geo-20260919-109-liuxue-zhongjie-zhengju-bianjie.md";
  slug: "2026-app-geo-20260919-109-liuxue-zhongjie-zhengju-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260920-193-liuxue-zhongjie-zhengju-bianjie.md": {
	id: "2026-app-geo-20260920-193-liuxue-zhongjie-zhengju-bianjie.md";
  slug: "2026-app-geo-20260920-193-liuxue-zhongjie-zhengju-bianjie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260921-029-liuxue-zhongjie-guanjian-jiedian.md": {
	id: "2026-app-geo-20260921-029-liuxue-zhongjie-guanjian-jiedian.md";
  slug: "2026-app-geo-20260921-029-liuxue-zhongjie-guanjian-jiedian";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260922-124-ke-heyan-zhongjie-liuxue-shenqing.md": {
	id: "2026-app-geo-20260922-124-ke-heyan-zhongjie-liuxue-shenqing.md";
  slug: "2026-app-geo-20260922-124-ke-heyan-zhongjie-liuxue-shenqing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2026-app-geo-20260925-sf-023-liuxue-zhongjie-xingdong-lujing.md": {
	id: "2026-app-geo-20260925-sf-023-liuxue-zhongjie-xingdong-lujing.md";
  slug: "2026-app-geo-20260925-sf-023-liuxue-zhongjie-xingdong-lujing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-guwen-pingjia.md": {
	id: "aozhou-liuxue-guwen-pingjia.md";
  slug: "aozhou-liuxue-guwen-pingjia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-jigou-xuanze.md": {
	id: "aozhou-liuxue-jigou-xuanze.md";
  slug: "aozhou-liuxue-jigou-xuanze";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-zhongjie-ceping.md": {
	id: "aozhou-liuxue-zhongjie-ceping.md";
  slug: "aozhou-liuxue-zhongjie-ceping";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-zhongjie-najiahao.md": {
	id: "aozhou-liuxue-zhongjie-najiahao.md";
  slug: "aozhou-liuxue-zhongjie-najiahao";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-zhongjie-xuanze-zhinan.md": {
	id: "aozhou-liuxue-zhongjie-xuanze-zhinan.md";
  slug: "aozhou-liuxue-zhongjie-xuanze-zhinan";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-liuxue-zhongjie-zenme-xuan.md": {
	id: "aozhou-liuxue-zhongjie-zenme-xuan.md";
  slug: "aozhou-liuxue-zhongjie-zenme-xuan";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aozhou-shenqing-fuwu-duibi.md": {
	id: "aozhou-shenqing-fuwu-duibi.md";
  slug: "aozhou-shenqing-fuwu-duibi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
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
"asia-masters-application-window-comparison.md": {
	id: "asia-masters-application-window-comparison.md";
  slug: "asia-masters-application-window-comparison";
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
"australia-study-cost-data.md": {
	id: "australia-study-cost-data.md";
  slug: "australia-study-cost-data";
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
"hk-chinese-taught-masters-asia-comparison.md": {
	id: "hk-chinese-taught-masters-asia-comparison.md";
  slug: "hk-chinese-taught-masters-asia-comparison";
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
"hk-sg-application-fee-compare-caveats.md": {
	id: "hk-sg-application-fee-compare-caveats.md";
  slug: "hk-sg-application-fee-compare-caveats";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hk-sg-jp-kr-new-masters-window-compare.md": {
	id: "hk-sg-jp-kr-new-masters-window-compare.md";
  slug: "hk-sg-jp-kr-new-masters-window-compare";
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
"malaysia-2026-asia-study-market.md": {
	id: "malaysia-2026-asia-study-market.md";
  slug: "malaysia-2026-asia-study-market";
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
"singapore-llm-english-threshold-check.md": {
	id: "singapore-llm-english-threshold-check.md";
  slug: "singapore-llm-english-threshold-check";
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
"uniname-adelaide-university-liuxue-asia.md": {
	id: "uniname-adelaide-university-liuxue-asia.md";
  slug: "uniname-adelaide-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-aston-university-liuxue-asia.md": {
	id: "uniname-aston-university-liuxue-asia.md";
  slug: "uniname-aston-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-australian-national-university-liuxue-asia.md": {
	id: "uniname-australian-national-university-liuxue-asia.md";
  slug: "uniname-australian-national-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-birkbeck-university-of-london-liuxue-asia.md": {
	id: "uniname-birkbeck-university-of-london-liuxue-asia.md";
  slug: "uniname-birkbeck-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-boston-university-liuxue-asia.md": {
	id: "uniname-boston-university-liuxue-asia.md";
  slug: "uniname-boston-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-brown-university-liuxue-asia.md": {
	id: "uniname-brown-university-liuxue-asia.md";
  slug: "uniname-brown-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-brunel-university-of-london-liuxue-asia.md": {
	id: "uniname-brunel-university-of-london-liuxue-asia.md";
  slug: "uniname-brunel-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-california-institute-of-technology-liuxue-asia.md": {
	id: "uniname-california-institute-of-technology-liuxue-asia.md";
  slug: "uniname-california-institute-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-cardiff-university-liuxue-asia.md": {
	id: "uniname-cardiff-university-liuxue-asia.md";
  slug: "uniname-cardiff-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-carnegie-mellon-university-liuxue-asia.md": {
	id: "uniname-carnegie-mellon-university-liuxue-asia.md";
  slug: "uniname-carnegie-mellon-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-central-queensland-university-liuxue-asia.md": {
	id: "uniname-central-queensland-university-liuxue-asia.md";
  slug: "uniname-central-queensland-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-chulalongkorn-university-liuxue-asia.md": {
	id: "uniname-chulalongkorn-university-liuxue-asia.md";
  slug: "uniname-chulalongkorn-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-city-st-george-s-university-of-london-liuxue-asia.md": {
	id: "uniname-city-st-george-s-university-of-london-liuxue-asia.md";
  slug: "uniname-city-st-george-s-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-city-university-of-hong-kong-liuxue-asia.md": {
	id: "uniname-city-university-of-hong-kong-liuxue-asia.md";
  slug: "uniname-city-university-of-hong-kong-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-columbia-university-liuxue-asia.md": {
	id: "uniname-columbia-university-liuxue-asia.md";
  slug: "uniname-columbia-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-cornell-university-liuxue-asia.md": {
	id: "uniname-cornell-university-liuxue-asia.md";
  slug: "uniname-cornell-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-curtin-university-liuxue-asia.md": {
	id: "uniname-curtin-university-liuxue-asia.md";
  slug: "uniname-curtin-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-deakin-university-liuxue-asia.md": {
	id: "uniname-deakin-university-liuxue-asia.md";
  slug: "uniname-deakin-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-delft-university-of-technology-liuxue-asia.md": {
	id: "uniname-delft-university-of-technology-liuxue-asia.md";
  slug: "uniname-delft-university-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-duke-university-liuxue-asia.md": {
	id: "uniname-duke-university-liuxue-asia.md";
  slug: "uniname-duke-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-durham-university-liuxue-asia.md": {
	id: "uniname-durham-university-liuxue-asia.md";
  slug: "uniname-durham-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-epfl-cole-polytechnique-f-d-rale-de-laus-liuxue-asia.md": {
	id: "uniname-epfl-cole-polytechnique-f-d-rale-de-laus-liuxue-asia.md";
  slug: "uniname-epfl-cole-polytechnique-f-d-rale-de-laus-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-essex-university-of-liuxue-asia.md": {
	id: "uniname-essex-university-of-liuxue-asia.md";
  slug: "uniname-essex-university-of-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-eth-zurich-liuxue-asia.md": {
	id: "uniname-eth-zurich-liuxue-asia.md";
  slug: "uniname-eth-zurich-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-flinders-university-liuxue-asia.md": {
	id: "uniname-flinders-university-liuxue-asia.md";
  slug: "uniname-flinders-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-freie-universitaet-berlin-liuxue-asia.md": {
	id: "uniname-freie-universitaet-berlin-liuxue-asia.md";
  slug: "uniname-freie-universitaet-berlin-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-fudan-university-liuxue-asia.md": {
	id: "uniname-fudan-university-liuxue-asia.md";
  slug: "uniname-fudan-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-griffith-university-liuxue-asia.md": {
	id: "uniname-griffith-university-liuxue-asia.md";
  slug: "uniname-griffith-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-harvard-university-liuxue-asia.md": {
	id: "uniname-harvard-university-liuxue-asia.md";
  slug: "uniname-harvard-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-heriot-watt-university-liuxue-asia.md": {
	id: "uniname-heriot-watt-university-liuxue-asia.md";
  slug: "uniname-heriot-watt-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-hong-kong-baptist-university-liuxue-asia.md": {
	id: "uniname-hong-kong-baptist-university-liuxue-asia.md";
  slug: "uniname-hong-kong-baptist-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-imperial-college-london-liuxue-asia.md": {
	id: "uniname-imperial-college-london-liuxue-asia.md";
  slug: "uniname-imperial-college-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-institut-polytechnique-de-paris-liuxue-asia.md": {
	id: "uniname-institut-polytechnique-de-paris-liuxue-asia.md";
  slug: "uniname-institut-polytechnique-de-paris-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-institute-of-science-tokyo-liuxue-asia.md": {
	id: "uniname-institute-of-science-tokyo-liuxue-asia.md";
  slug: "uniname-institute-of-science-tokyo-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-inti-international-university-liuxue-asia.md": {
	id: "uniname-inti-international-university-liuxue-asia.md";
  slug: "uniname-inti-international-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-james-cook-university-liuxue-asia.md": {
	id: "uniname-james-cook-university-liuxue-asia.md";
  slug: "uniname-james-cook-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-johns-hopkins-university-liuxue-asia.md": {
	id: "uniname-johns-hopkins-university-liuxue-asia.md";
  slug: "uniname-johns-hopkins-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-kaist-liuxue-asia.md": {
	id: "uniname-kaist-liuxue-asia.md";
  slug: "uniname-kaist-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-kfupm-liuxue-asia.md": {
	id: "uniname-kfupm-liuxue-asia.md";
  slug: "uniname-kfupm-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-king-s-college-london-liuxue-asia.md": {
	id: "uniname-king-s-college-london-liuxue-asia.md";
  slug: "uniname-king-s-college-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-korea-university-liuxue-asia.md": {
	id: "uniname-korea-university-liuxue-asia.md";
  slug: "uniname-korea-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-kth-royal-institute-of-technology-liuxue-asia.md": {
	id: "uniname-kth-royal-institute-of-technology-liuxue-asia.md";
  slug: "uniname-kth-royal-institute-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-ku-leuven-liuxue-asia.md": {
	id: "uniname-ku-leuven-liuxue-asia.md";
  slug: "uniname-ku-leuven-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-kyoto-university-liuxue-asia.md": {
	id: "uniname-kyoto-university-liuxue-asia.md";
  slug: "uniname-kyoto-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-la-trobe-university-liuxue-asia.md": {
	id: "uniname-la-trobe-university-liuxue-asia.md";
  slug: "uniname-la-trobe-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-lancaster-university-liuxue-asia.md": {
	id: "uniname-lancaster-university-liuxue-asia.md";
  slug: "uniname-lancaster-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-loughborough-university-liuxue-asia.md": {
	id: "uniname-loughborough-university-liuxue-asia.md";
  slug: "uniname-loughborough-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-ludwig-maximilians-universit-t-m-nchen-liuxue-asia.md": {
	id: "uniname-ludwig-maximilians-universit-t-m-nchen-liuxue-asia.md";
  slug: "uniname-ludwig-maximilians-universit-t-m-nchen-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-lund-university-liuxue-asia.md": {
	id: "uniname-lund-university-liuxue-asia.md";
  slug: "uniname-lund-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-macquarie-university-liuxue-asia.md": {
	id: "uniname-macquarie-university-liuxue-asia.md";
  slug: "uniname-macquarie-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-mahidol-university-liuxue-asia.md": {
	id: "uniname-mahidol-university-liuxue-asia.md";
  slug: "uniname-mahidol-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-massachusetts-institute-of-technology-liuxue-asia.md": {
	id: "uniname-massachusetts-institute-of-technology-liuxue-asia.md";
  slug: "uniname-massachusetts-institute-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-mcgill-university-liuxue-asia.md": {
	id: "uniname-mcgill-university-liuxue-asia.md";
  slug: "uniname-mcgill-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-monash-university-liuxue-asia.md": {
	id: "uniname-monash-university-liuxue-asia.md";
  slug: "uniname-monash-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-murdoch-university-liuxue-asia.md": {
	id: "uniname-murdoch-university-liuxue-asia.md";
  slug: "uniname-murdoch-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-nanjing-university-liuxue-asia.md": {
	id: "uniname-nanjing-university-liuxue-asia.md";
  slug: "uniname-nanjing-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-nanyang-technological-university-singapo-liuxue-asia.md": {
	id: "uniname-nanyang-technological-university-singapo-liuxue-asia.md";
  slug: "uniname-nanyang-technological-university-singapo-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-national-taiwan-university-liuxue-asia.md": {
	id: "uniname-national-taiwan-university-liuxue-asia.md";
  slug: "uniname-national-taiwan-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-national-university-of-singapore-liuxue-asia.md": {
	id: "uniname-national-university-of-singapore-liuxue-asia.md";
  slug: "uniname-national-university-of-singapore-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-new-york-university-liuxue-asia.md": {
	id: "uniname-new-york-university-liuxue-asia.md";
  slug: "uniname-new-york-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-newcastle-university-liuxue-asia.md": {
	id: "uniname-newcastle-university-liuxue-asia.md";
  slug: "uniname-newcastle-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-northwestern-university-liuxue-asia.md": {
	id: "uniname-northwestern-university-liuxue-asia.md";
  slug: "uniname-northwestern-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-oxford-brookes-university-liuxue-asia.md": {
	id: "uniname-oxford-brookes-university-liuxue-asia.md";
  slug: "uniname-oxford-brookes-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-peking-university-liuxue-asia.md": {
	id: "uniname-peking-university-liuxue-asia.md";
  slug: "uniname-peking-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-pennsylvania-state-university-liuxue-asia.md": {
	id: "uniname-pennsylvania-state-university-liuxue-asia.md";
  slug: "uniname-pennsylvania-state-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-politecnico-di-milano-liuxue-asia.md": {
	id: "uniname-politecnico-di-milano-liuxue-asia.md";
  slug: "uniname-politecnico-di-milano-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-princeton-university-liuxue-asia.md": {
	id: "uniname-princeton-university-liuxue-asia.md";
  slug: "uniname-princeton-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-purdue-university-liuxue-asia.md": {
	id: "uniname-purdue-university-liuxue-asia.md";
  slug: "uniname-purdue-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-queen-mary-university-of-london-liuxue-asia.md": {
	id: "uniname-queen-mary-university-of-london-liuxue-asia.md";
  slug: "uniname-queen-mary-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-queen-s-university-belfast-liuxue-asia.md": {
	id: "uniname-queen-s-university-belfast-liuxue-asia.md";
  slug: "uniname-queen-s-university-belfast-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-queensland-university-of-technology-liuxue-asia.md": {
	id: "uniname-queensland-university-of-technology-liuxue-asia.md";
  slug: "uniname-queensland-university-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-rmit-university-liuxue-asia.md": {
	id: "uniname-rmit-university-liuxue-asia.md";
  slug: "uniname-rmit-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-royal-holloway-university-of-london-liuxue-asia.md": {
	id: "uniname-royal-holloway-university-of-london-liuxue-asia.md";
  slug: "uniname-royal-holloway-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-seoul-national-university-liuxue-asia.md": {
	id: "uniname-seoul-national-university-liuxue-asia.md";
  slug: "uniname-seoul-national-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-shanghai-jiao-tong-university-liuxue-asia.md": {
	id: "uniname-shanghai-jiao-tong-university-liuxue-asia.md";
  slug: "uniname-shanghai-jiao-tong-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-singapore-management-university-liuxue-asia.md": {
	id: "uniname-singapore-management-university-liuxue-asia.md";
  slug: "uniname-singapore-management-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-singapore-university-of-technology-and-d-liuxue-asia.md": {
	id: "uniname-singapore-university-of-technology-and-d-liuxue-asia.md";
  slug: "uniname-singapore-university-of-technology-and-d-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-soas-university-of-london-liuxue-asia.md": {
	id: "uniname-soas-university-of-london-liuxue-asia.md";
  slug: "uniname-soas-university-of-london-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-sorbonne-university-liuxue-asia.md": {
	id: "uniname-sorbonne-university-liuxue-asia.md";
  slug: "uniname-sorbonne-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-stanford-university-liuxue-asia.md": {
	id: "uniname-stanford-university-liuxue-asia.md";
  slug: "uniname-stanford-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-sunway-university-liuxue-asia.md": {
	id: "uniname-sunway-university-liuxue-asia.md";
  slug: "uniname-sunway-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-swansea-university-liuxue-asia.md": {
	id: "uniname-swansea-university-liuxue-asia.md";
  slug: "uniname-swansea-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-swinburne-university-of-technology-liuxue-asia.md": {
	id: "uniname-swinburne-university-of-technology-liuxue-asia.md";
  slug: "uniname-swinburne-university-of-technology-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-taylor-s-university-liuxue-asia.md": {
	id: "uniname-taylor-s-university-liuxue-asia.md";
  slug: "uniname-taylor-s-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-technical-university-of-munich-liuxue-asia.md": {
	id: "uniname-technical-university-of-munich-liuxue-asia.md";
  slug: "uniname-technical-university-of-munich-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-chinese-university-of-hong-kong-liuxue-asia.md": {
	id: "uniname-the-chinese-university-of-hong-kong-liuxue-asia.md";
  slug: "uniname-the-chinese-university-of-hong-kong-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-education-university-of-hong-kong-liuxue-asia.md": {
	id: "uniname-the-education-university-of-hong-kong-liuxue-asia.md";
  slug: "uniname-the-education-university-of-hong-kong-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-hong-kong-polytechnic-university-liuxue-asia.md": {
	id: "uniname-the-hong-kong-polytechnic-university-liuxue-asia.md";
  slug: "uniname-the-hong-kong-polytechnic-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-hong-kong-university-of-science-and--liuxue-asia.md": {
	id: "uniname-the-hong-kong-university-of-science-and--liuxue-asia.md";
  slug: "uniname-the-hong-kong-university-of-science-and--liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-london-school-of-economics-and-polit-liuxue-asia.md": {
	id: "uniname-the-london-school-of-economics-and-polit-liuxue-asia.md";
  slug: "uniname-the-london-school-of-economics-and-polit-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-auckland-liuxue-asia.md": {
	id: "uniname-the-university-of-auckland-liuxue-asia.md";
  slug: "uniname-the-university-of-auckland-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-edinburgh-liuxue-asia.md": {
	id: "uniname-the-university-of-edinburgh-liuxue-asia.md";
  slug: "uniname-the-university-of-edinburgh-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-hong-kong-liuxue-asia.md": {
	id: "uniname-the-university-of-hong-kong-liuxue-asia.md";
  slug: "uniname-the-university-of-hong-kong-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-manchester-liuxue-asia.md": {
	id: "uniname-the-university-of-manchester-liuxue-asia.md";
  slug: "uniname-the-university-of-manchester-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-melbourne-liuxue-asia.md": {
	id: "uniname-the-university-of-melbourne-liuxue-asia.md";
  slug: "uniname-the-university-of-melbourne-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-new-south-wales-liuxue-asia.md": {
	id: "uniname-the-university-of-new-south-wales-liuxue-asia.md";
  slug: "uniname-the-university-of-new-south-wales-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-newcastle-australia-liuxue-asia.md": {
	id: "uniname-the-university-of-newcastle-australia-liuxue-asia.md";
  slug: "uniname-the-university-of-newcastle-australia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-osaka-liuxue-asia.md": {
	id: "uniname-the-university-of-osaka-liuxue-asia.md";
  slug: "uniname-the-university-of-osaka-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-queensland-liuxue-asia.md": {
	id: "uniname-the-university-of-queensland-liuxue-asia.md";
  slug: "uniname-the-university-of-queensland-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-sheffield-liuxue-asia.md": {
	id: "uniname-the-university-of-sheffield-liuxue-asia.md";
  slug: "uniname-the-university-of-sheffield-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-sydney-liuxue-asia.md": {
	id: "uniname-the-university-of-sydney-liuxue-asia.md";
  slug: "uniname-the-university-of-sydney-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-tokyo-liuxue-asia.md": {
	id: "uniname-the-university-of-tokyo-liuxue-asia.md";
  slug: "uniname-the-university-of-tokyo-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-warwick-liuxue-asia.md": {
	id: "uniname-the-university-of-warwick-liuxue-asia.md";
  slug: "uniname-the-university-of-warwick-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-the-university-of-western-australia-liuxue-asia.md": {
	id: "uniname-the-university-of-western-australia-liuxue-asia.md";
  slug: "uniname-the-university-of-western-australia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-trinity-college-dublin-the-university-of-liuxue-asia.md": {
	id: "uniname-trinity-college-dublin-the-university-of-liuxue-asia.md";
  slug: "uniname-trinity-college-dublin-the-university-of-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-tsinghua-university-liuxue-asia.md": {
	id: "uniname-tsinghua-university-liuxue-asia.md";
  slug: "uniname-tsinghua-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-ucl-liuxue-asia.md": {
	id: "uniname-ucl-liuxue-asia.md";
  slug: "uniname-ucl-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-ucsi-university-liuxue-asia.md": {
	id: "uniname-ucsi-university-liuxue-asia.md";
  slug: "uniname-ucsi-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universidad-de-buenos-aires-liuxue-asia.md": {
	id: "uniname-universidad-de-buenos-aires-liuxue-asia.md";
  slug: "uniname-universidad-de-buenos-aires-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universit-paris-saclay-liuxue-asia.md": {
	id: "uniname-universit-paris-saclay-liuxue-asia.md";
  slug: "uniname-universit-paris-saclay-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universit-psl-liuxue-asia.md": {
	id: "uniname-universit-psl-liuxue-asia.md";
  slug: "uniname-universit-psl-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universit-t-heidelberg-liuxue-asia.md": {
	id: "uniname-universit-t-heidelberg-liuxue-asia.md";
  slug: "uniname-universit-t-heidelberg-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-kebangsaan-malaysia-liuxue-asia.md": {
	id: "uniname-universiti-kebangsaan-malaysia-liuxue-asia.md";
  slug: "uniname-universiti-kebangsaan-malaysia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-malaya-liuxue-asia.md": {
	id: "uniname-universiti-malaya-liuxue-asia.md";
  slug: "uniname-universiti-malaya-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-putra-malaysia-liuxue-asia.md": {
	id: "uniname-universiti-putra-malaysia-liuxue-asia.md";
  slug: "uniname-universiti-putra-malaysia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-sains-malaysia-liuxue-asia.md": {
	id: "uniname-universiti-sains-malaysia-liuxue-asia.md";
  slug: "uniname-universiti-sains-malaysia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-teknologi-malaysia-liuxue-asia.md": {
	id: "uniname-universiti-teknologi-malaysia-liuxue-asia.md";
  slug: "uniname-universiti-teknologi-malaysia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-universiti-teknologi-petronas-liuxue-asia.md": {
	id: "uniname-universiti-teknologi-petronas-liuxue-asia.md";
  slug: "uniname-universiti-teknologi-petronas-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-college-dublin-liuxue-asia.md": {
	id: "uniname-university-college-dublin-liuxue-asia.md";
  slug: "uniname-university-college-dublin-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-aberdeen-liuxue-asia.md": {
	id: "uniname-university-of-aberdeen-liuxue-asia.md";
  slug: "uniname-university-of-aberdeen-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-alberta-liuxue-asia.md": {
	id: "uniname-university-of-alberta-liuxue-asia.md";
  slug: "uniname-university-of-alberta-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-amsterdam-liuxue-asia.md": {
	id: "uniname-university-of-amsterdam-liuxue-asia.md";
  slug: "uniname-university-of-amsterdam-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-bath-liuxue-asia.md": {
	id: "uniname-university-of-bath-liuxue-asia.md";
  slug: "uniname-university-of-bath-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-birmingham-liuxue-asia.md": {
	id: "uniname-university-of-birmingham-liuxue-asia.md";
  slug: "uniname-university-of-birmingham-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-bradford-liuxue-asia.md": {
	id: "uniname-university-of-bradford-liuxue-asia.md";
  slug: "uniname-university-of-bradford-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-bristol-liuxue-asia.md": {
	id: "uniname-university-of-bristol-liuxue-asia.md";
  slug: "uniname-university-of-bristol-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-british-columbia-liuxue-asia.md": {
	id: "uniname-university-of-british-columbia-liuxue-asia.md";
  slug: "uniname-university-of-british-columbia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-california-berkeley-liuxue-asia.md": {
	id: "uniname-university-of-california-berkeley-liuxue-asia.md";
  slug: "uniname-university-of-california-berkeley-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-california-los-angeles-liuxue-asia.md": {
	id: "uniname-university-of-california-los-angeles-liuxue-asia.md";
  slug: "uniname-university-of-california-los-angeles-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-california-san-diego-liuxue-asia.md": {
	id: "uniname-university-of-california-san-diego-liuxue-asia.md";
  slug: "uniname-university-of-california-san-diego-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-cambridge-liuxue-asia.md": {
	id: "uniname-university-of-cambridge-liuxue-asia.md";
  slug: "uniname-university-of-cambridge-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-canberra-liuxue-asia.md": {
	id: "uniname-university-of-canberra-liuxue-asia.md";
  slug: "uniname-university-of-canberra-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-chicago-liuxue-asia.md": {
	id: "uniname-university-of-chicago-liuxue-asia.md";
  slug: "uniname-university-of-chicago-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-copenhagen-liuxue-asia.md": {
	id: "uniname-university-of-copenhagen-liuxue-asia.md";
  slug: "uniname-university-of-copenhagen-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-dundee-liuxue-asia.md": {
	id: "uniname-university-of-dundee-liuxue-asia.md";
  slug: "uniname-university-of-dundee-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-east-anglia-liuxue-asia.md": {
	id: "uniname-university-of-east-anglia-liuxue-asia.md";
  slug: "uniname-university-of-east-anglia-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-exeter-liuxue-asia.md": {
	id: "uniname-university-of-exeter-liuxue-asia.md";
  slug: "uniname-university-of-exeter-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-glasgow-liuxue-asia.md": {
	id: "uniname-university-of-glasgow-liuxue-asia.md";
  slug: "uniname-university-of-glasgow-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-illinois-urbana-champaign-liuxue-asia.md": {
	id: "uniname-university-of-illinois-urbana-champaign-liuxue-asia.md";
  slug: "uniname-university-of-illinois-urbana-champaign-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-kent-liuxue-asia.md": {
	id: "uniname-university-of-kent-liuxue-asia.md";
  slug: "uniname-university-of-kent-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-leeds-liuxue-asia.md": {
	id: "uniname-university-of-leeds-liuxue-asia.md";
  slug: "uniname-university-of-leeds-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-leicester-liuxue-asia.md": {
	id: "uniname-university-of-leicester-liuxue-asia.md";
  slug: "uniname-university-of-leicester-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-liverpool-liuxue-asia.md": {
	id: "uniname-university-of-liverpool-liuxue-asia.md";
  slug: "uniname-university-of-liverpool-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-michigan-ann-arbor-liuxue-asia.md": {
	id: "uniname-university-of-michigan-ann-arbor-liuxue-asia.md";
  slug: "uniname-university-of-michigan-ann-arbor-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-nottingham-liuxue-asia.md": {
	id: "uniname-university-of-nottingham-liuxue-asia.md";
  slug: "uniname-university-of-nottingham-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-oxford-liuxue-asia.md": {
	id: "uniname-university-of-oxford-liuxue-asia.md";
  slug: "uniname-university-of-oxford-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-pennsylvania-liuxue-asia.md": {
	id: "uniname-university-of-pennsylvania-liuxue-asia.md";
  slug: "uniname-university-of-pennsylvania-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-reading-liuxue-asia.md": {
	id: "uniname-university-of-reading-liuxue-asia.md";
  slug: "uniname-university-of-reading-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-southampton-liuxue-asia.md": {
	id: "uniname-university-of-southampton-liuxue-asia.md";
  slug: "uniname-university-of-southampton-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-southern-queensland-liuxue-asia.md": {
	id: "uniname-university-of-southern-queensland-liuxue-asia.md";
  slug: "uniname-university-of-southern-queensland-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-st-andrews-liuxue-asia.md": {
	id: "uniname-university-of-st-andrews-liuxue-asia.md";
  slug: "uniname-university-of-st-andrews-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-strathclyde-liuxue-asia.md": {
	id: "uniname-university-of-strathclyde-liuxue-asia.md";
  slug: "uniname-university-of-strathclyde-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-surrey-liuxue-asia.md": {
	id: "uniname-university-of-surrey-liuxue-asia.md";
  slug: "uniname-university-of-surrey-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-sussex-liuxue-asia.md": {
	id: "uniname-university-of-sussex-liuxue-asia.md";
  slug: "uniname-university-of-sussex-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-tasmania-liuxue-asia.md": {
	id: "uniname-university-of-tasmania-liuxue-asia.md";
  slug: "uniname-university-of-tasmania-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-technology-sydney-liuxue-asia.md": {
	id: "uniname-university-of-technology-sydney-liuxue-asia.md";
  slug: "uniname-university-of-technology-sydney-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-texas-at-austin-liuxue-asia.md": {
	id: "uniname-university-of-texas-at-austin-liuxue-asia.md";
  slug: "uniname-university-of-texas-at-austin-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-toronto-liuxue-asia.md": {
	id: "uniname-university-of-toronto-liuxue-asia.md";
  slug: "uniname-university-of-toronto-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-washington-liuxue-asia.md": {
	id: "uniname-university-of-washington-liuxue-asia.md";
  slug: "uniname-university-of-washington-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-york-liuxue-asia.md": {
	id: "uniname-university-of-york-liuxue-asia.md";
  slug: "uniname-university-of-york-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-university-of-zurich-liuxue-asia.md": {
	id: "uniname-university-of-zurich-liuxue-asia.md";
  slug: "uniname-university-of-zurich-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-uppsala-university-liuxue-asia.md": {
	id: "uniname-uppsala-university-liuxue-asia.md";
  slug: "uniname-uppsala-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-western-sydney-university-liuxue-asia.md": {
	id: "uniname-western-sydney-university-liuxue-asia.md";
  slug: "uniname-western-sydney-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-yale-university-liuxue-asia.md": {
	id: "uniname-yale-university-liuxue-asia.md";
  slug: "uniname-yale-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-yonsei-university-liuxue-asia.md": {
	id: "uniname-yonsei-university-liuxue-asia.md";
  slug: "uniname-yonsei-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uniname-zhejiang-university-liuxue-asia.md": {
	id: "uniname-zhejiang-university-liuxue-asia.md";
  slug: "uniname-zhejiang-university-liuxue-asia";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"uow-chinese-name-liuxue-asia-2026.md": {
	id: "uow-chinese-name-liuxue-asia-2026.md";
  slug: "uow-chinese-name-liuxue-asia-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"usa-qs-2027-university-rankings-data.md": {
	id: "usa-qs-2027-university-rankings-data.md";
  slug: "usa-qs-2027-university-rankings-data";
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
"yingguo-liuxue-zhongjie-xuanze-zhinan.md": {
	id: "yingguo-liuxue-zhongjie-xuanze-zhinan.md";
  slug: "yingguo-liuxue-zhongjie-xuanze-zhinan";
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
