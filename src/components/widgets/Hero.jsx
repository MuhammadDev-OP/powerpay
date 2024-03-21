"use client";

import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-56 absolute inset-0 z-0 overflow-hidden">
          <svg
            fill="none"
            viewBox="0 0 1810 238"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff" opacity=".05">
              <path
                d="m1308.5 8.6812-10.27 30.393 21.81 20.157-11.54-50.551z"
                fill-opacity=".6"
              />
              <path d="m1308.5 8.6811-39.85 33.194 29.58-2.8003 10.27-30.393z" />
              <path
                d="m1287.7 70.257-6.98 20.654 37.72-26.894-30.74 6.2401z"
                fill-opacity=".6"
              />
              <path d="m1280.7 90.911 6.98-20.654-20.67-23.572 13.69 44.227z" />
              <path
                d="m1289.3 65.477 30.72-6.2153-21.81-20.142-8.91 26.358z"
                fill-opacity=".2"
              />
              <path
                d="m1268.6 41.875 20.67 23.572 8.91-26.358-29.58 2.7853z"
                fill-opacity=".6"
              />
            </g>
            <g fill="#fff" opacity=".05">
              <path d="m1653.7 17.324 11.63-1.3084-21.51 26.698c-3.77 4.6436-9.21 7.6207-15.15 8.2887s-11.9-1.0266-16.61-4.7181l-26.93-21.25 11.65-1.3102 20.44 16.128c2.98 2.3468 6.76 3.4254 10.53 3.0019 3.76-0.4235 7.21-2.315 9.59-5.264l16.36-20.266z" />
              <path d="m1604.2 90.468-11.65 1.3102 21.7-26.94c3.76-4.6436 9.2-7.6207 15.14-8.2887s11.91 1.0266 16.61 4.7181l27.06 21.458-11.64 1.3084-20.61-16.346c-2.98-2.3427-6.76-3.4188-10.53-2.9955-3.76 0.4234-7.21 2.3122-9.59 5.2577l-16.49 20.517z" />
            </g>
            <g opacity=".05">
              <path
                d="m44.026 14.215c0.4208-0.1856 0.8842-0.2531 1.3404-0.1951s0.888 0.2392 1.249 0.5241c0.361 0.285 0.6375 0.6629 0.7998 1.0932s0.2042 0.8967 0.1214 1.3491c-0.0829 0.4524-0.2875 0.8736-0.5918 1.2184s-0.6968 0.6002-1.1354 0.7387c-0.4385 0.1385-0.9065 0.1548-1.3537 0.0473-0.4471-0.1075-0.8565-0.3349-1.1841-0.6576-0.2872-0.2931-0.4997-0.6509-0.6197-1.0432-0.1201-0.3924-0.1442-0.8078-0.0702-1.2114 0.0739-0.4035 0.2437-0.7835 0.495-1.1078 0.2514-0.3242 0.5769-0.5834 0.9493-0.7557zm-21.125 2.2791c0.3072-0.0988 0.634-0.121 0.9518-0.0647s0.617 0.1895 0.8716 0.3878c0.2545 0.1984 0.4568 0.4559 0.5891 0.7503s0.1907 0.6166 0.1701 0.9387c-0.0207 0.3221-0.1197 0.6342-0.2885 0.9093-0.1689 0.275-0.4024 0.5047-0.6802 0.6689s-0.5916 0.258-0.9139 0.2733c-0.3224 0.0153-0.6436-0.0484-0.9358-0.1856-0.3534-0.1745-0.6472-0.4498-0.8445-0.791-0.1972-0.3413-0.289-0.7333-0.2638-1.1266 0.0252-0.3934 0.1663-0.7705 0.4055-1.0837 0.2392-0.3133 0.5658-0.5488 0.9386-0.6767zm43.287 3.7251c-0.4107-0.0886-0.7826-0.3056-1.0619-0.6195-0.2792-0.3139-0.4514-0.7084-0.4917-1.1267-0.0402-0.4182 0.0536-0.8384 0.2679-1.1997 0.2142-0.3614 0.5379-0.6453 0.9242-0.8107 1.3831-0.6758 2.672 0.5973 2.8763 1.9176-0.0421 0.2869-0.1408 0.5626-0.2906 0.811-0.1497 0.2483-0.3473 0.4644-0.5814 0.6355-0.2341 0.1712-0.4999 0.2941-0.7819 0.3615-0.2821 0.0673-0.5747 0.0779-0.8609 0.031zm-38.477 5.2655c0.484-0.2668 1.0313-0.3971 1.5836-0.3769s1.0887 0.1901 1.5519 0.4916c0.4632 0.3014 0.8358 0.7231 1.0778 1.22 0.2421 0.4968 0.3446 1.05 0.2966 1.6006s-0.2448 1.0777-0.5692 1.5251c-0.3245 0.4474-0.7644 0.7982-1.2728 1.015-0.5084 0.2167-1.0661 0.2912-1.6135 0.2154-0.5475-0.0757-1.0641-0.2988-1.4945-0.6454-0.3703-0.3255-0.6587-0.7335-0.8422-1.191-0.1834-0.4576-0.2567-0.9519-0.2138-1.443 0.0428-0.4911 0.2005-0.9652 0.4604-1.3841s0.6147-0.7708 1.0357-1.0273zm30.461 1.336c0.2591-0.5015 0.6486-0.9241 1.1274-1.2232 0.4788-0.299 1.0293-0.4637 1.5937-0.4765 0.5645-0.0129 1.1219 0.1265 1.6139 0.4034 0.4919 0.277 0.9002 0.6813 1.1819 1.1706 0.1978 0.4232 0.3017 0.8841 0.3046 1.3512 0.0028 0.4671-0.0955 0.9293-0.2881 1.3549s-0.475 0.8044-0.8279 1.1105c-0.3528 0.3061-0.7677 0.5323-1.2162 0.663-0.5645 0.1124-1.149 0.0677-1.6899-0.1293-0.5408-0.197-1.0172-0.5386-1.3772-0.9878-0.3599-0.4492-0.5897-0.9885-0.6641-1.5593-0.0745-0.5708 0.0092-1.151 0.2419-1.6775zm-16.692 4.2281c0.0542-0.9462 0.4598-1.8381 1.1372-2.501s1.5779-1.049 2.5251-1.0827c0.6505 0.0599 1.2766 0.2772 1.8243 0.6332s1.0005 0.84 1.3193 1.4102c0.2207 0.4307 0.3524 0.9015 0.387 1.3842s-0.0284 0.9675-0.1854 1.4253-0.4047 0.8792-0.7284 1.2391c-0.3236 0.3599-0.7164 0.6508-1.1551 0.8553-0.856 0.3292-1.7874 0.4109-2.6877 0.2358-0.711-0.2979-1.3192-0.7975-1.7493-1.4372-0.4302-0.6397-0.6636-1.3913-0.6713-2.1622m-31.436 2.8764c0.401-0.2079 0.8505-0.304 1.3014-0.2783 0.4509 0.0258 0.8866 0.1726 1.2612 0.4249s0.6744 0.6008 0.8678 1.009c0.1934 0.4081 0.2733 0.8608 0.2313 1.3105-0.0419 0.4497-0.2042 0.8798-0.4697 1.2451-0.2656 0.3653-0.6247 0.6524-1.0395 0.831-0.4148 0.1787-0.87 0.2423-1.3179 0.1843-0.448-0.058-0.872-0.2356-1.2275-0.5141-0.32784-0.2619-0.58541-0.6012-0.74954-0.9874-0.16413-0.3861-0.22966-0.8071-0.19068-1.2249 0.03897-0.4177 0.18122-0.8193 0.41394-1.1684 0.23272-0.3492 0.54861-0.635 0.91921-0.8317zm67.508 0c0.3664-0.2499 0.7923-0.3984 1.2347-0.4305 0.4423-0.0322 0.8852 0.0532 1.2839 0.2475s0.7389 0.4906 0.9861 0.8587c0.2472 0.3682 0.3927 0.7952 0.4217 1.2377 0.0289 0.4426-0.0596 0.8849-0.2568 1.2822-0.1971 0.3972-0.4958 0.7353-0.8657 0.9799s-0.798 0.387-1.2407 0.4128c-0.4428 0.0258-0.8844-0.0659-1.2803-0.2659-0.3904-0.1972-0.7226-0.4928-0.9638-0.8577-0.2412-0.3648-0.3831-0.7863-0.4117-1.2227-0.0286-0.4365 0.0572-0.8728 0.2488-1.266s0.4824-0.7296 0.8438-0.976zm-27.255 3.5365c1.137-0.3857 2.3624-0.4272 3.5229-0.1194 1.1604 0.3078 2.2041 0.9512 3.0004 1.8497s1.3097 2.012 1.4758 3.201c0.1662 1.189-0.0223 2.4006-0.5419 3.483-0.5195 1.0823-1.3469 1.9872-2.3785 2.6013s-2.2216 0.91-3.4206 0.8507c-1.1991-0.0593-2.354-0.4712-3.32-1.184-0.966-0.7129-1.7001-1.6951-2.1103-2.8234-0.2709-0.7635-0.3881-1.5731-0.3449-2.3821 0.0431-0.809 0.2458-1.6015 0.5964-2.3319s0.8422-1.3843 1.4464-1.924 1.3092-0.9546 2.0743-1.2209zm-14.979 0.2986c1.085-0.5124 2.297-0.6934 3.4843-0.5204 1.1873 0.1731 2.2972 0.6926 3.1908 1.4934 0.8935 0.8008 1.5309 1.8475 1.8324 3.0088 0.3015 1.1614 0.2538 2.3859-0.1373 3.5203-0.3911 1.1343-1.1081 2.1281-2.0613 2.8569s-2.1002 1.1603-3.2974 1.2403c-1.1972 0.0801-2.3914-0.1948-3.4331-0.7903-1.0418-0.5954-1.8847-1.4849-2.4233-2.5571-0.3586-0.728-0.5694-1.5198-0.6204-2.3297s0.059-1.6218 0.3235-2.389 0.6783-1.4744 1.2175-2.0808c0.5393-0.6064 1.1933-1.1 1.9243-1.4524zm-15.042 5.1083c0.1608-0.8629 0.6116-1.645 1.2776-2.2167s1.5074-0.8987 2.3847-0.9268c0.9104 0.1041 1.7586 0.5135 2.4065 1.1614s1.0573 1.4962 1.1615 2.4065c-0.0218 0.9487-0.3989 1.8547-1.0567 2.5387s-1.5484 1.0962-2.4956 1.155c-0.5278 0.0227-1.054-0.0721-1.5407-0.2775-0.4867-0.2055-0.9217-0.5164-1.2736-0.9104s-0.6119-0.8613-0.7613-1.368c-0.1493-0.5067-0.1843-1.0403-0.1024-1.5622zm44.293-2.7349c0.5579-0.2741 1.1775-0.3984 1.798-0.3606s1.2205 0.2363 1.7411 0.5761 0.9438 0.8091 1.2281 1.3619c0.2843 0.5529 0.4199 1.1701 0.3935 1.7912s-0.2139 1.2246-0.5441 1.7513-0.7917 0.9585-1.3392 1.2529-1.1622 0.4413-1.7837 0.4263c-0.6214-0.015-1.2283-0.1914-1.7609-0.5119-0.5431-0.3385-0.9866-0.8151-1.2852-1.3811-0.2986-0.5659-0.4417-1.2011-0.4145-1.8404 0.0272-0.6394 0.2236-1.26 0.5691-1.7986 0.3456-0.5387 0.8279-0.9759 1.3978-1.2671zm-35.397 9.6036c1.1159-0.2986 2.2938-0.2733 3.3958 0.073s2.0827 0.9992 2.8273 1.8823c0.7445 0.8832 1.2222 1.9601 1.3772 3.1048 0.1549 1.1447-0.0192 2.3099-0.5022 3.3592-0.483 1.0494-1.2547 1.9395-2.2251 2.5663-0.9703 0.6268-2.099 0.9643-3.2541 0.9731-1.1551 0.0089-2.2889-0.3114-3.2686-0.9233-0.9798-0.6119-1.7651-1.4902-2.264-2.532-0.3775-0.8072-0.5744-1.687-0.5771-2.578-0.0027-0.8911 0.1889-1.7721 0.5615-2.5815 0.3725-0.8095 0.9171-1.528 1.5957-2.1055s1.475-1.0001 2.3336-1.2384zm28.402 0c1.104-0.3365 2.2807-0.3528 3.3936-0.0471s2.1161 0.9209 2.8933 1.7741c0.7771 0.8532 1.2962 1.9095 1.4969 3.046s0.0748 2.3066-0.3631 3.3744c-0.4378 1.0678-1.1697 1.9895-2.1106 2.6578-0.9408 0.6684-2.052 1.0561-3.2044 1.1181-1.1525 0.062-2.2988-0.2043-3.3059-0.768-1.0071-0.5636-1.8336-1.4015-2.3835-2.4161-0.422-0.7965-0.6636-1.6759-0.7078-2.5762-0.0442-0.9002 0.1101-1.7991 0.4521-2.633 0.342-0.834 0.8632-1.5825 1.5267-2.1925s1.4531-1.0666 2.3127-1.3375zm-45.267 3.0179c0.539-0.1506 1.1084-0.1546 1.6495-0.0115 0.5411 0.143 1.0341 0.4279 1.4282 0.8253 0.3942 0.3973 0.6751 0.8926 0.8138 1.4348 0.1386 0.5422 0.13 1.1116-0.0249 1.6494-0.1614 0.4796-0.4397 0.9116-0.8097 1.2568-0.37 0.3453-0.8202 0.593-1.3098 0.7209-0.4897 0.1279-1.0035 0.1319-1.4951 0.0116-0.4916-0.1202-0.9455-0.361-1.3208-0.7004-0.3778-0.3682-0.657-0.8255-0.8116-1.3298-0.1547-0.5044-0.18-1.0395-0.0735-1.5562s0.3412-0.9982 0.6827-1.4003c0.3414-0.4021 0.7786-0.7118 1.2712-0.9006zm61.394 3.2693c-0.0559-0.9108 0.2521-1.8065 0.8563-2.4903 0.6042-0.6837 1.4552-1.0996 2.3659-1.1562 0.79 0.0729 1.5256 0.4333 2.0674 1.0127 0.5419 0.5795 0.8521 1.3377 0.8718 2.1308-0.0253 0.513-0.1759 1.0119-0.4386 1.4532s-0.6296 0.8115-1.0685 1.0783c-0.4388 0.2667-0.9364 0.4219-1.4491 0.4519-0.5127 0.0299-1.0249-0.0661-1.4919-0.2799-0.8154-0.5198-1.4219-1.3099-1.7133-2.232m-72.522-2.1219c0.34078-0.1413 0.71424-0.1846 1.0783-0.125s0.70428 0.2196 0.98226 0.4622c0.27798 0.2425 0.48269 0.5578 0.59106 0.9105 0.10838 0.3526 0.1161 0.7285 0.02231 1.0853-0.0938 0.3568-0.28539 0.6803-0.55317 0.934-0.26778 0.2538-0.60111 0.4277-0.96242 0.5021-0.36132 0.0745-0.73625 0.0466-1.0826-0.0806-0.34629-0.1272-0.65018-0.3486-0.87741-0.6392-0.17894-0.2436-0.30115-0.5241-0.35771-0.821s-0.046036-0.6026 0.030807-0.8949 0.21805-0.5638 0.41331-0.7945 0.43963-0.4148 0.71521-0.5389zm85.898 0c0.2436-0.1545 0.5182-0.2536 0.8043-0.2901 0.2862-0.0365 0.5769-0.0095 0.8515 0.079 0.2745 0.0885 0.5262 0.2364 0.7372 0.4332 0.211 0.1967 0.376 0.4375 0.4834 0.7053 0.131 0.3062 0.1808 0.6411 0.1444 0.9721-0.0365 0.3311-0.1578 0.6472-0.3523 0.9176s-0.4555 0.4859-0.7578 0.6257c-0.3023 0.1399-0.6356 0.1992-0.9676 0.1724-1.9333 0.1728-2.562-2.7821-0.9745-3.6309m-50.502 8.2205c1.2352-0.2876 2.5294-0.183 3.7023 0.2994 1.173 0.4824 2.1664 1.3184 2.8419 2.3918 0.6756 1.0733 0.9997 2.3306 0.9272 3.5968-0.0724 1.2662-0.5378 2.4782-1.3313 3.4676-0.7936 0.9893-1.8759 1.7066-3.0962 2.052s-2.5179 0.3018-3.7123-0.1247c-1.1943-0.4266-2.226-1.215-2.9513-2.2553-0.7254-1.0404-1.1084-2.281-1.0956-3.5491 0.0272-1.3629 0.5045-2.6784 1.3574-3.7417s2.0335-1.8146 3.3579-2.1368zm14.146 0c1.2917-0.3199 2.6526-0.2085 3.8751 0.3171 1.2225 0.5257 2.2395 1.4368 2.8959 2.5944s0.9161 2.4981 0.7396 3.817c-0.1765 1.319-0.7796 2.5441-1.7172 3.4883-0.9377 0.9443-2.1584 1.5559-3.4761 1.7417-1.3177 0.1857-2.66-0.0646-3.8222-0.7128-1.1621-0.6483-2.0804-1.6589-2.6146-2.8777-0.5343-1.2187-0.6552-2.5788-0.3444-3.8727 0.2642-1.0848 0.8195-2.0768 1.6062-2.869 0.7867-0.7923 1.7748-1.3546 2.8577-1.6263zm-27.365 2.2633c0.6166-0.0819 1.2439-0.0026 1.8208 0.2301 0.5768 0.2327 1.0835 0.6109 1.4707 1.0978 0.3871 0.4868 0.6414 1.0657 0.7382 1.6802 0.0968 0.6144 0.0327 1.2434-0.1861 1.8257-0.2187 0.5823-0.5846 1.098-1.062 1.4967-0.4774 0.3988-1.05 0.667-1.6619 0.7786-0.612 0.1116-1.2424 0.0626-1.8298-0.142-0.5873-0.2047-1.1117-0.5581-1.5218-1.0257-0.419-0.4934-0.6985-1.0899-0.8095-1.7276s-0.0495-1.2935 0.1781-1.8995 0.6131-1.1401 1.1166-1.547c0.5034-0.4069 1.1065-0.6718 1.7467-0.7673zm41.637 0.1258c0.572-0.2078 1.1875-0.2666 1.7885-0.1707 0.601 0.096 1.1677 0.3434 1.6466 0.7189s0.8543 0.8668 1.0907 1.4276c0.2365 0.5608 0.3263 1.1725 0.2608 1.7776-0.0654 0.6051-0.2838 1.1835-0.6347 1.6808-0.3508 0.4973-0.8225 0.897-1.3706 1.1615s-1.1546 0.3851-1.7622 0.3504c-0.6076-0.0348-1.1963-0.2237-1.7107-0.549-0.5611-0.3617-1.0105-0.8725-1.298-1.475s-0.4018-1.2732-0.3301-1.9369c0.0718-0.6638 0.3268-1.2945 0.7364-1.8217 0.4097-0.5272 0.9578-0.93 1.5833-1.1635zm11.631 11.663c-0.1784-0.3997-0.2486-0.8393-0.2037-1.2748 0.045-0.4354 0.2035-0.8514 0.4597-1.2064 0.2563-0.3549 0.6013-0.6363 1.0004-0.816 0.3992-0.1797 0.8386-0.2514 1.2742-0.2079 0.9116 0 1.5718 0.7073 2.1219 1.3046 0.1257 0.9588 0.3301 2.1219-0.4872 2.8764-0.2796 0.3146-0.6341 0.5535-1.0307 0.6945-0.3965 0.1411-0.8223 0.1797-1.2377 0.1122-0.4155-0.0674-0.8071-0.2386-1.1387-0.4978-0.3317-0.2592-0.5924-0.5979-0.7582-0.9848zm-66.707-3.0492c0.38936-0.2266 0.83206-0.3451 1.2825-0.3433 0.4504 0.0017 0.8922 0.1236 1.2797 0.3531 0.3876 0.2296 0.7068 0.5584 0.9249 0.9525 0.218 0.3941 0.3269 0.8393 0.3154 1.2895-0.0115 0.4503-0.143 0.8894-0.3809 1.2718-0.2378 0.3825-0.5735 0.6946-0.9722 0.904-0.3988 0.2094-0.8462 0.3086-1.2962 0.2874-0.4499-0.0213-0.8859-0.1622-1.2632-0.4083-0.35796-0.2387-0.64962-0.5641-0.84776-0.946-0.19814-0.3818-0.29631-0.8077-0.28532-1.2377 0.01099-0.4301 0.13077-0.8504 0.34815-1.2216 0.21738-0.3713 0.52528-0.6814 0.89495-0.9014zm33.589 3.6779c0.5719-0.2176 1.1899-0.2852 1.7953-0.1963s1.1779 0.3313 1.6631 0.7041c0.4852 0.3729 0.8668 0.8637 1.1085 1.4258s0.3355 1.1768 0.2724 1.7854-0.281 1.1909-0.6329 1.6915c-0.352 0.5005-0.8262 0.9026-1.3775 1.168-0.5514 0.2653-1.1615 0.3851-1.7722 0.3479-0.6108-0.0373-1.2018-0.2303-1.7168-0.5606-0.5437-0.3684-0.9774-0.8773-1.2547-1.4726s-0.388-1.2546-0.3203-1.9079c0.0678-0.6532 0.3114-1.2758 0.705-1.8015s0.9224-0.9348 1.5301-1.1838zm-15.561 3.6309c0.4683-0.2058 0.9807-0.2904 1.4902-0.2461 0.5096 0.0442 0.9998 0.2159 1.4256 0.4992 0.4257 0.2834 0.7734 0.6692 1.011 1.1221 0.2376 0.453 0.3574 0.9583 0.3485 1.4697-0.0014 0.4239-0.0925 0.8428-0.2674 1.229s-0.4296 0.7309-0.7474 1.0116c-0.3178 0.2806-0.6914 0.4908-1.0962 0.6166-0.4049 0.1259-0.8318 0.1645-1.2527 0.1135-0.6651-0.0938-1.2875-0.3829-1.7883-0.8306-0.5008-0.4476-0.8576-1.0338-1.0251-1.6843-0.0452-0.6766 0.1114-1.3515 0.4499-1.939 0.3386-0.5876 0.8439-1.0615 1.4519-1.3617zm31.53 0c0.4805-0.2618 1.0224-0.3894 1.5691-0.3696s1.0781 0.1863 1.5383 0.482c0.4602 0.2958 0.8324 0.7099 1.0775 1.199s0.3541 1.0351 0.3156 1.5808c-0.0385 0.5458-0.2231 1.0711-0.5344 1.5209-0.3114 0.4498-0.738 0.8076-1.2352 1.0358s-1.0466 0.3185-1.5907 0.2613c-0.5441-0.0571-1.0628-0.2596-1.5017-0.5862-0.3898-0.3185-0.6975-0.7259-0.8971-1.1881-0.1995-0.4621-0.2852-0.9655-0.2498-1.4676 0.0354-0.5022 0.1909-0.9884 0.4534-1.418 0.2625-0.4295 0.6244-0.7898 1.055-1.0503zm5.4699 13.549c-0.1623-0.3036-0.2495-0.6417-0.2542-0.9859s0.0732-0.6845 0.2271-0.9924c0.154-0.3079 0.3795-0.5744 0.6577-0.7771 0.2782-0.2028 0.6009-0.3359 0.9411-0.3882 1.1317 0.2358 2.3263 1.0845 2.0905 2.4048-0.0654 0.399-0.2496 0.769-0.5284 1.0618-0.2789 0.2928-0.6395 0.4948-1.0348 0.5796s-0.8071 0.0486-1.1815-0.104-0.6942-0.4145-0.9175-0.7515m-43.507-1.1317c0.3458-1.0374 1.1789-2.0747 2.4049-1.8075 0.3974 0.0661 0.7655 0.2509 1.0559 0.5302 0.2905 0.2793 0.4896 0.6399 0.5712 1.0344 0.0816 0.3946 0.042 0.8046-0.1138 1.1762-0.1558 0.3715-0.4203 0.6873-0.7589 0.9057-0.3222 0.172-0.6831 0.2585-1.0482 0.2514-0.3652-0.0072-0.7224-0.1077-1.0376-0.2922-0.3153-0.1844-0.578-0.4465-0.7632-0.7613-0.1851-0.3148-0.2865-0.6717-0.2946-1.0369m20.999 1.1946c0.1046-0.3644 0.2908-0.7002 0.5443-0.9819 0.2536-0.2818 0.5679-0.5022 0.9193-0.6446 0.3513-0.1423 0.7304-0.2029 1.1086-0.1771s0.7456 0.1373 1.0743 0.3261c0.8645 0.3772 1.116 1.3517 1.3361 2.1691l-0.3301 1.2888c-0.2358 0.3562-0.5492 0.6544-0.9167 0.8721-0.3675 0.2178-0.7795 0.3495-1.2052 0.3853-0.4033 0.0234-0.8063-0.0514-1.1744-0.2179s-0.6904-0.4197-0.9391-0.7381c-0.2488-0.3183-0.4167-0.6922-0.4894-1.0896-0.0726-0.3974-0.0478-0.8065 0.0723-1.1922z"
                fill="#fff"
              />
            </g>
            <g fill="#fff" opacity=".05">
              <path d="m196.26 219.98c0.387-0.59 0.989-1.005 1.678-1.155l63.308-13.849c0.256-0.052 0.521-0.028 0.763 0.068 0.242 0.097 0.45 0.262 0.6 0.476 0.149 0.213 0.232 0.466 0.24 0.726 8e-3 0.261-0.061 0.518-0.198 0.74l-9.776 15.251c-0.381 0.589-0.979 1.003-1.663 1.153l-63.308 13.848c-0.257 0.06-0.526 0.042-0.772-0.052-0.247-0.095-0.46-0.261-0.611-0.477s-0.234-0.473-0.238-0.737 0.071-0.523 0.216-0.744l9.761-15.248z" />
              <path d="m186.05 173.28c0.393-0.583 0.992-0.996 1.678-1.155l63.307-13.849c0.256-0.052 0.521-0.028 0.763 0.068 0.242 0.097 0.45 0.262 0.6 0.476 0.149 0.213 0.233 0.466 0.24 0.726 8e-3 0.261-0.061 0.518-0.198 0.74l-9.763 15.313c-0.381 0.588-0.978 1.002-1.663 1.152l-63.307 13.848c-0.257 0.06-0.526 0.042-0.773-0.052-0.246-0.094-0.459-0.26-0.61-0.477-0.151-0.216-0.234-0.473-0.238-0.737-4e-3 -0.263 0.071-0.522 0.216-0.743l9.748-15.31z" />
              <path d="m244.69 184.82c-0.591-0.375-1.307-0.502-1.992-0.352l-63.307 13.848c-0.259 0.053-0.496 0.182-0.681 0.37-0.184 0.189-0.308 0.428-0.355 0.688s-0.015 0.528 0.091 0.769c0.107 0.242 0.283 0.446 0.507 0.586l15.233 9.764c0.294 0.192 0.623 0.322 0.968 0.385 0.346 0.063 0.7 0.056 1.042-0.02l63.308-13.848c0.254-0.06 0.485-0.192 0.664-0.381 0.18-0.188 0.301-0.426 0.347-0.682 0.047-0.257 0.017-0.521-0.085-0.761s-0.272-0.445-0.488-0.589l-15.252-9.777z" />
            </g>
            <g fill="#fff" opacity=".05">
              <path d="m1433.7 187.27 7.5-9.837 1.6-2.072 3.75-4.935 16.78 12.823 7.44-9.828-26.56-20.237-20.28 26.593 9.77 7.493z" />
              <path d="m1448.3 182.77-7.47 9.806 9.81 7.463 7.46-9.806-9.8-7.463z" />
              <path d="m1465 195.59-12.77 16.787-5.89-4.482-1.08-0.821-9.88-7.463-7.43 9.764 26.63 20.242 20.2-26.598-9.78-7.429z" />
              <path d="m1418.6 186.81-7.46 9.807 9.81 7.462 7.46-9.806-9.81-7.463z" />
              <path d="m1477.8 178.78-7.46 9.807 9.8 7.462 7.47-9.806-9.81-7.463z" />
            </g>
            <g
              clip-rule="evenodd"
              fill="#fff"
              fill-rule="evenodd"
              opacity=".05"
            >
              <path d="m1747.3 220.51-10.94-2.596c-2.29-0.545-3.42-0.814-4-1.421-0.31-0.323-0.54-0.716-0.67-1.145-0.13-0.43-0.15-0.883-0.07-1.324 0.19-0.811 0.95-1.696 2.55-3.416l38.28-41.105c1.62-1.746 2.45-2.648 3.27-2.81 0.43-0.112 0.89-0.116 1.32-0.012 0.44 0.104 0.85 0.312 1.18 0.608 0.65 0.541 0.99 1.688 1.66 3.979l3.25 10.999c0.59 1.58 0.96 3.233 1.1 4.912 0 1.339-0.31 2.66-0.92 3.854-0.89 1.457-1.97 2.787-3.21 3.953l-20.09 21.645-0.02 0.076c-1.07 1.323-2.34 2.486-3.74 3.457-1.16 0.694-2.48 1.092-3.83 1.158-1.73-0.048-3.46-0.321-5.12-0.812z" />
              <path d="m1774.9 227.07 15.66 3.719c2.31 0.548 3.47 0.824 4.27 0.529 0.42-0.152 0.81-0.403 1.11-0.731 0.31-0.329 0.54-0.726 0.66-1.158 0.19-0.796-0.1-1.867-0.67-3.988 0 0-0.04-0.14-0.05-0.224l-4.67-15.274-0.05-0.175c-0.66-2.127-0.99-3.191-1.62-3.729-0.34-0.288-0.75-0.492-1.18-0.596-0.44-0.103-0.89-0.103-1.33 1e-3 -0.8 0.196-1.62 1.052-3.24 2.753l-11 11.556c-1.6 1.719-2.41 2.56-2.56 3.381-0.08 0.443-0.05 0.898 0.07 1.329 0.13 0.432 0.36 0.827 0.67 1.156 0.46 0.627 1.62 0.903 3.93 1.451z" />
            </g>
            <g opacity=".05">
              <path
                d="m580.44 124.66c-6.266-5.62-13.485-2.79-20.753 2.796l-7.873-8.553-5.16 4.738 7.618 8.383c-1.375 1.251-2.749 2.563-4.1 3.87l-7.717-8.388-5.16 4.737 7.849 8.557c-1.097 1.047-2.195 2.094-3.269 3.074l-7.249 6.637 5.117 5.574s3.771-3.619 3.785-3.487c0.614-0.743 1.496-1.214 2.455-1.309 0.959-0.096 1.917 0.191 2.665 0.799l8.996 9.781 12.521 13.695c0.214 0.253 0.377 0.547 0.477 0.863 0.101 0.317 0.138 0.65 0.108 0.981-0.029 0.331-0.123 0.653-0.277 0.947-0.154 0.295-0.365 0.556-0.621 0.768 0.085 0.056-3.8 3.477-3.8 3.477l4.695 7.168 6.741-6.239 3.744-3.392 7.968 8.656 5.16-4.737-7.864-8.628c1.455-1.279 2.853-2.535 4.204-3.781l7.831 8.524 5.16-4.737-7.939-8.637c8.29-8.555 12.384-16.397 5.588-25.317-5.444-7.174-11.302-7.273-17.369-3.907 1.605-4.315 1.013-8.755-3.582-12.866l0.051-0.047zm9.716 25.196c5.922 6.451-5.799 15.918-9.326 19.167l-10.531-11.465c3.528-3.25 13.614-14.467 19.857-7.702zm-17.266-13.935c5.4 5.883-4.467 13.682-7.418 16.396l-9.56-10.377c2.946-2.738 11.335-12.184 16.963-6.029l0.015 0.01z"
                fill="#fff"
              />
            </g>
            <g opacity=".4">
              <path
                d="m743.14 105.79c8.232-1.381 14.761-9.1244 14.576-17.289-0.189-8.0206-6.777-13.485-14.821-12.352-0.148 0.0198-0.291 0.0424-0.434 0.0679-1.341 0.2236-2.648 0.6126-3.892 1.1579h-28.414c-0.162 0-0.318 0.0642-0.433 0.1783-0.115 0.1142-0.18 0.269-0.18 0.4304-8e-3 0.0699-5e-3 0.1405 9e-3 0.2095h28.819c0.162 0 0.318 0.0642 0.433 0.1783 0.115 0.1142 0.18 0.269 0.18 0.4304 0 0.1615-0.065 0.3163-0.18 0.4304-0.115 0.1142-0.271 0.1783-0.433 0.1783h-3.287c-1.492 1.1079-2.806 2.4327-3.898 3.9296v0.0198l-0.017 0.0227c-0.324 0.4454-0.625 0.9031-0.905 1.3731-0.14 0.2435-0.288 0.5096-0.442 0.8097l-0.011 0.0227v1e-4c-0.177 0.3618-0.37 0.7565-0.56 1.1946v1e-4l-1e-3 0.0026h-4e-3c-0.068 0.1603-0.136 0.3206-0.2 0.4823-0.04 0.0974-0.08 0.1976-0.12 0.302-0.017 0.0481-0.035 0.0949-0.053 0.1416s-0.036 0.0934-0.053 0.1415c-0.39 1.0893-0.663 2.2168-0.813 3.3634h-24.391c-0.08-4e-4 -0.16 0.015-0.234 0.0453s-0.142 0.0748-0.199 0.1311-0.102 0.1233-0.133 0.197c-0.031 0.0736-0.047 0.1527-0.047 0.2325 2e-3 0.0694 0.015 0.138 0.037 0.2038h28.828c0.162 0 0.319 0.0641 0.434 0.1783 0.115 0.1141 0.179 0.269 0.179 0.4304s-0.064 0.3162-0.179 0.4304-0.272 0.1783-0.434 0.1783h-3.975v0.2604c0.016 0.736 0.089 1.4696 0.22 2.1942l2e-3 0.0139c0.075 0.5095 0.192 1.0118 0.35 1.5019 0.036 0.1209 0.073 0.2413 0.113 0.3612 0.085 0.2435 0.191 0.5266 0.314 0.8097 0.175 0.417 0.376 0.8235 0.599 1.2174 0.868 1.5575 2.058 2.9165 3.492 3.9865h-0.011c-0.218-0.159-0.43-0.325-0.636-0.497-1.154-0.983-2.123-2.165-2.859-3.4897 0.725 1.3327 1.696 2.5157 2.859 3.4897 0.202 0.171 0.409 0.337 0.622 0.497h-17.021c-0.162 0-0.318 0.064-0.433 0.178s-0.18 0.269-0.18 0.43c2e-3 0.07 0.014 0.139 0.037 0.204h20.995c0.123-1e-3 0.242 0.035 0.344 0.103 0.102 0.067 0.181 0.164 0.226 0.276 0.046 0.113 0.057 0.237 0.031 0.355-0.026 0.119-0.087 0.227-0.176 0.311 1.921 0.557 3.941 0.697 5.921 0.41 0.154-0.019 0.291-0.039 0.439-0.065zm-10.183-2.202h0.014l0.012 8e-3h-0.015l-0.011-8e-3zm-4.493-6.3748c0.039 0.1212 0.081 0.2417 0.125 0.3613h2e-3c-0.206-0.613-0.366-1.2404-0.479-1.877l2e-3 0.0138c0.087 0.5071 0.204 1.0086 0.35 1.5019zm0.581-9.946c-0.04 0.1009-0.079 0.2024-0.117 0.3048 0.109-0.2747 0.217-0.5351 0.326-0.7871h-5e-3c-0.068 0.1581-0.136 0.3163-0.204 0.4823zm2.068-3.7899c0.022-0.0308 0.044-0.0615 0.066-0.0922h3e-3c-0.023 0.0307-0.046 0.0614-0.069 0.0922zm-0.838 1.2809c0.262-0.4376 0.541-0.8646 0.838-1.2809-0.304 0.4104-0.584 0.8381-0.838 1.2809zm21.612-0.7531c-0.928-1.1683-2.314-1.7524-4.157-1.7524h-7.105l-4.714 17.895h5.076l1.333-5.0619h2.029c1.844 5e-4 3.634-0.6159 5.082-1.7496 1.535-1.1585 2.622-2.8059 3.078-4.6657 0.514-1.9421 0.307-3.4974-0.622-4.6657zm-5.136 5.7246c-0.309 0.2518-0.695 0.3915-1.095 0.3963h-2.029l0.767-2.916h2.029c0.169-0.0104 0.338 0.0206 0.492 0.0902 0.155 0.0696 0.289 0.1757 0.393 0.3089 0.103 0.1542 0.169 0.3303 0.191 0.5143 0.023 0.1839 1e-3 0.3705-0.063 0.5446-0.101 0.4203-0.343 0.7943-0.685 1.0617z"
                clip-rule="evenodd"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                d="m1034 104.33c-0.73 0-1.36-0.261-1.88-0.783-0.53-0.522-0.79-1.15-0.79-1.883h5.34c0 0.733-0.26 1.361-0.79 1.883-0.52 0.522-1.15 0.783-1.88 0.783zm-9.33-4c-0.38 0-0.7-0.127-0.95-0.3829-0.26-0.2556-0.39-0.5722-0.39-0.95s0.13-0.6945 0.39-0.95c0.25-0.2556 0.57-0.3834 0.95-0.3834h1.33v-9.3333c0-1.8444 0.56-3.4833 1.67-4.9167 1.11-1.4333 2.55-2.3722 4.33-2.8166v-0.9334c0-0.5555 0.19-1.0277 0.58-1.4166s0.86-0.5834 1.42-0.5834 1.03 0.1945 1.42 0.5834 0.58 0.8611 0.58 1.4166v0.4334c-0.22 0.4444-0.39 0.9111-0.5 1.4s-0.17 0.9889-0.17 1.5c0 1.8444 0.65 3.4166 1.95 4.7166s2.88 1.95 4.72 1.95v8h1.33c0.38 0 0.7 0.1278 0.95 0.3834 0.26 0.2555 0.39 0.5722 0.39 0.95s-0.13 0.6944-0.39 0.95c-0.25 0.2559-0.57 0.3829-0.95 0.3829h-18.66z"
                fill="#fff"
              />
              <path
                d="m1039.2 85.833c0.77 0.7778 1.72 1.1667 2.83 1.1667s2.06-0.3889 2.83-1.1667c0.78-0.7777 1.17-1.7222 1.17-2.8333s-0.39-2.0556-1.17-2.8333c-0.77-0.7778-1.72-1.1667-2.83-1.1667s-2.06 0.3889-2.83 1.1667c-0.78 0.7777-1.17 1.7222-1.17 2.8333s0.39 2.0556 1.17 2.8333z"
                fill="#fff"
              />
              <circle
                cx="1092.5"
                cy="89.5"
                r="13.5"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                d="m1092.4 89.206c1 0 1.86-0.3583 2.57-1.0652 0.7-0.7067 1.06-1.5715 1.06-2.5706 0-0.9987-0.36-1.8636-1.06-2.5706-0.71-0.7066-1.57-1.0649-2.57-1.0649s-1.87 0.3583-2.57 1.065c-0.71 0.7068-1.07 1.5717-1.07 2.5705 0 0.9991 0.36 1.864 1.07 2.5708 0.7 0.7066 1.57 1.065 2.57 1.065z"
                fill="#fff"
              />
              <path
                d="m1098.8 93.542c-0.02-0.2941-0.06-0.615-0.12-0.9538-0.06-0.3413-0.14-0.664-0.24-0.959-0.1-0.3048-0.23-0.6059-0.39-0.8944-0.17-0.2994-0.37-0.5601-0.6-0.7747-0.23-0.2244-0.52-0.4049-0.85-0.5365-0.33-0.131-0.7-0.1973-1.09-0.1973-0.15 0-0.3 0.0632-0.59 0.2506-0.18 0.1155-0.39 0.2491-0.62 0.3969-0.19 0.1259-0.46 0.244-0.79 0.3509-0.33 0.1044-0.65 0.1574-0.98 0.1574-0.32 0-0.65-0.053-0.97-0.1574-0.33-0.1068-0.6-0.2248-0.8-0.3508-0.23-0.1464-0.43-0.28-0.61-0.3971-0.29-0.1874-0.44-0.2506-0.59-0.2506-0.4 0-0.76 0.0664-1.09 0.1975-0.34 0.1314-0.62 0.3119-0.86 0.5365-0.22 0.2147-0.42 0.4753-0.59 0.7746-0.17 0.2885-0.3 0.5895-0.4 0.8945-0.09 0.295-0.17 0.6176-0.23 0.9589-0.06 0.3384-0.1 0.6593-0.12 0.9542-0.02 0.2888-0.03 0.5886-0.03 0.8913 0 0.788 0.25 1.4259 0.74 1.8964 0.49 0.4642 1.13 0.6997 1.92 0.6997h7.27c0.78 0 1.43-0.2354 1.92-0.6997 0.49-0.4701 0.74-1.1082 0.74-1.8965 0-0.3041-0.01-0.6041-0.03-0.8916z"
                fill="#fff"
              />
            </g>
            <path
              d="m1039.2 85.833c0.77 0.7778 1.72 1.1667 2.83 1.1667s2.06-0.3889 2.83-1.1667c0.78-0.7777 1.17-1.7222 1.17-2.8333s-0.39-2.0556-1.17-2.8333c-0.77-0.7778-1.72-1.1667-2.83-1.1667s-2.06 0.3889-2.83 1.1667c-0.78 0.7777-1.17 1.7222-1.17 2.8333s0.39 2.0556 1.17 2.8333z"
              fill="#1E66D0"
            />
            <g fill="#fff" opacity=".05">
              <path d="m363.37 30.969c6.867-2.4589 14.348-2.6188 21.314-0.4558 4.484 1.4465 8.621 3.8045 12.151 6.9259s6.376 6.9387 8.361 11.212c1.225 2.387 1.987 4.9842 2.247 7.6546-5.121-2.7763-10.535-4.9746-16.142-6.5544-8.881-3.1435-18.17-5.4226-26.579-9.8236-1.965-1.1632-4.448-2.3577-4.982-4.7154-0.221-2.2791 2.059-3.4265 3.63-4.2438z" />
              <path d="m370.08 96.277c-4.962-0.7114-9.704-2.5148-13.885-5.2801-4.181-2.7654-7.696-6.4238-10.293-10.712-2.596-4.2878-4.209-9.0982-4.722-14.084-0.513-4.9864 0.086-10.024 1.755-14.751 1.92-5.3905 5.208-10.19 9.541-13.926 1.049 9.2239 5.058 17.86 11.427 24.614 3.854 4.0372 8.489 7.2478 13.623 9.4366 5.134 2.1887 10.66 3.3098 16.241 3.2949 4.409-0.0832 8.795-0.6579 13.077-1.7133-4.307 15.372-21.156 25.573-36.764 23.121z" />
              <path d="m407.58 66.68c-2.387-1.2168-4.606-2.7384-6.601-4.5268-3.633-2.7045-6.632-6.1698-8.787-10.154 4.955 1.4547 9.74 3.436 14.272 5.9099l1.226 0.7073c0.341 2.6797 0.304 5.3939-0.11 8.0633z" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 mx-auto mt-28">
          <div>
            <Image src={"/images/Rectangle.png"} width={500} height={208} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="absolute top-[60px] left-[42px]">
              <Image
                src={"/heroElements/Screen_Ele.png"}
                width={404}
                height={32}
              />
            </div>
            <div className="absolute top-[196px] w-[604px] h-[311px] left-[-55px] bg-black flex flex-col justify-center items-center text-white border-4 border-white p-8 rounded-lg">
              <h1 className="text-5xl font-medium mb-4">Where crypto grows</h1>
              <p className="text-lg text-center font-extralight">
                Enjoy daily passive income on 15+ crypto assets, on your own
                terms. Click on Get Started to start your journey with us
                starting today.
              </p>
            </div>
            <div className="absolute top-[555px] left-[80px]">
              <Image src={"/heroElements/phg.png"} width={320} height={32} />
            </div>
            <button
              className="py-4 px-8 
              absolute top-[700px] left-[80px] w-80
              text-center
           bg-blue-500
            text-white hover:bg-blue-600
             transition-colors duration-300
              rounded-md"
              onClick={() => { }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* <Wrapper>
      </Wrapper> */}
    </>
  );
};

export default Hero;
