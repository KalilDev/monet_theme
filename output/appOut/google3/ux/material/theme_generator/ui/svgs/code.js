'use strict';
const google3 = require('google3');
var randomSeedButton = google3.svg`<svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Generate random seed color</title>
<path d="M0 19C0 8.50659 8.50659 0 19 0H21C31.4934 0 40 8.50659 40 19C40 29.4934 31.4934 38 21 38H19C8.50659 38 0 29.4934 0 19Z" fill="#EEEEEE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8775 17.935L14 14.0575L15.0575 13L18.9425 16.8775L17.8775 17.935ZM21.5 13V14.5H23.435L14 23.9425L15.0575 25L24.5 15.565V17.5H26V13H21.5ZM24.5 22.435V20.5225H26V25H21.5V23.5225H23.4575L21.0575 21.1225L22.1225 20.0575L24.5 22.435Z" fill="#5F6368"/>
</svg>
`;
var pluginWelcome = google3.svg` <svg width="349" height="572" viewBox="0 0 349 572" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Plugin welcome background</title>
<g clip-path="url(#clip0)">
<rect width="349" height="572" fill="#FFFBFE"/>
<path d="M203.318 15.079C176.731 -46.1374 238.863 -108.269 300.079 -81.6822L310.2 -77.2863C328.89 -69.1691 350.11 -69.1691 368.8 -77.2863L378.921 -81.6822C440.137 -108.269 502.269 -46.1374 475.682 15.0791L471.286 25.2004C463.169 43.8902 463.169 65.1098 471.286 83.7996L475.682 93.921C502.269 155.137 440.137 217.269 378.921 190.682L368.8 186.286C350.11 178.169 328.89 178.169 310.2 186.286L300.079 190.682C238.863 217.269 176.731 155.137 203.318 93.9209L207.714 83.7995C215.831 65.1098 215.831 43.8902 207.714 25.2004L203.318 15.079Z" fill="#F4EFF4"/>
<path d="M46.913 597.647C53.6223 600.784 61.3776 600.784 68.087 597.647L92.0803 586.427C94.7378 585.184 97.5933 584.419 100.516 584.167L126.905 581.887C134.284 581.249 141 577.371 145.242 571.3L160.411 549.586C162.091 547.181 164.181 545.091 166.586 543.411L188.3 528.242C194.372 524 198.249 517.284 198.887 509.905L201.167 483.516C201.419 480.593 202.184 477.738 203.427 475.08L214.647 451.087C217.784 444.378 217.784 436.622 214.647 429.913L203.427 405.92C202.184 403.262 201.419 400.407 201.167 397.484L198.887 371.095C198.249 363.716 194.372 357 188.3 352.758L166.586 337.589C164.181 335.909 162.091 333.819 160.411 331.414L145.242 309.7C141 303.628 134.284 299.751 126.905 299.113L100.516 296.833C97.5933 296.581 94.7378 295.816 92.0804 294.573L68.087 283.353C61.3777 280.216 53.6223 280.216 46.913 283.353L22.9196 294.573C20.2622 295.816 17.4068 296.581 14.484 296.833L-11.9049 299.113C-19.284 299.751 -26.0003 303.628 -30.242 309.7L-45.4109 331.414C-47.091 333.819 -49.1814 335.909 -51.5863 337.589L-73.2997 352.758C-79.3715 357 -83.2492 363.716 -83.8867 371.095L-86.1666 397.484C-86.4192 400.407 -87.1843 403.262 -88.427 405.92L-99.6469 429.913C-102.784 436.622 -102.784 444.378 -99.6469 451.087L-88.427 475.08C-87.1843 477.738 -86.4192 480.593 -86.1666 483.516L-83.8867 509.905C-83.2492 517.284 -79.3715 524 -73.2997 528.242L-51.5863 543.411C-49.1814 545.091 -47.091 547.181 -45.4109 549.586L-30.242 571.3C-26.0003 577.372 -19.284 581.249 -11.9049 581.887L14.484 584.167C17.4068 584.419 20.2622 585.184 22.9196 586.427L46.913 597.647Z" fill="#FFD8E4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M262 275C239.356 275 221 293.356 221 316C221 338.644 239.356 357 262 357H344C366.644 357 385 338.644 385 316C385 293.356 366.644 275 344 275H262ZM262 295.5C250.678 295.5 241.5 304.678 241.5 316C241.5 327.322 250.678 336.5 262 336.5C273.322 336.5 282.5 327.322 282.5 316C282.5 304.678 273.322 295.5 262 295.5Z" fill="#E1F1FD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M-164.553 231.538C-153.738 224.904 -141.962 224.904 -131.148 231.538C-123.624 236.154 -115.993 236.154 -108.47 231.538C-97.6551 224.904 -85.8789 224.904 -75.0645 231.538C-67.5406 236.154 -59.91 236.154 -52.3862 231.538C-41.5717 224.904 -29.7956 224.904 -18.9811 231.538C-11.4573 236.154 -3.82679 236.154 3.69703 231.538C14.5115 224.904 26.2876 224.904 37.1021 231.538C44.6259 236.154 52.2566 236.154 59.7804 231.538C70.5949 224.904 82.3709 224.904 93.1854 231.538L93.1854 231.538C100.709 236.154 108.34 236.154 115.864 231.538C118.278 230.057 121.436 230.814 122.917 233.228C124.398 235.642 123.641 238.8 121.227 240.281C110.413 246.915 98.6365 246.915 87.8221 240.281C80.2982 235.665 72.6676 235.665 65.1438 240.281C54.3293 246.915 42.5532 246.915 31.7387 240.281C24.2149 235.665 16.5842 235.665 9.06041 240.281C-1.75404 246.915 -13.53 246.915 -24.3445 240.281C-31.8683 235.665 -39.4989 235.665 -47.0228 240.281C-57.8373 246.915 -69.6134 246.915 -80.4278 240.281C-87.9517 235.665 -95.5823 235.665 -103.106 240.281C-113.921 246.915 -125.697 246.915 -136.511 240.281C-144.035 235.665 -151.666 235.665 -159.189 240.281C-161.603 241.762 -164.761 241.005 -166.242 238.591C-167.723 236.177 -166.967 233.019 -164.553 231.538Z" fill="#CBC2DB"/>
<rect width="32.0002" height="32.0002" rx="16.0001" transform="matrix(-1 0 0 1 166.547 219)" fill="#D7FCB4"/>
<rect x="176.392" y="230.079" width="182.155" height="9.84623" rx="4.92311" fill="#EADDFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M293.351 468.351C379.056 382.646 518.011 382.646 603.715 468.351C689.42 554.056 689.42 693.01 603.715 778.715C518.011 864.42 379.056 864.42 293.351 778.715C207.646 693.01 207.646 554.056 293.351 468.351ZM282.267 457.267C374.093 365.44 522.973 365.44 614.8 457.267C706.626 549.093 706.626 697.973 614.8 789.8C522.973 881.626 374.093 881.626 282.267 789.8C190.44 697.973 190.44 549.093 282.267 457.267ZM392.003 580.304C395.064 583.364 400.026 583.364 403.087 580.304C406.148 577.243 406.148 572.28 403.087 569.219L325.496 491.628C322.435 488.567 317.473 488.567 314.412 491.628C311.351 494.689 311.351 499.652 314.412 502.712L392.003 580.304Z" fill="#EADDFF"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="349" height="572" fill="white"/>
</clipPath>
</defs>
</svg>
`;
var materialLogo = google3.svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Material Design Logo</title>
<path d="M23 12C23 5.93 18.07 1 12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12ZM5 17.64C3.75 16.1 3 14.14 3 12C3 9.87 3.76 7.92 5 6.37V17.64ZM17.64 5H6.36C7.9 3.75 9.86 3 12 3C14.14 3 16.1 3.75 17.64 5ZM12 14.53L8.24 7H15.77L12 14.53ZM17 9V17H13L17 9ZM11 17H7V9L11 17ZM17.64 19C16.09 20.25 14.13 21 12 21C9.87 21 7.9 20.25 6.36 19H17.64ZM21 12C21 14.14 20.25 16.1 19 17.64V6.37C20.24 7.92 21 9.87 21 12Z" fill="var(--md-sys-on-background)"/>
</svg>
`;
var getStartedButton = google3.svg`
<svg width="309" height="104" viewBox="0 0 309 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Get started button</title>
<path d="M0 52C0 23.2812 23.2812 0 52 0H257C285.719 0 309 23.2812 309 52C309 80.7188 285.719 104 257 104H52C23.2812 104 0 80.7188 0 52Z" fill="var(--md-sys-primary)"/>
<path d="M89.6597 62.448C88.2411 62.448 86.8971 62.1867 85.6277 61.664C84.3771 61.1413 83.2757 60.404 82.3237 59.452C81.3717 58.5 80.6251 57.3893 80.0837 56.12C79.5424 54.8507 79.2717 53.4693 79.2717 51.976C79.2717 50.4827 79.5424 49.1013 80.0837 47.832C80.6251 46.5627 81.3717 45.452 82.3237 44.5C83.2757 43.548 84.3771 42.8107 85.6277 42.288C86.8971 41.7653 88.2411 41.504 89.6597 41.504C91.1344 41.504 92.5157 41.7653 93.8037 42.288C95.1104 42.8107 96.1837 43.548 97.0237 44.5L95.3437 46.18C94.6904 45.4147 93.8691 44.8267 92.8797 44.416C91.8904 43.9867 90.8264 43.772 89.6877 43.772C88.2691 43.772 86.9437 44.108 85.7117 44.78C84.4984 45.452 83.5184 46.404 82.7717 47.636C82.0437 48.8493 81.6797 50.296 81.6797 51.976C81.6797 53.2267 81.8944 54.356 82.3237 55.364C82.7717 56.372 83.3691 57.24 84.1157 57.968C84.8624 58.6773 85.7117 59.228 86.6637 59.62C87.6344 59.9933 88.6424 60.18 89.6877 60.18C90.9011 60.18 92.0397 59.956 93.1037 59.508C94.1864 59.06 95.0917 58.3507 95.8197 57.38C96.5477 56.3907 96.9771 55.112 97.1077 53.544H89.7157V51.332H99.3477C99.3851 51.5747 99.4131 51.808 99.4317 52.032C99.4691 52.256 99.4877 52.4987 99.4877 52.76V52.788C99.4877 54.692 99.0677 56.372 98.2277 57.828C97.3877 59.284 96.2211 60.4227 94.7277 61.244C93.2531 62.0467 91.5637 62.448 89.6597 62.448ZM108.089 62.448C106.707 62.448 105.475 62.1213 104.393 61.468C103.329 60.8147 102.489 59.9187 101.873 58.78C101.275 57.6413 100.977 56.344 100.977 54.888C100.977 53.5253 101.257 52.2653 101.817 51.108C102.395 49.9507 103.198 49.0267 104.225 48.336C105.27 47.6267 106.493 47.272 107.893 47.272C109.311 47.272 110.525 47.5893 111.533 48.224C112.559 48.84 113.343 49.6987 113.885 50.8C114.445 51.9013 114.725 53.1613 114.725 54.58C114.725 54.7107 114.715 54.8413 114.697 54.972C114.697 55.1027 114.687 55.2147 114.669 55.308H103.357C103.431 56.428 103.702 57.3613 104.169 58.108C104.654 58.836 105.251 59.3867 105.961 59.76C106.67 60.1147 107.407 60.292 108.173 60.292C109.218 60.292 110.077 60.0493 110.749 59.564C111.439 59.06 111.99 58.444 112.401 57.716L114.417 58.696C113.857 59.7787 113.054 60.6747 112.009 61.384C110.963 62.0933 109.657 62.448 108.089 62.448ZM107.893 49.428C106.735 49.428 105.774 49.792 105.009 50.52C104.243 51.248 103.739 52.1907 103.497 53.348H112.205C112.186 52.8067 112.027 52.2373 111.729 51.64C111.449 51.024 111.001 50.5013 110.385 50.072C109.769 49.6427 108.938 49.428 107.893 49.428ZM118.612 58.248V49.876H116.12V47.72H118.612V43.688H120.992V47.72H124.492V49.876H120.992V57.66C120.992 58.4067 121.141 58.9853 121.44 59.396C121.757 59.8067 122.271 60.012 122.98 60.012C123.297 60.012 123.587 59.9653 123.848 59.872C124.109 59.7787 124.343 59.6667 124.548 59.536V61.86C124.305 61.972 124.035 62.056 123.736 62.112C123.456 62.1867 123.073 62.224 122.588 62.224C121.393 62.224 120.432 61.8787 119.704 61.188C118.976 60.4787 118.612 59.4987 118.612 58.248ZM138.818 62.448C137.213 62.448 135.906 62.0747 134.898 61.328C133.89 60.5627 133.19 59.6573 132.798 58.612L134.926 57.66C135.3 58.5187 135.841 59.1813 136.55 59.648C137.26 60.1147 138.072 60.348 138.986 60.348C139.864 60.348 140.592 60.1707 141.17 59.816C141.768 59.4613 142.066 58.9387 142.066 58.248C142.066 57.6133 141.786 57.1187 141.226 56.764C140.685 56.4093 139.92 56.1107 138.93 55.868L137.194 55.42C136.522 55.2333 135.888 54.972 135.29 54.636C134.693 54.3 134.208 53.8707 133.834 53.348C133.48 52.8067 133.302 52.1533 133.302 51.388C133.302 50.5293 133.554 49.792 134.058 49.176C134.562 48.56 135.225 48.0933 136.046 47.776C136.868 47.44 137.745 47.272 138.678 47.272C139.892 47.272 140.993 47.5427 141.982 48.084C142.99 48.6067 143.7 49.3627 144.11 50.352L142.038 51.304C141.684 50.5947 141.208 50.1 140.61 49.82C140.013 49.54 139.35 49.4 138.622 49.4C137.838 49.4 137.157 49.5773 136.578 49.932C136 50.268 135.71 50.7347 135.71 51.332C135.71 51.9293 135.944 52.3773 136.41 52.676C136.896 52.9747 137.484 53.2173 138.174 53.404L140.246 53.936C143.065 54.664 144.474 56.0453 144.474 58.08C144.474 58.976 144.222 59.7507 143.718 60.404C143.214 61.0573 142.533 61.5613 141.674 61.916C140.816 62.2707 139.864 62.448 138.818 62.448ZM148.444 58.248V49.876H145.952V47.72H148.444V43.688H150.824V47.72H154.324V49.876H150.824V57.66C150.824 58.4067 150.973 58.9853 151.272 59.396C151.589 59.8067 152.103 60.012 152.812 60.012C153.129 60.012 153.419 59.9653 153.68 59.872C153.941 59.7787 154.175 59.6667 154.38 59.536V61.86C154.137 61.972 153.867 62.056 153.568 62.112C153.288 62.1867 152.905 62.224 152.42 62.224C151.225 62.224 150.264 61.8787 149.536 61.188C148.808 60.4787 148.444 59.4987 148.444 58.248ZM161.449 62.448C160.385 62.448 159.452 62.2427 158.649 61.832C157.846 61.4213 157.212 60.8613 156.745 60.152C156.297 59.424 156.073 58.6027 156.073 57.688C156.073 56.6427 156.344 55.7653 156.885 55.056C157.426 54.328 158.154 53.7867 159.069 53.432C159.984 53.0587 160.992 52.872 162.093 52.872C163.045 52.872 163.885 52.9747 164.613 53.18C165.341 53.3853 165.864 53.5907 166.181 53.796V52.928C166.181 51.8453 165.798 50.9867 165.033 50.352C164.268 49.7173 163.334 49.4 162.233 49.4C161.449 49.4 160.712 49.5773 160.021 49.932C159.349 50.268 158.817 50.744 158.425 51.36L156.633 50.016C157.193 49.176 157.958 48.5133 158.929 48.028C159.918 47.524 161.02 47.272 162.233 47.272C164.174 47.272 165.696 47.7853 166.797 48.812C167.898 49.8387 168.449 51.22 168.449 52.956V62H166.181V59.956H166.069C165.696 60.5907 165.108 61.1693 164.305 61.692C163.502 62.196 162.55 62.448 161.449 62.448ZM161.673 60.348C162.494 60.348 163.241 60.1427 163.913 59.732C164.604 59.3213 165.154 58.7707 165.565 58.08C165.976 57.3893 166.181 56.6333 166.181 55.812C165.752 55.5133 165.21 55.2707 164.557 55.084C163.922 54.8973 163.222 54.804 162.457 54.804C161.094 54.804 160.096 55.084 159.461 55.644C158.826 56.204 158.509 56.8947 158.509 57.716C158.509 58.5 158.808 59.1347 159.405 59.62C160.002 60.1053 160.758 60.348 161.673 60.348ZM183.884 58.248V49.876H181.392V47.72H183.884V43.688H186.264V47.72H189.764V49.876H186.264V57.66C186.264 58.4067 186.413 58.9853 186.712 59.396C187.029 59.8067 187.543 60.012 188.252 60.012C188.569 60.012 188.859 59.9653 189.12 59.872C189.381 59.7787 189.615 59.6667 189.82 59.536V61.86C189.577 61.972 189.307 62.056 189.008 62.112C188.728 62.1867 188.345 62.224 187.86 62.224C186.665 62.224 185.704 61.8787 184.976 61.188C184.248 60.4787 183.884 59.4987 183.884 58.248ZM171.76 62V47.72H174.028V49.988H174.14C174.495 49.1293 175.073 48.476 175.876 48.028C176.697 47.5613 177.575 47.328 178.508 47.328C178.769 47.328 178.965 47.3373 179.096 47.356C179.245 47.356 179.385 47.3747 179.516 47.412V49.848C179.199 49.7733 178.769 49.736 178.228 49.736C177.033 49.736 176.053 50.1373 175.288 50.94C174.523 51.7427 174.14 52.788 174.14 54.076V62H171.76ZM198.35 62.448C196.969 62.448 195.737 62.1213 194.654 61.468C193.59 60.8147 192.75 59.9187 192.134 58.78C191.537 57.6413 191.238 56.344 191.238 54.888C191.238 53.5253 191.518 52.2653 192.078 51.108C192.657 49.9507 193.46 49.0267 194.486 48.336C195.532 47.6267 196.754 47.272 198.154 47.272C199.573 47.272 200.786 47.5893 201.794 48.224C202.821 48.84 203.605 49.6987 204.146 50.8C204.706 51.9013 204.986 53.1613 204.986 54.58C204.986 54.7107 204.977 54.8413 204.958 54.972C204.958 55.1027 204.949 55.2147 204.93 55.308H193.618C193.693 56.428 193.964 57.3613 194.43 58.108C194.916 58.836 195.513 59.3867 196.222 59.76C196.932 60.1147 197.669 60.292 198.434 60.292C199.48 60.292 200.338 60.0493 201.01 59.564C201.701 59.06 202.252 58.444 202.662 57.716L204.678 58.696C204.118 59.7787 203.316 60.6747 202.27 61.384C201.225 62.0933 199.918 62.448 198.35 62.448ZM198.154 49.428C196.997 49.428 196.036 49.792 195.27 50.52C194.505 51.248 194.001 52.1907 193.758 53.348H202.466C202.448 52.8067 202.289 52.2373 201.99 51.64C201.71 51.024 201.262 50.5013 200.646 50.072C200.03 49.6427 199.2 49.428 198.154 49.428ZM213.985 62.448C212.697 62.448 211.53 62.1213 210.485 61.468C209.458 60.8147 208.646 59.9187 208.049 58.78C207.451 57.6413 207.153 56.3347 207.153 54.86C207.153 53.3853 207.451 52.0787 208.049 50.94C208.646 49.8013 209.458 48.9053 210.485 48.252C211.53 47.5987 212.697 47.272 213.985 47.272C215.142 47.272 216.141 47.5333 216.981 48.056C217.821 48.5787 218.446 49.176 218.857 49.848H218.969L218.857 47.86V41.952H221.237V62H218.969V59.9H218.857C218.446 60.5533 217.821 61.1413 216.981 61.664C216.141 62.1867 215.142 62.448 213.985 62.448ZM214.237 60.292C215.058 60.292 215.823 60.0773 216.533 59.648C217.261 59.2 217.849 58.5747 218.297 57.772C218.745 56.9507 218.969 55.98 218.969 54.86C218.969 53.74 218.745 52.7787 218.297 51.976C217.849 51.1547 217.261 50.5293 216.533 50.1C215.823 49.652 215.058 49.428 214.237 49.428C213.415 49.428 212.641 49.652 211.913 50.1C211.203 50.5293 210.625 51.1547 210.177 51.976C209.729 52.7787 209.505 53.74 209.505 54.86C209.505 55.9613 209.729 56.9227 210.177 57.744C210.625 58.5653 211.203 59.2 211.913 59.648C212.641 60.0773 213.415 60.292 214.237 60.292Z" fill="var(--md-sys-on-primary)"/>
</svg>


`;
var shuffleSeedButton = google3.svg`<svg width="249" height="49" viewBox="0 0 249 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Generate random seed color</title>
<rect width="249" height="49" rx="24.5" fill="var(--md-sys-background)"/>
<rect x="16" y="6.5" width="36" height="36" rx="18" fill="var(--md-sys-primary)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M72.3775 23.435L68.5 19.5575L69.5575 18.5L73.4425 22.3775L72.3775 23.435ZM76 18.5V20H77.935L68.5 29.4425L69.5575 30.5L79 21.065V23H80.5V18.5H76ZM79 27.935V26.0225H80.5V30.5H76V29.0225H77.9575L75.5575 26.6225L76.6225 25.5575L79 27.935Z" fill="var(--md-sys-on-background)"/>
<path d="M98.1715 26.9365C98.1715 26.499 98.0165 26.1618 97.7066 25.9248C97.4013 25.6878 96.8476 25.4486 96.0455 25.207C95.2434 24.9655 94.6054 24.6966 94.1314 24.4004C93.2245 23.8307 92.7711 23.0879 92.7711 22.1719C92.7711 21.3698 93.0969 20.709 93.7486 20.1895C94.4049 19.6699 95.2548 19.4102 96.2984 19.4102C96.9911 19.4102 97.6087 19.5378 98.151 19.793C98.6933 20.0482 99.1194 20.4128 99.4293 20.8867C99.7392 21.3561 99.8941 21.8779 99.8941 22.4521H98.1715C98.1715 21.9326 98.0074 21.527 97.6793 21.2354C97.3557 20.9391 96.8909 20.791 96.2848 20.791C95.7197 20.791 95.2799 20.9118 94.9654 21.1533C94.6555 21.3949 94.5006 21.7321 94.5006 22.165C94.5006 22.5296 94.6692 22.835 95.0064 23.0811C95.3437 23.3226 95.8997 23.5596 96.6744 23.792C97.4492 24.0199 98.0712 24.2819 98.5406 24.5781C99.01 24.8698 99.3541 25.207 99.5729 25.5898C99.7916 25.9681 99.901 26.4124 99.901 26.9229C99.901 27.7523 99.582 28.4131 98.9439 28.9053C98.3105 29.3929 97.4492 29.6367 96.36 29.6367C95.6399 29.6367 94.9768 29.5046 94.3707 29.2402C93.7691 28.9714 93.2997 28.6022 92.9625 28.1328C92.6298 27.6634 92.4635 27.1165 92.4635 26.4922H94.193C94.193 27.0573 94.3798 27.4948 94.7535 27.8047C95.1272 28.1146 95.6627 28.2695 96.36 28.2695C96.9615 28.2695 97.4127 28.1488 97.7135 27.9072C98.0188 27.6611 98.1715 27.3376 98.1715 26.9365ZM102.995 22.9102C103.537 22.2812 104.223 21.9668 105.053 21.9668C106.63 21.9668 107.429 22.8669 107.452 24.667V29.5H105.791V24.7285C105.791 24.2181 105.679 23.8581 105.456 23.6484C105.237 23.4342 104.914 23.3271 104.485 23.3271C103.82 23.3271 103.323 23.6234 102.995 24.2158V29.5H101.334V19H102.995V22.9102ZM113.718 28.7754C113.231 29.3496 112.538 29.6367 111.64 29.6367C110.838 29.6367 110.23 29.402 109.815 28.9326C109.405 28.4632 109.2 27.7842 109.2 26.8955V22.1035H110.861V26.875C110.861 27.8138 111.25 28.2832 112.03 28.2832C112.836 28.2832 113.381 27.9938 113.663 27.415V22.1035H115.325V29.5H113.759L113.718 28.7754ZM117.701 29.5V23.334H116.573V22.1035H117.701V21.4268C117.701 20.6064 117.929 19.973 118.385 19.5264C118.84 19.0798 119.478 18.8564 120.299 18.8564C120.59 18.8564 120.9 18.8975 121.228 18.9795L121.187 20.2783C121.005 20.2419 120.793 20.2236 120.552 20.2236C119.759 20.2236 119.362 20.6315 119.362 21.4473V22.1035H121.905V21.4404C121.91 20.6064 122.156 19.9684 122.643 19.5264C123.136 19.0798 123.828 18.8564 124.721 18.8564C125.277 18.8564 126.294 18.9658 127.77 19.1846V29.5H126.109V20.3193C125.644 20.2555 125.243 20.2236 124.906 20.2236C124.013 20.2236 123.566 20.6429 123.566 21.4814V22.1035H125.07V23.334H123.566V29.5H121.905V23.334H119.362V29.5H117.701ZM132.97 29.6367C131.917 29.6367 131.063 29.3063 130.406 28.6455C129.755 27.9801 129.429 27.096 129.429 25.9932V25.7881C129.429 25.0498 129.57 24.3913 129.853 23.8125C130.14 23.2292 130.541 22.7757 131.056 22.4521C131.571 22.1286 132.145 21.9668 132.779 21.9668C133.786 21.9668 134.563 22.2881 135.11 22.9307C135.661 23.5732 135.937 24.4824 135.937 25.6582V26.3281H131.104C131.154 26.9388 131.357 27.4219 131.712 27.7773C132.072 28.1328 132.523 28.3105 133.066 28.3105C133.827 28.3105 134.446 28.0029 134.925 27.3877L135.821 28.2422C135.524 28.6842 135.128 29.0283 134.631 29.2744C134.139 29.516 133.585 29.6367 132.97 29.6367ZM132.772 23.2998C132.316 23.2998 131.947 23.4593 131.664 23.7783C131.386 24.0973 131.209 24.5417 131.131 25.1113H134.296V24.9883C134.26 24.4323 134.112 24.013 133.852 23.7305C133.592 23.4434 133.232 23.2998 132.772 23.2998ZM145.064 27.4902C145.064 27.194 144.941 26.9684 144.695 26.8135C144.454 26.6585 144.05 26.5218 143.485 26.4033C142.92 26.2848 142.449 26.1344 142.07 25.9521C141.241 25.5511 140.826 24.9701 140.826 24.209C140.826 23.571 141.095 23.0378 141.633 22.6094C142.171 22.181 142.854 21.9668 143.684 21.9668C144.568 21.9668 145.281 22.1855 145.823 22.623C146.37 23.0605 146.644 23.6279 146.644 24.3252H144.982C144.982 24.0062 144.864 23.7419 144.627 23.5322C144.39 23.318 144.076 23.2109 143.684 23.2109C143.319 23.2109 143.021 23.2952 142.788 23.4639C142.56 23.6325 142.446 23.8581 142.446 24.1406C142.446 24.3958 142.553 24.5941 142.768 24.7354C142.982 24.8766 143.415 25.0202 144.066 25.166C144.718 25.3073 145.229 25.4782 145.598 25.6787C145.971 25.8747 146.247 26.1117 146.425 26.3896C146.607 26.6676 146.698 27.0049 146.698 27.4014C146.698 28.0667 146.423 28.6068 145.871 29.0215C145.32 29.4316 144.597 29.6367 143.704 29.6367C143.098 29.6367 142.558 29.5273 142.084 29.3086C141.61 29.0898 141.241 28.7891 140.977 28.4062C140.712 28.0234 140.58 27.611 140.58 27.1689H142.193C142.216 27.5609 142.364 27.8639 142.638 28.0781C142.911 28.2878 143.273 28.3926 143.725 28.3926C144.162 28.3926 144.495 28.3105 144.723 28.1465C144.951 27.9779 145.064 27.7591 145.064 27.4902ZM147.94 25.7334C147.94 25.0088 148.083 24.3571 148.371 23.7783C148.658 23.195 149.061 22.7484 149.58 22.4385C150.1 22.124 150.697 21.9668 151.371 21.9668C152.37 21.9668 153.178 22.2881 153.798 22.9307C154.423 23.5732 154.76 24.4255 154.81 25.4873L154.817 25.877C154.817 26.6061 154.676 27.2578 154.393 27.832C154.115 28.4062 153.714 28.8506 153.19 29.165C152.67 29.4795 152.069 29.6367 151.385 29.6367C150.342 29.6367 149.505 29.2904 148.876 28.5977C148.252 27.9004 147.94 26.973 147.94 25.8154V25.7334ZM149.601 25.877C149.601 26.638 149.758 27.235 150.073 27.668C150.387 28.0964 150.825 28.3105 151.385 28.3105C151.946 28.3105 152.381 28.0918 152.691 27.6543C153.005 27.2168 153.163 26.5765 153.163 25.7334C153.163 24.986 153.001 24.3936 152.677 23.9561C152.358 23.5186 151.923 23.2998 151.371 23.2998C150.829 23.2998 150.399 23.5163 150.079 23.9492C149.76 24.3776 149.601 25.0202 149.601 25.877ZM160.803 28.7754C160.315 29.3496 159.622 29.6367 158.724 29.6367C157.922 29.6367 157.314 29.402 156.899 28.9326C156.489 28.4632 156.284 27.7842 156.284 26.8955V22.1035H157.945V26.875C157.945 27.8138 158.335 28.2832 159.114 28.2832C159.921 28.2832 160.465 27.9938 160.748 27.415V22.1035H162.409V29.5H160.844L160.803 28.7754ZM168.073 23.6211C167.855 23.5846 167.629 23.5664 167.397 23.5664C166.636 23.5664 166.123 23.8581 165.859 24.4414V29.5H164.197V22.1035H165.783L165.824 22.9307C166.225 22.2881 166.781 21.9668 167.492 21.9668C167.729 21.9668 167.925 21.9987 168.08 22.0625L168.073 23.6211ZM172.125 28.3105C172.539 28.3105 172.883 28.1898 173.157 27.9482C173.43 27.7067 173.576 27.4082 173.594 27.0527H175.16C175.142 27.513 174.998 27.9437 174.729 28.3447C174.46 28.7412 174.096 29.0557 173.635 29.2881C173.175 29.5205 172.678 29.6367 172.145 29.6367C171.111 29.6367 170.29 29.3018 169.684 28.6318C169.078 27.9619 168.775 27.0368 168.775 25.8564V25.6855C168.775 24.5599 169.076 23.6598 169.677 22.9854C170.279 22.3063 171.099 21.9668 172.138 21.9668C173.018 21.9668 173.733 22.2243 174.285 22.7393C174.841 23.2497 175.132 23.9219 175.16 24.7559H173.594C173.576 24.332 173.43 23.9834 173.157 23.71C172.888 23.4365 172.544 23.2998 172.125 23.2998C171.587 23.2998 171.172 23.4958 170.88 23.8877C170.589 24.2751 170.441 24.8652 170.436 25.6582V25.9248C170.436 26.7269 170.58 27.3262 170.867 27.7227C171.158 28.1146 171.578 28.3105 172.125 28.3105ZM179.771 29.6367C178.719 29.6367 177.864 29.3063 177.208 28.6455C176.556 27.9801 176.23 27.096 176.23 25.9932V25.7881C176.23 25.0498 176.372 24.3913 176.654 23.8125C176.941 23.2292 177.342 22.7757 177.857 22.4521C178.372 22.1286 178.947 21.9668 179.58 21.9668C180.587 21.9668 181.364 22.2881 181.911 22.9307C182.463 23.5732 182.738 24.4824 182.738 25.6582V26.3281H177.905C177.955 26.9388 178.158 27.4219 178.514 27.7773C178.874 28.1328 179.325 28.3105 179.867 28.3105C180.628 28.3105 181.248 28.0029 181.727 27.3877L182.622 28.2422C182.326 28.6842 181.929 29.0283 181.433 29.2744C180.94 29.516 180.387 29.6367 179.771 29.6367ZM179.573 23.2998C179.118 23.2998 178.748 23.4593 178.466 23.7783C178.188 24.0973 178.01 24.5417 177.933 25.1113H181.098V24.9883C181.061 24.4323 180.913 24.013 180.653 23.7305C180.394 23.4434 180.034 23.2998 179.573 23.2998ZM190.759 28.3105C191.173 28.3105 191.517 28.1898 191.791 27.9482C192.064 27.7067 192.21 27.4082 192.228 27.0527H193.794C193.776 27.513 193.632 27.9437 193.363 28.3447C193.094 28.7412 192.73 29.0557 192.269 29.2881C191.809 29.5205 191.312 29.6367 190.779 29.6367C189.745 29.6367 188.924 29.3018 188.318 28.6318C187.712 27.9619 187.409 27.0368 187.409 25.8564V25.6855C187.409 24.5599 187.71 23.6598 188.311 22.9854C188.913 22.3063 189.733 21.9668 190.772 21.9668C191.652 21.9668 192.367 22.2243 192.919 22.7393C193.475 23.2497 193.766 23.9219 193.794 24.7559H192.228C192.21 24.332 192.064 23.9834 191.791 23.71C191.522 23.4365 191.178 23.2998 190.759 23.2998C190.221 23.2998 189.806 23.4958 189.514 23.8877C189.223 24.2751 189.075 24.8652 189.07 25.6582V25.9248C189.07 26.7269 189.214 27.3262 189.501 27.7227C189.792 28.1146 190.212 28.3105 190.759 28.3105ZM194.837 25.7334C194.837 25.0088 194.981 24.3571 195.268 23.7783C195.555 23.195 195.958 22.7484 196.478 22.4385C196.997 22.124 197.594 21.9668 198.269 21.9668C199.267 21.9668 200.076 22.2881 200.696 22.9307C201.32 23.5732 201.657 24.4255 201.707 25.4873L201.714 25.877C201.714 26.6061 201.573 27.2578 201.29 27.832C201.012 28.4062 200.611 28.8506 200.087 29.165C199.568 29.4795 198.966 29.6367 198.282 29.6367C197.239 29.6367 196.403 29.2904 195.774 28.5977C195.149 27.9004 194.837 26.973 194.837 25.8154V25.7334ZM196.498 25.877C196.498 26.638 196.655 27.235 196.97 27.668C197.284 28.0964 197.722 28.3105 198.282 28.3105C198.843 28.3105 199.278 28.0918 199.588 27.6543C199.903 27.2168 200.06 26.5765 200.06 25.7334C200.06 24.986 199.898 24.3936 199.574 23.9561C199.255 23.5186 198.82 23.2998 198.269 23.2998C197.726 23.2998 197.296 23.5163 196.977 23.9492C196.658 24.3776 196.498 25.0202 196.498 25.877ZM204.986 29.5H203.325V19H204.986V29.5ZM206.59 25.7334C206.59 25.0088 206.733 24.3571 207.021 23.7783C207.308 23.195 207.711 22.7484 208.23 22.4385C208.75 22.124 209.347 21.9668 210.021 21.9668C211.02 21.9668 211.828 22.2881 212.448 22.9307C213.073 23.5732 213.41 24.4255 213.46 25.4873L213.467 25.877C213.467 26.6061 213.326 27.2578 213.043 27.832C212.765 28.4062 212.364 28.8506 211.84 29.165C211.32 29.4795 210.719 29.6367 210.035 29.6367C208.992 29.6367 208.155 29.2904 207.526 28.5977C206.902 27.9004 206.59 26.973 206.59 25.8154V25.7334ZM208.251 25.877C208.251 26.638 208.408 27.235 208.723 27.668C209.037 28.0964 209.475 28.3105 210.035 28.3105C210.596 28.3105 211.031 28.0918 211.341 27.6543C211.655 27.2168 211.812 26.5765 211.812 25.7334C211.812 24.986 211.651 24.3936 211.327 23.9561C211.008 23.5186 210.573 23.2998 210.021 23.2998C209.479 23.2998 209.049 23.5163 208.729 23.9492C208.41 24.3776 208.251 25.0202 208.251 25.877ZM218.844 23.6211C218.625 23.5846 218.4 23.5664 218.167 23.5664C217.406 23.5664 216.894 23.8581 216.629 24.4414V29.5H214.968V22.1035H216.554L216.595 22.9307C216.996 22.2881 217.552 21.9668 218.263 21.9668C218.5 21.9668 218.696 21.9987 218.851 22.0625L218.844 23.6211Z" fill="var(--md-sys-on-background)"/>
<rect x="0.5" y="0.5" width="248" height="48" rx="24" stroke="var(--md-sys-on-background)" stroke-opacity="0.54"/>
</svg>
`;
var uploadImageButton = google3.svg`
<svg width="271" height="63" viewBox="0 0 271 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Add your wallpaper</title>
<g filter="url(#filter0_d)">
<path d="M4 27.5C4 12.3122 16.3122 0 31.5 0H239.5C254.688 0 267 12.3122 267 27.5C267 42.6878 254.688 55 239.5 55H31.5C16.3122 55 4 42.6878 4 27.5Z" fill="var(--md-sys-primary-container)"/>
<path d="M73 28.25H67.75V33.5H66.25V28.25H61V26.75H66.25V21.5H67.75V26.75H73V28.25Z" fill="var(--md-sys-on-primary)"/>
<path d="M84.6511 32L88.2771 21.976H90.0271L93.6671 32H91.9871L91.1051 29.424H87.1991L86.3171 32H84.6511ZM88.7531 24.93L87.6891 27.996H90.6151L89.5511 24.93L89.2011 23.782H89.1171L88.7531 24.93ZM97.5603 32.224C96.9163 32.224 96.347 32.07 95.8523 31.762C95.367 31.4447 94.9843 30.992 94.7043 30.404C94.4243 29.816 94.2843 29.1207 94.2843 28.318C94.2843 27.506 94.4243 26.8107 94.7043 26.232C94.9843 25.644 95.3716 25.196 95.8663 24.888C96.361 24.5707 96.9256 24.412 97.5603 24.412C98.111 24.412 98.5776 24.5287 98.9603 24.762C99.3523 24.986 99.6416 25.2567 99.8283 25.574H99.9123L99.8283 24.524V21.136H101.326V32H99.9123V31.048H99.8283C99.6323 31.3653 99.3383 31.6407 98.9463 31.874C98.5636 32.1073 98.1016 32.224 97.5603 32.224ZM97.8403 30.838C98.4376 30.838 98.9323 30.628 99.3243 30.208C99.7163 29.7787 99.9123 29.1487 99.9123 28.318C99.9123 27.4873 99.7163 26.862 99.3243 26.442C98.9323 26.0127 98.4376 25.798 97.8403 25.798C97.243 25.798 96.7483 26.0127 96.3563 26.442C95.9736 26.862 95.7823 27.4873 95.7823 28.318C95.7823 29.1487 95.9736 29.7787 96.3563 30.208C96.7483 30.628 97.243 30.838 97.8403 30.838ZM106.146 32.224C105.502 32.224 104.933 32.07 104.438 31.762C103.953 31.4447 103.57 30.992 103.29 30.404C103.01 29.816 102.87 29.1207 102.87 28.318C102.87 27.506 103.01 26.8107 103.29 26.232C103.57 25.644 103.958 25.196 104.452 24.888C104.947 24.5707 105.512 24.412 106.146 24.412C106.697 24.412 107.164 24.5287 107.546 24.762C107.938 24.986 108.228 25.2567 108.414 25.574H108.498L108.414 24.524V21.136H109.912V32H108.498V31.048H108.414C108.218 31.3653 107.924 31.6407 107.532 31.874C107.15 32.1073 106.688 32.224 106.146 32.224ZM106.426 30.838C107.024 30.838 107.518 30.628 107.91 30.208C108.302 29.7787 108.498 29.1487 108.498 28.318C108.498 27.4873 108.302 26.862 107.91 26.442C107.518 26.0127 107.024 25.798 106.426 25.798C105.829 25.798 105.334 26.0127 104.942 26.442C104.56 26.862 104.368 27.4873 104.368 28.318C104.368 29.1487 104.56 29.7787 104.942 30.208C105.334 30.628 105.829 30.838 106.426 30.838ZM116.087 35.094C115.648 35.094 115.27 35.024 114.953 34.884V33.456C115.037 33.512 115.172 33.5727 115.359 33.638C115.555 33.7033 115.765 33.736 115.989 33.736C116.287 33.736 116.539 33.652 116.745 33.484C116.95 33.316 117.151 32.9987 117.347 32.532L117.641 31.832L114.701 24.636H116.381L118.397 29.83H118.453L120.441 24.636H122.079L118.635 33.036C118.327 33.792 117.977 34.324 117.585 34.632C117.202 34.94 116.703 35.094 116.087 35.094ZM126.197 32.224C125.46 32.224 124.82 32.0607 124.279 31.734C123.738 31.398 123.318 30.936 123.019 30.348C122.73 29.76 122.585 29.0833 122.585 28.318C122.585 27.5527 122.73 26.876 123.019 26.288C123.318 25.7 123.738 25.2427 124.279 24.916C124.82 24.58 125.46 24.412 126.197 24.412C126.944 24.412 127.583 24.58 128.115 24.916C128.656 25.2427 129.072 25.7 129.361 26.288C129.66 26.876 129.809 27.5527 129.809 28.318C129.809 29.0833 129.66 29.76 129.361 30.348C129.072 30.936 128.656 31.398 128.115 31.734C127.583 32.0607 126.944 32.224 126.197 32.224ZM126.197 30.838C126.822 30.838 127.331 30.6233 127.723 30.194C128.115 29.7553 128.311 29.13 128.311 28.318C128.311 27.506 128.115 26.8853 127.723 26.456C127.331 26.0173 126.822 25.798 126.197 25.798C125.581 25.798 125.072 26.0173 124.671 26.456C124.279 26.8853 124.083 27.506 124.083 28.318C124.083 29.13 124.279 29.7553 124.671 30.194C125.072 30.6233 125.581 30.838 126.197 30.838ZM133.865 32.224C133.025 32.224 132.386 31.9767 131.947 31.482C131.509 30.978 131.289 30.292 131.289 29.424V24.636H132.787V29.228C132.787 29.7787 132.923 30.1847 133.193 30.446C133.473 30.7073 133.833 30.838 134.271 30.838C134.822 30.838 135.256 30.642 135.573 30.25C135.891 29.858 136.049 29.382 136.049 28.822V24.636H137.547V32H136.133V31.062H136.049C135.853 31.4073 135.564 31.6873 135.181 31.902C134.799 32.1167 134.36 32.224 133.865 32.224ZM139.589 32V24.636H141.003V25.63H141.087C141.237 25.2753 141.479 24.986 141.815 24.762C142.151 24.538 142.534 24.426 142.963 24.426C143.141 24.426 143.285 24.4353 143.397 24.454C143.509 24.4727 143.607 24.496 143.691 24.524V26.05C143.411 25.9193 143.094 25.854 142.739 25.854C142.273 25.854 141.881 26.0407 141.563 26.414C141.246 26.7873 141.087 27.254 141.087 27.814V32H139.589ZM150.065 32L147.951 24.636H149.561L150.877 29.872H150.933L152.417 24.636H153.943L155.427 29.858H155.483L156.799 24.636H158.381L156.253 32H154.685L153.173 26.652H153.117L151.619 32H150.065ZM161.708 32.224C160.943 32.224 160.327 32.014 159.86 31.594C159.394 31.174 159.16 30.6093 159.16 29.9C159.16 29.4053 159.286 28.99 159.538 28.654C159.8 28.3087 160.14 28.0473 160.56 27.87C160.99 27.6927 161.461 27.604 161.974 27.604C162.366 27.604 162.73 27.6273 163.066 27.674C163.402 27.7207 163.738 27.7907 164.074 27.884V27.184C164.074 26.7267 163.916 26.3627 163.598 26.092C163.281 25.812 162.861 25.672 162.338 25.672C161.918 25.672 161.559 25.7747 161.26 25.98C160.971 26.176 160.77 26.4653 160.658 26.848L159.328 26.54C159.478 25.8493 159.832 25.322 160.392 24.958C160.962 24.594 161.615 24.412 162.352 24.412C163.388 24.412 164.177 24.6593 164.718 25.154C165.26 25.6487 165.53 26.358 165.53 27.282V32H164.074V31.146H163.99C163.776 31.426 163.477 31.678 163.094 31.902C162.721 32.1167 162.259 32.224 161.708 32.224ZM162.044 30.992C162.66 30.992 163.15 30.8053 163.514 30.432C163.888 30.0493 164.074 29.592 164.074 29.06C163.449 28.8453 162.828 28.738 162.212 28.738C161.727 28.738 161.349 28.836 161.078 29.032C160.808 29.228 160.672 29.5173 160.672 29.9C160.672 30.2173 160.798 30.4787 161.05 30.684C161.312 30.8893 161.643 30.992 162.044 30.992ZM167.494 32V21.136H169.006V32H167.494ZM171.048 32V21.136H172.56V32H171.048ZM174.603 35.024V24.636H176.017V25.602H176.101C176.288 25.2847 176.577 25.0093 176.969 24.776C177.37 24.5333 177.837 24.412 178.369 24.412C179.013 24.412 179.582 24.5707 180.077 24.888C180.572 25.196 180.959 25.644 181.239 26.232C181.519 26.8107 181.659 27.506 181.659 28.318C181.659 29.13 181.519 29.83 181.239 30.418C180.959 30.9967 180.572 31.4447 180.077 31.762C179.582 32.07 179.013 32.224 178.369 32.224C177.809 32.224 177.333 32.112 176.941 31.888C176.558 31.6547 176.278 31.384 176.101 31.076H176.017L176.101 32.112V35.024H174.603ZM178.089 30.838C178.686 30.838 179.181 30.628 179.573 30.208C179.965 29.7787 180.161 29.1487 180.161 28.318C180.161 27.4873 179.965 26.862 179.573 26.442C179.181 26.0127 178.686 25.798 178.089 25.798C177.501 25.798 177.006 26.0127 176.605 26.442C176.213 26.862 176.017 27.4873 176.017 28.318C176.017 29.1487 176.213 29.7787 176.605 30.208C177.006 30.628 177.501 30.838 178.089 30.838ZM185.497 32.224C184.732 32.224 184.116 32.014 183.649 31.594C183.183 31.174 182.949 30.6093 182.949 29.9C182.949 29.4053 183.075 28.99 183.327 28.654C183.589 28.3087 183.929 28.0473 184.349 27.87C184.779 27.6927 185.25 27.604 185.763 27.604C186.155 27.604 186.519 27.6273 186.855 27.674C187.191 27.7207 187.527 27.7907 187.863 27.884V27.184C187.863 26.7267 187.705 26.3627 187.387 26.092C187.07 25.812 186.65 25.672 186.127 25.672C185.707 25.672 185.348 25.7747 185.049 25.98C184.76 26.176 184.559 26.4653 184.447 26.848L183.117 26.54C183.267 25.8493 183.621 25.322 184.181 24.958C184.751 24.594 185.404 24.412 186.141 24.412C187.177 24.412 187.966 24.6593 188.507 25.154C189.049 25.6487 189.319 26.358 189.319 27.282V32H187.863V31.146H187.779C187.565 31.426 187.266 31.678 186.883 31.902C186.51 32.1167 186.048 32.224 185.497 32.224ZM185.833 30.992C186.449 30.992 186.939 30.8053 187.303 30.432C187.677 30.0493 187.863 29.592 187.863 29.06C187.238 28.8453 186.617 28.738 186.001 28.738C185.516 28.738 185.138 28.836 184.867 29.032C184.597 29.228 184.461 29.5173 184.461 29.9C184.461 30.2173 184.587 30.4787 184.839 30.684C185.101 30.8893 185.432 30.992 185.833 30.992ZM191.283 35.024V24.636H192.697V25.602H192.781C192.967 25.2847 193.257 25.0093 193.649 24.776C194.05 24.5333 194.517 24.412 195.049 24.412C195.693 24.412 196.262 24.5707 196.757 24.888C197.251 25.196 197.639 25.644 197.919 26.232C198.199 26.8107 198.339 27.506 198.339 28.318C198.339 29.13 198.199 29.83 197.919 30.418C197.639 30.9967 197.251 31.4447 196.757 31.762C196.262 32.07 195.693 32.224 195.049 32.224C194.489 32.224 194.013 32.112 193.621 31.888C193.238 31.6547 192.958 31.384 192.781 31.076H192.697L192.781 32.112V35.024H191.283ZM194.769 30.838C195.366 30.838 195.861 30.628 196.253 30.208C196.645 29.7787 196.841 29.1487 196.841 28.318C196.841 27.4873 196.645 26.862 196.253 26.442C195.861 26.0127 195.366 25.798 194.769 25.798C194.181 25.798 193.686 26.0127 193.285 26.442C192.893 26.862 192.697 27.4873 192.697 28.318C192.697 29.1487 192.893 29.7787 193.285 30.208C193.686 30.628 194.181 30.838 194.769 30.838ZM203.003 32.224C202.294 32.224 201.673 32.0607 201.141 31.734C200.618 31.398 200.212 30.9407 199.923 30.362C199.643 29.774 199.503 29.0973 199.503 28.332C199.503 27.548 199.652 26.862 199.951 26.274C200.25 25.686 200.66 25.2287 201.183 24.902C201.715 24.5753 202.322 24.412 203.003 24.412C204.114 24.412 204.954 24.7247 205.523 25.35C206.102 25.9753 206.391 26.8293 206.391 27.912C206.391 28.1827 206.377 28.4253 206.349 28.64H200.973C201.02 29.368 201.234 29.9233 201.617 30.306C202 30.6887 202.48 30.88 203.059 30.88C203.572 30.88 203.969 30.768 204.249 30.544C204.538 30.3107 204.748 30.0213 204.879 29.676L206.195 30.026C206.008 30.6607 205.654 31.188 205.131 31.608C204.608 32.0187 203.899 32.224 203.003 32.224ZM203.017 25.686C202.513 25.686 202.084 25.84 201.729 26.148C201.384 26.456 201.155 26.9087 201.043 27.506H204.907C204.879 26.9553 204.706 26.5167 204.389 26.19C204.072 25.854 203.614 25.686 203.017 25.686ZM208.003 32V24.636H209.417V25.63H209.501C209.651 25.2753 209.893 24.986 210.229 24.762C210.565 24.538 210.948 24.426 211.377 24.426C211.555 24.426 211.699 24.4353 211.811 24.454C211.923 24.4727 212.021 24.496 212.105 24.524V26.05C211.825 25.9193 211.508 25.854 211.153 25.854C210.687 25.854 210.295 26.0407 209.977 26.414C209.66 26.7873 209.501 27.254 209.501 27.814V32H208.003Z" fill="var(--md-sys-on-primary)"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="271" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

`;