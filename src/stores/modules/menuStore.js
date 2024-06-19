import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
    state: () => ({
        isCollapse: false, // 导航栏是否折叠
    }),
    actions: {
        // 切换导航栏展开和收起的方法
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
        }
    }
});
