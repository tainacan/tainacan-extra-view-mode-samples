<template>
    <div class="demo-2-view-mode grid-demo-2">

        <!-- Empty result placeholder -->
        <section
                v-if="!isLoading && items.length <= 0"
                class="section">
            <div class="content has-text-gray4 has-text-centered">
                <p>
                    <span class="icon is-large">
                        <i class="tainacan-icon tainacan-icon-36px tainacan-icon-items" />
                    </span>
                </p>
                <p>{{ __('No item found', 'tainacan-extra-viewmode-component-demo') }}</p>
            </div>
        </section>

        <!-- SKELETON LOADING -->
        <ul 
                v-if="isLoading"
                class="grid tainacan-masonry-container">
            <li 
                    :key="item"
                    v-for="item in 12"
                    :style="{'min-height': randomHeightForMasonryItem() + 'px' }"
                    class="skeleton tainacan-masonry-item" />
        </ul>
        
        <ul 
                v-if="!isLoading && items.length > 0"
                class="grid">
            <li v-for="(item, index) of items" :key="index">
                <a target="_blank" :href="getItemLink(item.url, index)">
                    <figure>
                        <img 
                            :alt="item.thumbnail_alt ? item.thumbnail_alt : $i18n.get('label_thumbnail')"
                            v-if="item.thumbnail != undefined"
                            :src="item['thumbnail']['tainacan-medium-full'] ? item['thumbnail']['tainacan-medium-full'][0] : (item['thumbnail'].medium ? item['thumbnail'].medium[0] : thumbPlaceholderPath)">  
                        <figcaption>
                            <h3>
                                <span 
                                        v-for="(column, metadatumIndex) in displayedMetadata"
                                        :key="metadatumIndex"
                                        v-if="column.display && column.metadata_type_object != undefined && (column.metadata_type_object.related_mapped_prop == 'title')"
                                        v-html="item.metadata != undefined && collectionId ? renderMetadata(item.metadata, column) : (item.title ? item.title :`<span class='has-text-gray3 is-italic'>` + $i18n.get('label_value_not_provided') + `</span>`)" />   
                            </h3>
                            <a 
                                    v-if="isSlideshowViewModeEnabled"
                                    @click.prevent="starSlideshowFromHere(index)">
                                <span class="icon slideshow-icon">
                                    <i class="tainacan-icon tainacan-icon-1-125em tainacan-icon-viewgallery" />
                                </span>
                            </a>
                        </figcaption>
                    </figure>
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
import qs from 'qs';

export default {
    name: "ViewModeDemo2",
    data() {
        return {
            thumbPlaceholderPath: tainacan_plugin.base_url + '/assets/images/placeholder_square.png',
            isSlideshowViewModeEnabled: false
        }
    },
    props: {
        collectionId: Number,
        displayedMetadata: Array,
        items:  {
            type: Array,
            default: () => [],
            required: true
        },
        isLoading: false,
        totalItems: Number,
        isFiltersMenuCompressed: Boolean,
        enabledViewModes: Array
    },
    computed: {
        __() {
            return wp.i18n ? wp.i18n.__ : ((str, ctx) => str)
        },
        queries() {
            let currentQueries = JSON.parse(JSON.stringify(this.$route.query));
            if (currentQueries) {
                delete currentQueries['view_mode'];
                delete currentQueries['fetch_only'];
                delete currentQueries['fetch_only_meta'];
            }
            return currentQueries
        }
    },
    mounted() {
        console.log(this.items)
        this.isSlideshowViewModeEnabled = this.enabledViewModes.findIndex((viewMode) => viewMode == 'slideshow') >= 0;
    },
    methods: {
        getItemLink(itemUrl, index) {
            if (this.queries) {
                // Inserts information necessary for item by item navigation on single pages
                this.queries['pos'] = ((this.queries['paged'] - 1) * this.queries['perpage']) + index;
                this.queries['source_list'] = this.$root.termId ? 'term' : (!this.$root.collectionId || this.$root.collectionId == 'default' ? 'repository' : 'collection');
                this.queries['ref'] = this.$route.path;
                return itemUrl + '?' + qs.stringify(this.queries);
            }
            return itemUrl;
        },
        renderMetadata(itemMetadata, metadatum) {
            let metadata = (itemMetadata && itemMetadata[metadatum.slug] != undefined) ? itemMetadata[metadatum.slug] : false;

            if (!metadata)
                return '';
            else
                return metadata.value_as_html;
        },
        randomHeightForMasonryItem() {
            let min = 120;
            let max = 380;

            return Math.floor(Math.random()*(max-min+1)+min);
        },
        starSlideshowFromHere(index) {
            this.$router.replace({ query: {...this.$route.query, ...{'slideshow-from': index } }}).catch((error) => this.$console.log(error));
        }
    }
}
</script>
