<template>
    <div class="content">
        <div class="md-layout">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-65"
            >
                <vue-cal class="md-card" style="height: 600px; background-color:white;"
                         selected-date="2020-02-18"
                         default-view="day"
                         :time-from="8 * 60"
                         :time-to="20 * 60"
                         :time-step="60"
                         :disable-views="['years', 'year', 'month']"
                         editable-events
                         :events="vueCalendar.events"
                         :hide-weekdays="[7]"
                         :split-days="vueCalendar.splitDays"
                         :sticky-split-labels="vueCalendar.stickySplitLabels"
                         :min-cell-width="vueCalendar.minCellWidth"
                         :min-split-width="vueCalendar.minSplitWidth">
                </vue-cal>
                <!--<chart-card
                  :chart-data="dailySalesChart.data"
                  :chart-options="dailySalesChart.options"
                  :chart-type="'Line'"
                  data-background-color="blue"
                >
                  <template slot="content">
                    <h4 class="title">Daily Sales</h4>
                    <p class="category">
                      <span class="text-success"
                        ><i class="fas fa-long-arrow-alt-up"></i> 55%
                      </span>
                      increase in today sales.
                    </p>
                  </template>

                  <template slot="footer">
                    <div class="stats">
                      <md-icon>access_time</md-icon>
                      updated 4 minutes ago
                    </div>
                  </template>
                </chart-card>-->
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
            >
                <chart-card
                        :chart-data="emailsSubscriptionChart.data"
                        :chart-options="emailsSubscriptionChart.options"
                        :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
                        :chart-type="'Bar'"
                        data-background-color="blue"
                >
                    <template slot="content">
                        <h4 class="title">Inscriptions auto-école</h4>
                        <p class="category">
                            Code + Permis
                        </p>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            mis à jour il y'a 6min.
                        </div>
                    </template>
                </chart-card>

                <chart-card
                        :chart-data="dailySalesChart.data"
                        :chart-options="dailySalesChart.options"
                        :chart-type="'Line'"
                        data-background-color="blue"
                >
                    <template slot="content">
                        <h4 class="title">Réussite permis</h4>
                        <p class="category">
              <span class="text-success"
              ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
                            de réussite de plus.
                        </p>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            Mis à jour il y'a 4min
                        </div>
                    </template>
                </chart-card>
            </div>

            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-22"
            >
                <stats-card data-background-color="indigo">
                    <template slot="header">
                        <md-icon>content_copy</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Dossiers</p>
                        <h3 class="title">
                            4
                            <small>(+2)</small>
                        </h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <a href="#pablo">Accèder aux dossiers</a>
                        </div>
                    </template>
                </stats-card>
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-22"
            >
                <stats-card data-background-color="indigo">
                    <template slot="header">
                        <md-icon>info_outline</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Paiements</p>
                        <h3 class="title">6</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon class="text-danger">warning</md-icon>
                            <a href="#pablo">Voir les paiments refusés</a>
                        </div>
                    </template>
                </stats-card>
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-22"
            >
                <stats-card data-background-color="indigo">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Trésorerie</p>
                        <h3 class="title">3,214€</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>date_range</md-icon>
                            Le 26 janvier
                        </div>
                    </template>
                </stats-card>

            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-22"
            >
                <stats-card data-background-color="indigo">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Revenue</p>
                        <h3 class="title">$34,245</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>date_range</md-icon>
                            Last 24 Hours
                        </div>
                    </template>
                </stats-card>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCal from 'vue-cal'
    import 'vue-cal/dist/vuecal.css'
    import {
        StatsCard,
        ChartCard,
        NavTabsCard,
        NavTabsTable,
        OrderedTable
    } from "@/components";

    export default {
        components: {
            VueCal,
            StatsCard,
            ChartCard
        },
        data() {
            return {
                dailySalesChart: {
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        series: [[12, 17, 7, 17, 23, 18, 38]]
                    },
                    options: {
                        lineSmooth: this.$Chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                dataCompletedTasksChart: {
                    data: {
                        labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
                        series: [[230, 750, 450, 300, 280, 240, 200, 190]]
                    },

                    options: {
                        lineSmooth: this.$Chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                emailsSubscriptionChart: {
                    data: {
                        labels: [
                            "Ja",
                            "Fe",
                            "Ma",
                            "Ap",
                            "Mai",
                            "Ju",
                            "Jul",
                            "Au",
                            "Se",
                            "Oc",
                            "No",
                            "De"
                        ],
                        series: [[12, 26, 16, 43, 22, 32, 26, 25, 40, 12, 31, 28]]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 50,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        [
                            "screen and (max-width: 640px)",
                            {
                                seriesBarDistance: 5,
                                axisX: {
                                    labelInterpolationFnc: function(value) {
                                        return value[0];
                                    }
                                }
                            }
                        ]
                    ]
                },
                vueCalendar: {
                    stickySplitLabels: false,
                    minCellWidth: 450,
                    minSplitWidth: 0,
                    splitDays: [
                        // The id property is added automatically if none (starting from 1), but you can set a custom one.
                        // If you need to toggle the splits, you must set the id explicitly.
                        { id: 1, class: 'mom', label: 'Antoine' }
                    ],
                    events: [
                        {
                            start: '2020-02-18 09:00',
                            end: '2020-02-18 11:00',
                            title: 'Conduite - Axel L.',
                            content: '<i class="v-icon material-icons">directions_car</i>',
                            class: 'health',
                            split: 1 // Has to match the id of the split you have set (or integers if none).
                        },
                        {
                            start: '2020-02-18 11:00',
                            end: '2020-02-18 13:00',
                            title: 'Conduite - Mouad B.',
                            content: '<i class="v-icon material-icons">directions_car</i>',
                            class: 'health',
                            split: 1 // Has to match the id of the split you have set (or integers if none).
                        },

                        {
                            start: '2020-02-18 14:00',
                            end: '2020-02-18 17:00',
                            title: 'Conduite - Valise .B',
                            content: '<i class="v-icon material-icons">directions_car</i>',
                            class: 'health',
                            split: 1 // Has to match the id of the split you have set (or integers if none).
                        }
                    ]
                }
            };
        }
    };
</script>
<style>
    .vuecal__menu, .vuecal__cell-events-count {background-color: #f57c00; border-radius: 3px 3px 0 0;}
    .vuecal__menu .vuecal__view-btn {color: #fff;}
    .vuecal__title-bar {background-color: #e4f5ef;}
    .vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
    .vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
    .vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}
    /* Cells and buttons get highlighted when an event is dragged over it. */
    .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
    .vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
    .vuecal__arrow.vuecal__arrow--highlighted,
    .vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}


    .vuecal__cell-split.dad {background-color: rgba(221, 238, 255, 0.5);}
    .vuecal__cell-split.mom {background-color: rgba(255, 232, 251, 0.5);}
    .vuecal__cell-split.kid1 {background-color: rgba(221, 255, 239, 0.5);}
    .vuecal__cell-split.kid2 {background-color: rgba(255, 250, 196, 0.5);}
    .vuecal__cell-split.kid3 {background-color: rgba(255, 206, 178, 0.5);}
    .vuecal__cell-split .split-label {color: rgba(0, 0, 0, 0.1);font-size: 26px;}


    .vuecal__event.verif {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
    .vuecal__event.health {background-color: #81d4fa;border: 1px solid rgb(144, 210, 190); color: #fff}
    .vuecal__event.sport {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}

    .vuecal__event.lunch {
        background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);/* IE 10+ */
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vuecal__event.lunch .vuecal__event-time {display: none;align-items: center;}
</style>