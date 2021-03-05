<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" :key="tab">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {tabs: [] };
  },

  created() {
    this.tabs = this.$children;

  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },
}
</script>

<style scoped>
.tabs:not(:last-child) {
  margin-bottom: 1.5rem;
}
.tabs {
  -webkit-overflow-scrolling: touch;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tabs ul {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

}
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.tabs li {
  display: block;
  font-size: 14px;
  line-height: 30px;
}

.tabs li.is-active a {
  border-bottom-color: #f9826c;
  color: #00d1b2;
}
.tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}
a {
  color: #00d1b2;
  cursor: pointer;
  text-decoration: none !important;
  -webkit-transition: none 86ms ease-out;
  transition: none 86ms ease-out;
}
.tabs a {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  color: #4a4a4a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: -1px;
  padding: .5em 1em;
  vertical-align: top;
}
a:hover {
  color: #363636;
}

</style>
