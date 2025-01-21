# 5G插件

## 說明
版本要求: >=CocosCreator 3.7.2

點擊按鈕印出當前場景各Node綁Component狀況, 不用在節點樹一一點擊看綁了什麼Class

## 使用方式

將項目下載放到 `專案/extensions` 資料夾下

首次開啟要下指令 `npm install` 以及 `npm run build`

擴展->擴展管理器->啟用5g-plugin

上方選單會多出 `5G開發` 選單

![](/img/Snipaste_2025-01-22_00-09-16.png)

點擊按鈕後會印出當前場景掛載Component狀況(僅列出自訂Class以及有綁定Event的Button)

點擊Console的uuid會自動選中目標物件, 方便查看綁定什麼自訂Component

![](/img/Snipaste_2025-01-22_00-04-58.png)

## 修改
每次修改完下指令 `npm run build`

修改後要到IDE內重新到"擴展"->"擴展管理器"->"已安裝擴展"->"5g-plugin"重新停用、啟用，修改才會生效