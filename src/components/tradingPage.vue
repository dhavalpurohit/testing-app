<template>
  <div style="background: black" class="full">
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="1"
      :is-draggable="false"
      :is-resizable="false"
      :autoSize="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[0, 0]"
      :use-css-transforms="true"
    >
      <grid-item
        :x="cards.marketInfo.x"
        :y="cards.marketInfo.y"
        :w="cards.marketInfo.w"
        :h="cards.marketInfo.h"
        :i="cards.marketInfo.i"
        :key="cards.marketInfo.i"
      >
        <div style="align-self: center">{{ cards.marketInfo.title }}</div>
        <!-- Market info component goes here -->
      </grid-item>
      <grid-item
        :x="cards.chooseMarket.x"
        :y="cards.chooseMarket.y"
        :w="cards.chooseMarket.w"
        :h="cards.chooseMarket.h"
        :i="cards.chooseMarket.i"
        :key="cards.chooseMarket.i"
      >
        <div style="align-self: center">{{ cards.chooseMarket.title }}</div>
        <!-- Choose market dropdown component goes here -->
      </grid-item>
      <grid-item
        :x="cards.recentTrades.x"
        :y="cards.recentTrades.y"
        :w="cards.recentTrades.w"
        :h="cards.recentTrades.h"
        :i="cards.recentTrades.i"
        :key="cards.recentTrades.i"
      >
        <div style="align-self: center">{{ cards.recentTrades.title }}</div>
        <!-- recent trades component goes here -->
      </grid-item>
      <grid-item
        :x="cards.chart.x"
        :y="cards.chart.y"
        :w="cards.chart.w"
        :h="cards.chart.h"
        :i="cards.chart.i"
        :key="cards.chart.i"
      >
        <div style="align-self: center">{{ cards.chart.title }}</div>
        <!-- chart goes here -->
      </grid-item>
      <grid-item
        :x="cards.buySell.x"
        :y="cards.buySell.y"
        :w="cards.buySell.w"
        :h="cards.buySell.h"
        :i="cards.buySell.i"
        :key="cards.buySell.i"
      >
        <div style="align-self: center">{{ cards.buySell.title }}</div>
        <!-- buy sell component goes here -->
      </grid-item>
      <grid-item
        :x="cards.positions.x"
        :y="cards.positions.y"
        :w="cards.positions.w"
        :h="cards.positions.h"
        :i="cards.positions.i"
        :key="cards.positions.i"
      >
        <div style="align-self: center">{{ cards.positions.title }}</div>
        <!-- open positions component goes here -->
      </grid-item>
      <grid-item
        :x="cards.accountInfo.x"
        :y="cards.accountInfo.y"
        :w="cards.accountInfo.w"
        :h="cards.accountInfo.h"
        :i="cards.accountInfo.i"
        :key="cards.accountInfo.i"
      >
        <div style="align-self: center">{{ cards.accountInfo.title }}</div>
        <!-- Account Info component goes here -->
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";

export default {
  components: {
    GridLayout,
    GridItem,
  },
  setup() {
    const cards = {
      marketInfo: { x: 0, y: 1, w: 9, h: 79, i: "0", title: "Market Info" },
      chooseMarket: {
        x: 9,
        y: 1,
        w: 3,
        h: 79,
        i: "1",
        title: "Choose Market",
      },
      recentTrades: {
        x: 0,
        y: 2,
        w: 3,
        h: 592,
        i: "2",
        title: "Recent Trades",
      },
      chart: {
        x: 3,
        y: 2,
        w: 6,
        h: 592,
        i: "3",
        title: "Chart (TradingView)",
      },
      buySell: { x: 9, y: 2, w: 3, h: 592, i: "4", title: "Buy/Sell" },
      positions: { x: 0, y: 3, w: 9, h: 341, i: "5", title: "Positions" },
      accountInfo: { x: 9, y: 3, w: 3, h: 341, i: "6", title: "Account info" },
    };

    // This return you can use in the template
    return {
      cards,
      layout: Object.keys(cards).map((key) => cards[key]),
    };
  },
};
</script>

<style scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  border: 1px solid greenyellow;
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>