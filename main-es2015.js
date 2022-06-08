(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-full dark:bg-[#101111]\">\n  <div class=\"flex w-full relative min-h-screen\">\n     <div *ngIf=\"isDesktop\" class=\"bg-[#091117] bg-opacity-100 shadow md:fixed top-[0] flex flex-col border-r dark:border-[#292929]\n        w-60 transition-all duration-300\n        \" style=\"height: calc(100vh);\">\n        <div class=\"flex-1 pb-3 overflow-auto scrollbar-custom\">\n          <img src=\"/assets/icon/Icon-192.png\" alt=\"Keeprunning Logo\" class=\"mx-auto my-8 w-20\">\n          <div class=\"\">\n             <button [ngClass]=\"currentUrl == '/dashboard' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/dashboard\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                      <path d=\"M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Dashboard</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/account' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/account\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Account</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/calculator' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/calculator\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 448 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Calculator</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/swap' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/swap\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                      <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Swap</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/live-jackpot' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/live-jackpot\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <g>\n                         <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                         <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z\"></path>\n                      </g>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Last Buy Jackpot</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/bet' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/bet\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M255.03 33.813c-1.834-.007-3.664-.007-5.5.03-6.73.14-13.462.605-20.155 1.344.333.166.544.32.47.438L204.78 75.063l73.907 49.437-.125.188 70.625.28L371 79.282 342.844 52c-15.866-6.796-32.493-11.776-49.47-14.78-12.65-2.24-25.497-3.36-38.343-3.407zM190.907 88.25l-73.656 36.78-13.813 98.407 51.344 33.657 94.345-43.438 14.875-76.5-73.094-48.906zm196.344.344l-21.25 44.5 36.75 72.72 62.063 38.905 11.312-21.282c.225.143.45.403.656.75-.77-4.954-1.71-9.893-2.81-14.782-6.446-28.59-18.59-55.962-35.5-79.97-9.07-12.872-19.526-24.778-31.095-35.5l-20.125-5.342zm-302.656 23c-6.906 8.045-13.257 16.56-18.938 25.5-15.676 24.664-26.44 52.494-31.437 81.312C31.783 232.446 30.714 246.73 31 261l20.25 5.094 33.03-40.5L98.75 122.53l-14.156-10.936zm312.719 112.844l-55.813 44.75-3.47 101.093 39.626 21.126 77.188-49.594 4.406-78.75-.094.157-61.844-38.783zm-140.844 6.406l-94.033 43.312-1.218 76.625 89.155 57.376 68.938-36.437 3.437-101.75-66.28-39.126zm-224.22 49.75c.91 8.436 2.29 16.816 4.156 25.094 6.445 28.59 18.62 55.96 35.532 79.968 3.873 5.5 8.02 10.805 12.374 15.938l-9.374-48.156.124-.032-27.03-68.844-15.782-3.968zm117.188 84.844l-51.532 8.156 10.125 52.094c8.577 7.49 17.707 14.332 27.314 20.437 14.612 9.287 30.332 16.88 46.687 22.594l62.626-13.69-4.344-31.124-90.875-58.47zm302.437.5l-64.22 41.25-42 47.375 4.408 6.156c12.027-5.545 23.57-12.144 34.406-19.72 23.97-16.76 44.604-38.304 60.28-62.97 2.51-3.947 4.87-7.99 7.125-12.092zm-122.78 97.656l-79.94 9.625-25.968 5.655c26.993 4 54.717 3.044 81.313-2.813 9.412-2.072 18.684-4.79 27.75-8.062l-3.156-4.406z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Sports Bet</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/crash' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/crash\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z\"></path>\n                      <path d=\"M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z\"></path>\n                      <path d=\"M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z\"></path>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Crash</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n             <button [ngClass]=\"currentUrl == '/baked-ville' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/baked-ville\">\n                <i class=\"transition-none text-[20px] mr-2\">\n                   <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 12 12\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <rect width=\"10\" height=\"10\" x=\"1\" y=\"1\" fill-rule=\"evenodd\" stroke=\"#000\" rx=\"1\"></rect>\n                   </svg>\n                </i>\n                <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                   <div class=\"flex items-center font-semibold justify-between\">\n                      <span>Baked Ville</span>\n                      <i class=\" duration-300 transform transition-all hidden\n                         false\">\n                         <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                         </svg>\n                      </i>\n                   </div>\n                </span>\n             </button>\n          </div>\n        </div>\n        <div class=\"grid grid-cols-3 px-4 gap-y-4 pb-2\">\n           <a target=\"_blank\" href=\"https://twitter.com/Earn_Ville\">\n              <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/twitter.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n           </a>\n           <a target=\"_blank\" href=\"https://discord.gg/rU9Pu8p7\">\n              <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/discord.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n           </a>\n           <a target=\"_blank\" href=\"https://t.me/Earn_Ville\">\n              <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/telegram.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n           </a>\n        </div>\n     </div>\n     <div [ngClass]=\"(isMenuClick == true && isDesktop == false) ? menuClassShow : menuClassHide\">\n        <div class=\"fixed md:static backdrop-blur-md md:backdrop-blur-0 bg-black bg-opacity-25 md:bg-opacity-0 md:bg-none w-full px-2 py-3 md:py-6 md:px-[15px] flex items-center justify-end shadow bg-transparent\">\n           <div class=\"flex items-center md:justify-end justify-between w-full gap-x-4\">\n              <a href=\"https://poocoin.app/tokens/0x2947f84b45168ceaf2eb569d113dc518cd9ec6d5\" target=\"_blank\" class=\"\"><button class=\"px-6 py-2 hidden md:block bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white font-signika font-extrabold\">Buy $EARN</button></a>\n              <button type=\"button\"  (click)=\"clickMenu()\" class=\"btn-default bg-[#FF45005e] bg-opacity-50 rounded-md md:hidden duration-400 transition-all\" data-placement=\"top\">\n                 <i class=\"transition-none text-white\">\n                    <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 448 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                       <path d=\"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"></path>\n                    </svg>\n                 </i>\n              </button>\n              <button id=\"connect_wallet\" class=\"px-6 py-2 bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white font-signika font-extrabold\">Connect Wallet</button>\n           </div>\n        </div>\n        <div class=\"min-h-screen mt-8 md:mt-0\">\n          <router-outlet></router-outlet>\n        </div>\n     </div>\n  </div>\n</div>\n\n<div id=\"dialog-root\" *ngIf=\"(isDesktop==false && isMenuClick==true) \">\n   <div class=\"dialog-wrapper fixed w-full h-screen top-0 left-0 z-300 flex flex-col overflow-hidden item-start  mobile\" style=\"margin-top: 72px;\">\n      <div class=\"dialog-overlay fixed w-full h-full top-0 left-auto pointer-events-none animate-emerge \" style=\"background-color: rgba(0, 0, 0, 0.32);\"></div>\n      <div class=\"dialog relative h-full bg-white shadow-md  animate-slide-in-left  \" style=\"width: auto; max-width: 193px;\">\n         <div class=\"bg-[#091117] bg-opacity-100 shadow md:fixed top-[0] flex flex-col border-r dark:border-[#292929]\n            w-60 transition-all duration-300\n            \" style=\"height: calc(100vh);\">\n            <div class=\"flex-1 pb-3 overflow-auto scrollbar-custom\">\n               <img src=\"/assets/icon/Icon-192.png\" alt=\"Keeprunning Logo\" class=\"mx-auto my-8 w-20\">\n               <div class=\"\">\n                  <button [ngClass]=\"currentUrl == '/dashboard' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/dashboard\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                           <path d=\"M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Dashboard</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/account' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/account\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path d=\"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Account</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/calculator' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/calculator\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 448 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path d=\"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Calculator</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/swap' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/swap\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                           <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Swap</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/live-jackpot' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/live-jackpot\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <g>\n                              <path fill=\"none\" d=\"M0 0h24v24H0z\"></path>\n                              <path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z\"></path>\n                           </g>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Last Buy Jackpot</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/bet' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/bet\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path d=\"M255.03 33.813c-1.834-.007-3.664-.007-5.5.03-6.73.14-13.462.605-20.155 1.344.333.166.544.32.47.438L204.78 75.063l73.907 49.437-.125.188 70.625.28L371 79.282 342.844 52c-15.866-6.796-32.493-11.776-49.47-14.78-12.65-2.24-25.497-3.36-38.343-3.407zM190.907 88.25l-73.656 36.78-13.813 98.407 51.344 33.657 94.345-43.438 14.875-76.5-73.094-48.906zm196.344.344l-21.25 44.5 36.75 72.72 62.063 38.905 11.312-21.282c.225.143.45.403.656.75-.77-4.954-1.71-9.893-2.81-14.782-6.446-28.59-18.59-55.962-35.5-79.97-9.07-12.872-19.526-24.778-31.095-35.5l-20.125-5.342zm-302.656 23c-6.906 8.045-13.257 16.56-18.938 25.5-15.676 24.664-26.44 52.494-31.437 81.312C31.783 232.446 30.714 246.73 31 261l20.25 5.094 33.03-40.5L98.75 122.53l-14.156-10.936zm312.719 112.844l-55.813 44.75-3.47 101.093 39.626 21.126 77.188-49.594 4.406-78.75-.094.157-61.844-38.783zm-140.844 6.406l-94.033 43.312-1.218 76.625 89.155 57.376 68.938-36.437 3.437-101.75-66.28-39.126zm-224.22 49.75c.91 8.436 2.29 16.816 4.156 25.094 6.445 28.59 18.62 55.96 35.532 79.968 3.873 5.5 8.02 10.805 12.374 15.938l-9.374-48.156.124-.032-27.03-68.844-15.782-3.968zm117.188 84.844l-51.532 8.156 10.125 52.094c8.577 7.49 17.707 14.332 27.314 20.437 14.612 9.287 30.332 16.88 46.687 22.594l62.626-13.69-4.344-31.124-90.875-58.47zm302.437.5l-64.22 41.25-42 47.375 4.408 6.156c12.027-5.545 23.57-12.144 34.406-19.72 23.97-16.76 44.604-38.304 60.28-62.97 2.51-3.947 4.87-7.99 7.125-12.092zm-122.78 97.656l-79.94 9.625-25.968 5.655c26.993 4 54.717 3.044 81.313-2.813 9.412-2.072 18.684-4.79 27.75-8.062l-3.156-4.406z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Sports Bet</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/crash' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/crash\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path d=\"M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z\"></path>\n                           <path d=\"M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z\"></path>\n                           <path d=\"M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z\"></path>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Crash</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n                  <button [ngClass]=\"currentUrl == '/baked-ville' ? actionClass : normalClass\" data-placement=\"top\" routerLink=\"/baked-ville\">\n                     <i class=\"transition-none text-[20px] mr-2\">\n                        <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 12 12\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <rect width=\"10\" height=\"10\" x=\"1\" y=\"1\" fill-rule=\"evenodd\" stroke=\"#000\" rx=\"1\"></rect>\n                        </svg>\n                     </i>\n                     <span class=\"relative transform transition-transform w-full inline-block \" style=\"display: inline-block;\">\n                        <div class=\"flex items-center font-semibold justify-between\">\n                           <span>Baked Ville</span>\n                           <i class=\" duration-300 transform transition-all hidden\n                              false\">\n                              <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                                 <path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path>\n                              </svg>\n                           </i>\n                        </div>\n                     </span>\n                  </button>\n               </div>\n            </div>\n            <div class=\"grid grid-cols-3 px-4 gap-y-4 pb-2\">\n               <a target=\"_blank\" href=\"https://twitter.com/Earn_Ville\">\n                  <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/twitter.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n               </a>\n               <a target=\"_blank\" href=\"https://discord.gg/rU9Pu8p7\">\n                  <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/discord.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n               </a>\n               <a target=\"_blank\" href=\"https://t.me/Earn_Ville\">\n                  <div class=\"flex items-center justify-center\"><img src=\"/assets/img/icon/telegram.png\" alt=\"\" class=\"w-8 cursor-pointer\"></div>\n               </a>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/account/account.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/account/account.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px] \">\n    <div class=\"w-[90%] xl:w-[60%] mx-0 sm:mx-4 mb-[20px] max-w-[800px]\">\n       <div class=\"grid grid-cols-0 lg:grid-cols-3 gap-4 mb-5\">\n          <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard undefined\">\n             <div class=\"flex flex-col items-center justify-center\">\n                <div class=\"text-[16px] leading-[24px] font-semibold\">Your Balance</div>\n                <div class=\"text-2xl font-black p-2 text-[#F3BB4D]\">$<span>0</span></div>\n                <div class=\"text-[16px] leading-[24px]\"><span>0</span>&nbsp;Keeprunning</div>\n             </div>\n          </div>\n          <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard undefined\">\n             <div class=\"flex flex-col items-center justify-center\">\n                <div class=\"text-[16px] font-semibold\">APY</div>\n                <div class=\"text-2xl font-black p-2 text-[#F3BB4D]\"><span>4,848,172.5</span>%</div>\n                <div class=\"text-[16px] leading-[24px]\">Daily ROI 3%</div>\n             </div>\n          </div>\n          <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard undefined\">\n             <div class=\"flex flex-col items-center justify-center\">\n                <div class=\"text-[16px] font-semibold\">Next Rebase:</div>\n                <div class=\"text-2xl font-black p-2 text-[#F3BB4D]\"></div>\n                <div class=\"text-[16px] font-semibold\">You will earn money soon</div>\n             </div>\n          </div>\n       </div>\n       <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard background-account\">\n          <div class=\"w-full mt-5 \">\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">Current EARN Price</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\">$<span>0.05786</span></div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">Next Reward Amount</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\"><span>0</span> EARN</div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">Next Reward Amount USD</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\"><span>0</span> EARN</div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">Next Reward Yield</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\">0.0308%</div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">ROI(1-Day Rate) USD</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\">$<span>0</span></div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">ROI(5-Day Rate)</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\">15.93%</div>\n                </div>\n             </div>\n             <div class=\"flex flex-col lg:flex-row items-center justify-between px-5 py-4\">\n                <div class=\"flex items-center justity-start\">\n                   <div class=\"flex flex-col items-center justify-center\">\n                      <div class=\"text-[16px] leading-[24px]\">ROI(5-Day Rate) USD</div>\n                   </div>\n                </div>\n                <div class=\"flex flex-col items-end\">\n                   <div class=\"text-2xl font-[20px] leading-[30px] font-semibold\">$<span>0</span></div>\n                </div>\n             </div>\n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/baked-ville/baked-ville.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/baked-ville/baked-ville.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overflow-x-hidden\">\n    <div class=\" font-signika \">\n       <div class=\"max-w-md mx-auto px-2 md:px-0 pt-2 flex flex-col justify-center items-center gap-4\">\n          <img src=\"images/logo-lager.png\" alt=\"\" class=\"p-2\"><span class=\"text-white px-4 flex items-center justify-center text-center font-extrabold text-[16px]\">The EARN Reward Pool with the tastiest daily return and low dev fee!</span>\n          <div class=\"bg-white rounded-3xl flex flex-col gap-4 py-4 px-4 w-full font-signika text-[#FF4500]\">\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Contract</span><span class=\"font-signika\">0.00000 EARN</span></div>\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Wallet</span><span class=\"font-signika\">0 EARN</span></div>\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Your VILLE</span><span class=\"font-signika\">0.00000 VILLE</span></div>\n             <div class=\"w-full flex items-center justify-between relative\"><input type=\"number\" class=\"border border-[#FF4500] focus:border-2 rounded-md h-12 pl-2 pr-14 transition-all duration-300 text-[16px] font-signika w-full\" placeholder=\"Enter an amount\" disabled=\"\" min=\"0\" value=\"0\"><span class=\"font-signika absolute right-0 px-2\">EARN</span></div>\n             <button class=\"px-6 py-2 w-full bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white font-signika font-extrabold\">Approve</button>\n             <hr class=\"h-1 bg-[#FF4500]\">\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Your Rewards</span><span class=\"font-signika\">0.00000 EARN</span></div>\n             <div class=\"flex items-center gap-4\"><button class=\"px-6 py-2 w-full bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white font-signika font-extrabold\">RE-BAKE</button><button class=\"px-6 py-2 w-full bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white font-signika font-extrabold\">EAT VILLE</button></div>\n          </div>\n          <div class=\"bg-white rounded-3xl flex flex-col gap-4 py-4 px-4 w-full font-signika text-[#FF4500]\">\n             <div class=\"font-signika font-extrabold text-[28px]\">Contract</div>\n             <hr class=\"h-1 bg-[#FF4500]\">\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Daily Return</span><span class=\"font-signika\">8%</span></div>\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">APR</span><span class=\"font-signika\">2920%</span></div>\n             <div class=\"w-full flex items-center justify-between\"><span class=\"font-signika\">Dev Fee</span><span class=\"font-signika\">0%</span></div>\n          </div>\n          <div class=\"bg-white rounded-3xl flex flex-col gap-4 py-4 px-4 w-full font-signika text-[#FF4500]\">\n             <div class=\"font-signika font-extrabold text-[28px] text-center\">Referral Link</div>\n             <hr class=\"h-1 bg-[#FF4500]\">\n             <span class=\"font-signika text-center font-extrabold\">Earn 12% of the EARN used to bake ville with your referral link.</span>\n          </div>\n          <div class=\"flex items-center justify-center mb-4\"><i class=\"text-white\"><img src=\"svg/bsc.svg\" alt=\"\" class=\"\"></i><i class=\"text-white\"><img src=\"svg/github.svg\" alt=\"\" class=\"\"></i><i class=\"text-white\"><img src=\"svg/telegram.svg\" alt=\"\" class=\"\"></i><i class=\"text-white\"><img src=\"svg/twitter.svg\" alt=\"\" class=\"\"></i><i class=\"text-white\"><img src=\"svg/discord.svg\" alt=\"\" class=\"\"></i></div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/bet/bet.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/bet/bet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px] mx-auto max-w-[90%]\">\n    <div class=\"w-full sm:w-[50%] mx-0 sm:mx-4 mb-[20px] max-w-[800px]\">\n       <h1 class=\"text-center text-[24px] sm:text-[60px] leading-[1.5em]\">Bet</h1>\n       <h2 class=\"text-center sm:text-[32px] leading-[1.5em]\">Coming Soon</h2>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/calculator/calculator.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/calculator/calculator.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px] mx-auto max-w-[90%]\">\n   <div class=\"w-full sm:w-[60%] mx-0 sm:mx-4 mb-[20px] max-w-[800px]\">\n      <div class=\"mb-[10px]\">\n         <div class=\"text-[28px] leading-[36px] font-bold \">Calculator </div>\n         <p class=\"mt-2\">Estimate your returns</p>\n      </div>\n      <div class=\"flex justify-around w-full gap-x-8 gap-y-4 mt-10 flex-wrap\">\n         <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard w-full xl:w-auto xl:flex-auto px-0 py-8\">\n            <div class=\"text-center\">\n               <p class=\"text-[#F3BB4D] font-semibold\">EARN Price</p>\n               <p class=\"font-semibold text-[#F3BB4D] text-[28px] leading-[36px] mt-2\">$<span>0.05786</span></p>\n            </div>\n         </div>\n         <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard w-full xl:w-auto xl:flex-auto px-0 py-8\">\n            <div class=\"font-[20px] leading-[30px] text-center\">\n               <p class=\"text-[#F3BB4D] font-semibold\">Current APY</p>\n               <p class=\"font-semibold text-[#F3BB4D] text-[28px] leading-[36px] mt-2\"><span>4,848,172.5</span>%</p>\n            </div>\n         </div>\n         <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard w-full xl:w-auto xl:flex-auto px-0 py-8\">\n            <div class=\"font-[20px] leading-[30px] text-center\">\n               <p class=\"text-[#F3BB4D] font-semibold\">Your EARN Balance</p>\n               <p class=\"font-semibold text-[#F3BB4D] text-[28px] leading-[36px] mt-2\"><span>0</span> EARN</p>\n            </div>\n         </div>\n      </div>\n      <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard mt-8 p-8\">\n         <div class=\"grid grid-cols-2 gap-4\">\n            <div>\n               <div class=\"mb-[10px]\">EARN Amount</div>\n               <input placeholder=\"Max\" class=\"w-full h-[40px] p-[20px] rounded-[12px] bg-[#A7F6E0] dark:text-[#072E23] undefined\" type=\"text\" value=\"100\" inputmode=\"numeric\">\n            </div>\n            <div>\n               <div class=\"mb-[10px]\">APY (%)</div>\n               <input placeholder=\"Current\" class=\"w-full h-[40px] p-[20px] rounded-[12px] bg-[#A7F6E0] dark:text-[#072E23] undefined\" type=\"text\" value=\"4,848,172.5\" inputmode=\"numeric\">\n            </div>\n            <div>\n               <div class=\"mb-[10px]\">EARN Price at purchase ($)</div>\n               <input placeholder=\"Current\" class=\"w-full h-[40px] p-[20px] rounded-[12px] bg-[#A7F6E0] dark:text-[#072E23] undefined\" type=\"text\" value=\"0.05786\" inputmode=\"numeric\">\n            </div>\n            <div>\n               <div class=\"mb-[10px]\">Future EARN market price ($)</div>\n               <input placeholder=\"Current\" class=\"w-full h-[40px] p-[20px] rounded-[12px] bg-[#A7F6E0] dark:text-[#072E23] undefined\" type=\"text\" value=\"0.05786\" inputmode=\"numeric\">\n            </div>\n         </div>\n         <div class=\"w-full mt-5\">\n            <div class=\"mb-[10px]\">Days<span class=\"bg-[#A7F6E0] rounded-[10px] text-[#072E23] font-bold px-[24px] py-[4px] ml-2\">365</span></div>\n            <input type=\"range\" id=\"range\" min=\"1\" max=\"365\" name=\"range\" class=\"w-full h-2 rounded-[12px] in-range:border-green-500 \" value=\"365\">\n         </div>\n         <div class=\"w-full mt-5 \">\n            <div class=\"flex items-center justify-between\">\n               <div class=\"flex items-center justity-start\">\n                  <div class=\"flex flex-col items-center justify-center\">\n                     <div class=\"text-[18px] leading-[26px] text-[#F3BB4D]\">Your initial investment</div>\n                  </div>\n               </div>\n               <div class=\"flex flex-col items-end\">\n                  <div class=\"text-[20px] leading-[30px] font-semibold\">$<span>5.78600</span></div>\n               </div>\n            </div>\n            <div class=\"flex items-center justify-between mt-[28px]\">\n               <div class=\"flex items-center justity-start\">\n                  <div class=\"flex flex-col items-center justify-center\">\n                     <div class=\"text-[18px] leading-[26px] text-[#F3BB4D]\">Current wealth</div>\n                  </div>\n               </div>\n               <div class=\"flex flex-col items-end\">\n                  <div class=\"text-[20px] leading-[30px] font-semibold\">$<span>5.78600</span></div>\n               </div>\n            </div>\n            <div class=\"flex items-center justify-between mt-[28px]\">\n               <div class=\"flex items-center justity-start\">\n                  <div class=\"flex flex-col items-center justify-center\">\n                     <div class=\"text-[18px] leading-[26px] text-[#F3BB4D]\">EARN rewards estimation</div>\n                  </div>\n               </div>\n               <div class=\"flex flex-col items-end\">\n                  <div class=\"text-[20px] leading-[30px] font-semibold\"><span>996,866.45203</span> EARN</div>\n               </div>\n            </div>\n            <div class=\"flex items-center justify-between mt-[28px]\">\n               <div class=\"flex items-center justity-start\">\n                  <div class=\"flex flex-col items-center justify-center\">\n                     <div class=\"text-[18px] leading-[26px] text-[#F3BB4D]\">Potential return</div>\n                  </div>\n               </div>\n               <div class=\"flex flex-col items-end\">\n                  <div class=\"text-[20px] leading-[30px] text-[#F3BB4D] font-semibold\">$<span>57,684.47891</span></div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/crash/crash.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/crash/crash.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px] mx-auto max-w-[90%]\">\n    <div class=\"w-full sm:w-[50%] mx-0 sm:mx-4 mb-[20px] max-w-[800px]\">\n       <h1 class=\"text-center text-[24px] sm:text-[60px] leading-[1.5em]\">Crash</h1>\n       <h2 class=\"text-center sm:text-[32px] leading-[1.5em]\">Coming Soon</h2>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/dashboard/dashboard.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/dashboard/dashboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min-h-screen mt-8 md:mt-0\">\n    <div>\n       <div class=\"grid grid-cols-0 lg:grid-cols-12 w-[90%] xl:w-[60%] m-auto mt-[100px] xl:mt-[100px] bg-transparent pt-[18px] background-dashboard \">\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">EARN Price</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\">$<span>0.05792</span></p>\n          </div>\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Marketcap</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\">$<span>0</span></p>\n          </div>\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Circulating Supply</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\"><span>0</span></p>\n          </div>\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Backed Liquidity</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\">100%</p>\n          </div>\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Next Rebase</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\"></p>\n          </div>\n          <div class=\"col-span-4 text-center mb-[18px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Total Supply</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px]\"><span>0</span></p>\n          </div>\n       </div>\n       <div class=\"grid grid-cols-0 lg:grid-cols-12 lg:gap-[20px] mt-[20px] w-[90%] xl:w-[60%] m-auto \">\n          <div class=\"col-span-6 text-center mb-[18px] background-dashboard bg-transparent pt-[25px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">EARN Price</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px] pb-[25px] pt-[5px]\">$<span>0.05792</span></p>\n          </div>\n          <div class=\"col-span-6 text-center mb-[18px] background-dashboard bg-transparent pt-[25px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Market Value of Treasury Asset</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px] pb-[25px] pt-[5px]\">$<span>0</span></p>\n          </div>\n       </div>\n       <div class=\"grid grid-cols-0 lg:grid-cols-12 lg:gap-[20px] mt-[20px] w-[90%] xl:w-[60%] m-auto \">\n          <div class=\"col-span-6 text-center mb-[18px] background-dashboard bg-transparent pt-[25px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Pool Value</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px] pb-[25px] pt-[5px]\">$<span>0</span></p>\n          </div>\n          <div class=\"col-span-6 text-center mb-[18px] background-dashboard bg-transparent pt-[25px]\">\n             <p class=\"pb-[4px] leading-[24px] text-[16px] text-[#F3BB4D] font-semibold\">Keeprunning Insurance Fund Value</p>\n             <p class=\"font-semibold text-[#fff] text-[24px] leading-[32px] pb-[25px] pt-[5px]\">$<span></span></p>\n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/live-jackpot/live-jackpot.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/live-jackpot/live-jackpot.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-8 md:pt-16 pb-8\">\n    <div class=\"px-5 max-w-lg mx-auto\">\n       <div class=\"space-y-4\">\n          <h1 class=\"text-2xl font-semibold text-center\">\n             <div>\n                <div class=\"css-1dbjc4n inline-block\">\n                   <div class=\"css-1dbjc4n\">\n                      <text>🔴</text>\n                   </div>\n                </div>\n                &nbsp;Live Jackpot\n             </div>\n          </h1>\n          <h2 class=\"text-2xl font-semibold text-center text-white\">\n             <div>$0</div>\n             <br>\n             <div>⏳Time Left</div>\n             <div></div>\n          </h2>\n          <div class=\"mb-1 text-lg font-medium dark:text-white\"></div>\n          <div class=\"flex justify-between mb-1\"><span class=\"text-base font-medium text-blue-700 dark:text-white\">💥 Big Bang Loading...</span><span class=\"text-sm font-medium text-blue-700 dark:text-white\">0.00%</span></div>\n          <div class=\"w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700\">\n             <div class=\"h-6 bg-gray-600 rounded-full dark:bg-orange-600 w-0\"></div>\n          </div>\n          <div class=\"flex flex-wrap m-1 justify-center\">\n             <div class=\"has-tooltip\"><span class=\"inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm tooltip my-16 -ml-6\">💳 Connect wallet to enable quick buys!</span><button type=\"button\" class=\"p-4 text-lg leading-5 bg-primary-300 bg-gray-700 w-full rounded-md font-medium focus:outline-none focus:ring-4\">⏩ Quick Buy $(1BNB)</button></div>\n          </div>\n          <div class=\"text-2xl font-semibold text-center flex-2 text-white\">\n             <div class=\"flex justify-center mb-1 gap-4\">\n                <div class=\"p-[20px] truncate relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">BNB 0.0</div>\n                <div class=\"p-[20px] truncate relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">EARN 0.0</div>\n             </div>\n          </div>\n          <h1 class=\"text-2xl font-semibold text-center text-white\">\n             <div class=\"css-1dbjc4n inline-block\">\n                <div class=\"css-1dbjc4n\">\n                   <text>🔴</text>\n                </div>\n             </div>\n             &nbsp;Winner's Share\n          </h1>\n          <h2 class=\"text-2xl font-semibold text-center text-white\">\n             <div>$0</div>\n          </h2>\n          <div class=\"text-2xl font-semibold text-center flex-2 text-white\">\n             <div class=\"flex justify-center mb-1 gap-4\">\n                <div class=\"truncate p-[20px] relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">BNB 0</div>\n                <div class=\"truncate p-[20px] relative items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">EARN 0</div>\n             </div>\n          </div>\n          <h1 class=\"text-2xl font-semibold text-center text-white\">\n             <div class=\"css-1dbjc4n inline-block\">\n                <div class=\"css-1dbjc4n\">\n                   <text>🔴</text>\n                </div>\n             </div>\n             &nbsp;Buyback's Share\n          </h1>\n          <h2 class=\"text-2xl font-semibold text-center text-white\">\n             <div>$0</div>\n          </h2>\n          <div class=\"text-2xl font-semibold text-center flex-2 text-white\">\n             <div class=\"flex justify-center mb-1 gap-4\">\n                <div class=\"truncate relative p-[20px] items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">BNB 0</div>\n                <div class=\"truncate relative p-[20px] items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\">EARN 0</div>\n             </div>\n          </div>\n          <h1 class=\"text-2xl font-semibold text-center text-white\">\n             <div class=\"css-1dbjc4n inline-block\">\n                <div class=\"css-1dbjc4n\">\n                   <text>🔴</text>\n                </div>\n             </div>\n             &nbsp;Last Buy\n          </h1>\n          <div class=\"text-2xl font-semibold text-center flex-2 text-white\">\n             <div class=\"flex flex-col truncate relative p-[20px] items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\"><span class=\"\">Last Buyer (Potential Jackpot Winner)</span><span class=\"\">-</span></div>\n             <div class=\"flex space-x-2 justify-center -mr-2 items-center py-2\">\n                <span>Wallet</span>\n                <a href=\"https://bscscan.com/address/-\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline text-indigo-500 hover:text-indigo-700\">\n                   <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                      <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>\n                      <polyline points=\"15 3 21 3 21 9\"></polyline>\n                      <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>\n                   </svg>\n                </a>\n             </div>\n             <div class=\"flex flex-col truncate relative p-[20px] items-center py-2 pr-3 pl-2 space-x-2 text-lg leading-6 text-left rounded-xl cursor-default focus:outline-none focus-visible:ring-4 bg-primary\"><span class=\"\">Last Buy @</span><span class=\"\">-</span></div>\n          </div>\n          <h1 class=\"text-2xl font-semibold text-center text-white\">\n             <div class=\"css-1dbjc4n inline-block\">\n                <div class=\"css-1dbjc4n\">\n                   <text>🔴</text>\n                </div>\n             </div>\n             &nbsp;When Big Bang? 💥\n          </h1>\n          <h2 class=\"text-2xl font-semibold text-center text-white\">\n             <div>$50,000</div>\n          </h2>\n       </div>\n    </div>\n </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/com/swap/swap.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/com/swap/swap.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px]\">\n    <div class=\"p-[20px] rounded-[12px] bg-transparent background-dashboard w-full sm:w-[700px] mx-0 sm:mx-4 mb-[20px]\">\n       <div class=\"flex justify-between items-center w-full sm:w-[640px] mx-auto\">\n          <div class=\"w-max flex justify-between items-center bg-[#eff4f5] dark:bg-[#000] rounded-[16px] font-[600] text-[14px] dark:text-white\">\n             <div class=\"px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] secondary-btn text-white bg-[#FF4500]\">SWAP</div>\n          </div>\n          <div class=\"flex justify-center items-center\">\n             <div class=\"text-[15px] mx-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white h-[36px] px-[10px] bg-[#FF4500]\">BRIDGE</div>\n             <div class=\"text-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white h-[36px] px-[10px] bg-[#FF4500]\">\n                <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 1024 1024\" class=\"text-[24px]\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                   <path d=\"M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z\"></path>\n                </svg>\n             </div>\n          </div>\n       </div>\n       <div class=\"flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] h-[283px] sm:h-[175px] w-full sm:w-[640px] mx-auto justify-between\">\n          <div class=\"text-black dark:text-white font-[400] ml-[10px] leading-[1.5]\">From: </div>\n          <div class=\"flex justify-between flex-wrap sm:flex-nowrap\">\n             <div class=\"flex justify-between items-center w-full sm:w-[244px] h-[75px] hover:bg-[#f5f5f5] dark:hover:bg-black bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0] cursor-pointer\">\n                <div class=\"flex justify-start items-center \">\n                   <div><img class=\"w-[50px] h-[50px] object-contain\"></div>\n                   <div class=\"text-[21px] font-bold leading-[1.5] ml-[10px] tracking-[0.03rem]\"></div>\n                </div>\n                <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" class=\"text-[#FF4500] text-[25px]\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                   <path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path>\n                </svg>\n             </div>\n             <div class=\"flex justify-between items-center w-full sm:w-[340px] h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]\">\n                <div class=\"flex items-center secondary-btn text-white text-[15px] font-bold px-[10px] h-[36px] w-max tracking-[0.03rem] rounded-[10px] cursor-pointer bg-[#FF4500]\">MAX</div>\n                <div class=\"w-full\"><input class=\"w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white\" placeholder=\"0.0\" step=\"0.1\" type=\"number\" value=\"\"></div>\n             </div>\n          </div>\n          <div class=\"text-black dark:text-white font-[400] ml-[10px] leading-[1.5]\">Balance: 0</div>\n       </div>\n       <div>\n          <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" class=\"text-white bg-[#FF4500] border-[#FF4500] border-2 hover:bg-white hover:text-[#FF4500] transition-all duration-300 w-[50px] h-[50px] mx-auto p-[10px] relative my-[-30px] rounded-[99999px] cursor-pointer hover:\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path fill=\"none\" d=\"M0 0h24v24H0V0z\"></path>\n             <path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path>\n          </svg>\n       </div>\n       <div class=\"flex flex-col my-[16px] p-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] h-[283px] sm:h-[175px] w-full sm:w-[640px] mx-auto justify-between\">\n          <div class=\"text-black dark:text-white font-[400] ml-[10px] leading-[1.5]\">To: </div>\n          <div class=\"flex justify-between flex-wrap sm:flex-nowrap\">\n             <div class=\"flex justify-between items-center w-full sm:w-[244px] h-[75px] hover:bg-[#f5f5f5] dark:hover:bg-black bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0] cursor-pointer\">\n                <div class=\"flex justify-start items-center \">\n                   <div><img class=\"w-[50px] h-[50px] object-contain\" src=\"https://app.Keeprunning.org/images/evile-logo.png\"></div>\n                   <div class=\"text-[21px] font-bold leading-[1.5] ml-[10px] tracking-[0.03rem]\">EARN</div>\n                </div>\n                <svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 320 512\" class=\"text-[#FF4500] text-[25px]\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n                   <path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path>\n                </svg>\n             </div>\n             <div class=\"flex justify-between items-center w-full sm:w-[340px] h-[75px] bg-white dark:bg-[#101111] rounded-[16px] p-[10px] mb-[20px] sm:mb-[0]\">\n                <div class=\"w-full\"><input class=\"w-full text-right text-[22px] font-medium bg-transparent dark:focus:text-white\" placeholder=\"0.0\" step=\"0.1\" type=\"number\" value=\"\"></div>\n             </div>\n          </div>\n          <div class=\"text-black dark:text-white font-[400] ml-[10px] leading-[1.5]\">Balance: 0</div>\n       </div>\n       <div class=\"flex justify-between items-center font-bold text-[12px] leading-[1.5] px-[16px]\">\n          <div>Slippage Tolerance</div>\n          <div>1% </div>\n       </div>\n       <div class=\" flex items-center justify-center bg-[#FF4500] border-2 border-[#FF4500] transition-all duration-300 rounded-lg text-white hover:text-[#FF4500] hover:bg-white\n          tracking-[0.03rem] font-bold h-[60px] text-[20px] w-full sm:w-[640px] mx-auto secondary-btn mt-[10px]  cursor-not-allowed opacity-75 \">SWAP</div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _com_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com/account/account.component */ "./src/app/com/account/account.component.ts");
/* harmony import */ var _com_baked_ville_baked_ville_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com/baked-ville/baked-ville.component */ "./src/app/com/baked-ville/baked-ville.component.ts");
/* harmony import */ var _com_bet_bet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com/bet/bet.component */ "./src/app/com/bet/bet.component.ts");
/* harmony import */ var _com_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com/calculator/calculator.component */ "./src/app/com/calculator/calculator.component.ts");
/* harmony import */ var _com_crash_crash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com/crash/crash.component */ "./src/app/com/crash/crash.component.ts");
/* harmony import */ var _com_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./com/dashboard/dashboard.component */ "./src/app/com/dashboard/dashboard.component.ts");
/* harmony import */ var _com_live_jackpot_live_jackpot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./com/live-jackpot/live-jackpot.component */ "./src/app/com/live-jackpot/live-jackpot.component.ts");
/* harmony import */ var _com_swap_swap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./com/swap/swap.component */ "./src/app/com/swap/swap.component.ts");











const routes = [
    { path: 'dashboard', component: _com_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'account', component: _com_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"] },
    { path: 'calculator', component: _com_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"] },
    { path: 'swap', component: _com_swap_swap_component__WEBPACK_IMPORTED_MODULE_10__["SwapComponent"] },
    { path: 'live-jackpot', component: _com_live_jackpot_live_jackpot_component__WEBPACK_IMPORTED_MODULE_9__["LiveJackpotComponent"] },
    { path: 'bet', component: _com_bet_bet_component__WEBPACK_IMPORTED_MODULE_5__["BetComponent"] },
    { path: 'crash', component: _com_crash_crash_component__WEBPACK_IMPORTED_MODULE_7__["CrashComponent"] },
    { path: 'baked-ville', component: _com_baked_ville_baked_ville_component__WEBPACK_IMPORTED_MODULE_4__["BakedVilleComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Keeprunning';
        this.currentUrl = "";
        this.actionClass = "btn-default bg-[#091117] w-full pl-6 py-7 justify-start font-normal rounded-none hover:bg-[#101d2788] button-menu-item text-[#F3BB4D] bg-[#101d2788]";
        this.normalClass = "btn-default bg-[#091117] w-full pl-6 py-7 justify-start font-normal rounded-none hover:bg-[#101d2788] button-menu-item text-white hover:text-[#F3BB4D]";
        this.menuClassHide = "flex-1 flex flex-col transition-all duration-300 background-layout dark:text-white md:pl-60";
        this.menuClassShow = "flex-1 flex flex-col transition-all duration-300 background-layout dark:text-white md:pl-14";
        this.isDesktop = true;
        this.isMenuClick = false;
        //redirect to dashboard
        this.router.navigateByUrl('/dashboard');
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.isMenuClick = false;
                this.currentUrl = event.url;
                console.log(this.currentUrl);
                //check mobile
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((window.navigator.userAgent))) {
                    this.isDesktop = false;
                }
                else {
                    this.isDesktop = true;
                }
            }
        });
    }
    /**Change Menu by click*/
    clickMenu() {
        this.isMenuClick = !this.isMenuClick;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _com_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com/dashboard/dashboard.component */ "./src/app/com/dashboard/dashboard.component.ts");
/* harmony import */ var _com_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com/account/account.component */ "./src/app/com/account/account.component.ts");
/* harmony import */ var _com_swap_swap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./com/swap/swap.component */ "./src/app/com/swap/swap.component.ts");
/* harmony import */ var _com_bet_bet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./com/bet/bet.component */ "./src/app/com/bet/bet.component.ts");
/* harmony import */ var _com_baked_ville_baked_ville_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./com/baked-ville/baked-ville.component */ "./src/app/com/baked-ville/baked-ville.component.ts");
/* harmony import */ var _com_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./com/calculator/calculator.component */ "./src/app/com/calculator/calculator.component.ts");
/* harmony import */ var _com_live_jackpot_live_jackpot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./com/live-jackpot/live-jackpot.component */ "./src/app/com/live-jackpot/live-jackpot.component.ts");
/* harmony import */ var _com_crash_crash_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./com/crash/crash.component */ "./src/app/com/crash/crash.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _com_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _com_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
            _com_swap_swap_component__WEBPACK_IMPORTED_MODULE_7__["SwapComponent"],
            _com_bet_bet_component__WEBPACK_IMPORTED_MODULE_8__["BetComponent"],
            _com_baked_ville_baked_ville_component__WEBPACK_IMPORTED_MODULE_9__["BakedVilleComponent"],
            _com_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_10__["CalculatorComponent"],
            _com_live_jackpot_live_jackpot_component__WEBPACK_IMPORTED_MODULE_11__["LiveJackpotComponent"],
            _com_crash_crash_component__WEBPACK_IMPORTED_MODULE_12__["CrashComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/com/account/account.component.css":
/*!***************************************************!*\
  !*** ./src/app/com/account/account.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/com/account/account.component.ts":
/*!**************************************************!*\
  !*** ./src/app/com/account/account.component.ts ***!
  \**************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/com/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/com/baked-ville/baked-ville.component.css":
/*!***********************************************************!*\
  !*** ./src/app/com/baked-ville/baked-ville.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9iYWtlZC12aWxsZS9iYWtlZC12aWxsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/com/baked-ville/baked-ville.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/com/baked-ville/baked-ville.component.ts ***!
  \**********************************************************/
/*! exports provided: BakedVilleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BakedVilleComponent", function() { return BakedVilleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BakedVilleComponent = class BakedVilleComponent {
    constructor() { }
    ngOnInit() {
    }
};
BakedVilleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-baked-ville',
        template: __webpack_require__(/*! raw-loader!./baked-ville.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/baked-ville/baked-ville.component.html"),
        styles: [__webpack_require__(/*! ./baked-ville.component.css */ "./src/app/com/baked-ville/baked-ville.component.css")]
    })
], BakedVilleComponent);



/***/ }),

/***/ "./src/app/com/bet/bet.component.css":
/*!*******************************************!*\
  !*** ./src/app/com/bet/bet.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9iZXQvYmV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/com/bet/bet.component.ts":
/*!******************************************!*\
  !*** ./src/app/com/bet/bet.component.ts ***!
  \******************************************/
/*! exports provided: BetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetComponent", function() { return BetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BetComponent = class BetComponent {
    constructor() { }
    ngOnInit() {
    }
};
BetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bet',
        template: __webpack_require__(/*! raw-loader!./bet.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/bet/bet.component.html"),
        styles: [__webpack_require__(/*! ./bet.component.css */ "./src/app/com/bet/bet.component.css")]
    })
], BetComponent);



/***/ }),

/***/ "./src/app/com/calculator/calculator.component.css":
/*!*********************************************************!*\
  !*** ./src/app/com/calculator/calculator.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/com/calculator/calculator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/com/calculator/calculator.component.ts ***!
  \********************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculatorComponent = class CalculatorComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/calculator/calculator.component.html"),
        styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/com/calculator/calculator.component.css")]
    })
], CalculatorComponent);



/***/ }),

/***/ "./src/app/com/crash/crash.component.css":
/*!***********************************************!*\
  !*** ./src/app/com/crash/crash.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9jcmFzaC9jcmFzaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/com/crash/crash.component.ts":
/*!**********************************************!*\
  !*** ./src/app/com/crash/crash.component.ts ***!
  \**********************************************/
/*! exports provided: CrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrashComponent", function() { return CrashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CrashComponent = class CrashComponent {
    constructor() { }
    ngOnInit() {
    }
};
CrashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crash',
        template: __webpack_require__(/*! raw-loader!./crash.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/crash/crash.component.html"),
        styles: [__webpack_require__(/*! ./crash.component.css */ "./src/app/com/crash/crash.component.css")]
    })
], CrashComponent);



/***/ }),

/***/ "./src/app/com/dashboard/dashboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/com/dashboard/dashboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/com/dashboard/dashboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/com/dashboard/dashboard.component.ts ***!
  \******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        // this.Connect();
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/com/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/com/live-jackpot/live-jackpot.component.css":
/*!*************************************************************!*\
  !*** ./src/app/com/live-jackpot/live-jackpot.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9saXZlLWphY2twb3QvbGl2ZS1qYWNrcG90LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/com/live-jackpot/live-jackpot.component.ts":
/*!************************************************************!*\
  !*** ./src/app/com/live-jackpot/live-jackpot.component.ts ***!
  \************************************************************/
/*! exports provided: LiveJackpotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveJackpotComponent", function() { return LiveJackpotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LiveJackpotComponent = class LiveJackpotComponent {
    constructor() { }
    ngOnInit() {
    }
};
LiveJackpotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-live-jackpot',
        template: __webpack_require__(/*! raw-loader!./live-jackpot.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/live-jackpot/live-jackpot.component.html"),
        styles: [__webpack_require__(/*! ./live-jackpot.component.css */ "./src/app/com/live-jackpot/live-jackpot.component.css")]
    })
], LiveJackpotComponent);



/***/ }),

/***/ "./src/app/com/swap/swap.component.css":
/*!*********************************************!*\
  !*** ./src/app/com/swap/swap.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbS9zd2FwL3N3YXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/com/swap/swap.component.ts":
/*!********************************************!*\
  !*** ./src/app/com/swap/swap.component.ts ***!
  \********************************************/
/*! exports provided: SwapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapComponent", function() { return SwapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SwapComponent = class SwapComponent {
    constructor() { }
    ngOnInit() {
    }
};
SwapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-swap',
        template: __webpack_require__(/*! raw-loader!./swap.component.html */ "./node_modules/raw-loader/index.js!./src/app/com/swap/swap.component.html"),
        styles: [__webpack_require__(/*! ./swap.component.css */ "./src/app/com/swap/swap.component.css")]
    })
], SwapComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Track\dapp\web-dapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map