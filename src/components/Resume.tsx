import React from 'react';
import { Mail, Phone, MapPin, Github, Globe, Calendar, ExternalLink, User, GraduationCap, Cpu, Briefcase, Award, Code, Heart, Trophy, Plane } from 'lucide-react';
import { personalInfo, education, experience, skills, inOfficeProjects, personalProjects, hobbies } from '../data';

const GammaStackLogo = () => (
  <svg width="100" height="20" viewBox="0 0 257 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mr-2">
    <path d="M63.7004 20.9021C63.7004 20.2735 63.1866 19.7672 62.5633 19.7714H58.5959C58.0442 19.7714 57.5767 20.168 57.4799 20.7122L56.7765 24.7034C56.6839 25.235 56.229 25.6231 55.6941 25.64C55.5804 25.6442 55.4751 25.6442 55.3741 25.6442C54.2496 25.6442 53.5841 25.4501 53.3778 25.0662C53.1714 24.6823 53.2135 23.6571 53.5041 21.9906L54.0979 18.6196C54.3928 16.9321 54.8013 15.8647 55.3319 15.4174C55.8626 14.9702 56.9997 14.7466 58.7433 14.7424C59.5983 14.7424 60.9376 14.8437 62.7528 15.042C63.3003 15.101 63.8099 14.7635 63.9657 14.2361L64.9217 11.0086C64.9386 10.958 64.947 10.9074 64.9554 10.8567C65.0481 10.2366 64.6227 9.65434 63.9994 9.56152C62.0115 9.25354 60.0026 9.09743 57.9895 9.09322C56.3891 9.05524 54.7886 9.26619 53.2514 9.71762C52.0301 10.1015 50.9435 10.8272 50.118 11.8102C49.2799 12.8228 48.6229 13.9746 48.1849 15.2149C47.6331 16.8435 47.2204 18.5142 46.9551 20.2144C46.5213 22.2775 46.3949 24.3954 46.5802 26.4922C46.6897 27.9731 47.4731 29.3189 48.6987 30.1458C49.9032 30.9348 51.7142 31.3314 54.1274 31.3314C56.5322 31.3483 58.9286 31.0993 61.2745 30.5846C61.7336 30.496 62.0916 30.129 62.1758 29.6649L63.6835 21.1004C63.6962 21.0329 63.7004 20.9654 63.7004 20.8979V20.9021Z" fill="#15182F"></path>
    <path d="M81.566 10.5406C81.4902 9.97529 81.0101 9.55762 80.4415 9.55762H73.5682C73.1302 9.55762 72.7343 9.80654 72.5448 10.2031L63.4014 29.3614C63.1318 29.9268 63.3677 30.606 63.932 30.876C64.0879 30.952 64.2563 30.99 64.4248 30.99H68.6785C69.1292 30.99 69.5419 30.7199 69.723 30.3065L70.7843 27.8637C70.9654 27.446 71.3739 27.1802 71.8288 27.1802H76.1836C76.7732 27.1802 77.266 27.6359 77.3123 28.2223L77.4555 29.9479C77.5018 30.5343 77.9903 30.99 78.58 30.9942H83.0358C83.0864 30.9942 83.1369 30.9942 83.1875 30.9815C83.8066 30.8971 84.2404 30.3234 84.1561 29.7032L81.566 10.5449V10.5406ZM75.6276 22.4887H74.7179C74.0904 22.4887 73.585 21.9782 73.585 21.3538C73.585 21.1977 73.6187 21.0416 73.6777 20.8982L74.6885 18.582C74.6885 18.582 74.7053 18.544 74.7137 18.5229L76.2594 14.3335H76.4784L76.5373 18.5229V18.5862L76.7521 21.261C76.7521 21.2906 76.7564 21.3001 76.7521 21.3496C76.7521 21.9782 76.2425 22.4845 75.6192 22.4845L75.6276 22.4887Z" fill="#15182F"></path>
    <path d="M111.418 9.54883H106.895C106.145 9.54883 105.454 9.97494 105.117 10.6458L99.8148 21.2565L98.4208 11.2617C98.2818 10.2787 97.4437 9.54883 96.454 9.54883H91.7707C90.8483 9.54883 90.0439 10.1859 89.8376 11.0888L85.7986 28.5468C85.5502 29.6142 86.2114 30.6816 87.2769 30.9348C87.4243 30.9685 87.5759 30.9854 87.7318 30.9854H89.7786C90.7262 30.9854 91.539 30.3146 91.7244 29.3864L92.7983 23.9735L92.8236 23.8047L93.7249 16.0545H93.9144L95.4474 26.3741C95.5906 27.3486 96.4287 28.0701 97.41 28.0701H100.472C101.226 28.0701 101.916 27.6397 102.249 26.9647L107.627 16.0713L107.783 16.0545L106.023 23.83L105.993 23.9735L105.244 28.6903C105.142 29.3484 105.374 30.015 105.863 30.4622C106.25 30.8124 106.756 30.998 107.274 30.9896H109.325C110.331 30.9896 111.178 30.2386 111.296 29.2387L113.38 11.7807C113.389 11.7005 113.389 11.6203 113.389 11.5402C113.389 10.4432 112.5 9.55305 111.405 9.55305L111.418 9.54883Z" fill="#15182F"></path>
    <path d="M141.948 11.5321C141.948 10.4351 141.059 9.54492 139.964 9.54492H135.441C134.691 9.54492 134.005 9.97104 133.668 10.6419L128.361 21.2525L126.967 11.262C126.832 10.279 125.994 9.54914 125 9.54914H120.317C119.395 9.54914 118.59 10.1862 118.384 11.0891L114.341 28.5471C114.307 28.6948 114.29 28.8467 114.29 28.9986C114.29 30.0955 115.179 30.9857 116.274 30.9857H118.321C119.268 30.9857 120.081 30.3149 120.266 29.3867L121.344 23.9611L121.366 23.8135L122.267 16.0506H122.456L123.989 26.3701C124.133 27.3447 124.971 28.0662 125.952 28.0662H129.014C129.768 28.0662 130.458 27.6358 130.791 26.9608L136.169 16.0674L136.325 16.0506L134.565 23.8261L134.539 23.9569L133.79 28.6864C133.617 29.7706 134.354 30.7874 135.436 30.9604C135.542 30.9773 135.643 30.9857 135.748 30.9857H137.871C138.877 30.9857 139.724 30.2347 139.842 29.2348L141.927 11.7768C141.939 11.6966 141.943 11.6164 141.948 11.5321Z" fill="#15182F"></path>
    <path d="M159.539 10.5406C159.464 9.97529 158.984 9.55762 158.415 9.55762H151.546C151.108 9.55762 150.712 9.81076 150.522 10.2031L141.375 29.3614C141.105 29.9268 141.341 30.606 141.906 30.876C142.061 30.952 142.23 30.99 142.398 30.99H146.652C147.103 30.99 147.515 30.7199 147.692 30.3065L148.754 27.8595C148.935 27.4418 149.343 27.176 149.794 27.176H154.149C154.738 27.176 155.231 27.6317 155.277 28.2181L155.421 29.9437C155.467 30.5301 155.955 30.9857 156.545 30.9857H160.997C161.047 30.9857 161.098 30.9857 161.148 30.9731C161.767 30.8887 162.201 30.3149 162.117 29.6947L159.531 10.5406H159.539ZM153.601 22.4887H152.691C152.064 22.4887 151.558 21.9782 151.558 21.3538C151.558 21.1977 151.592 21.0416 151.651 20.9024L152.662 18.5862C152.662 18.5862 152.679 18.5482 152.683 18.5271L154.233 14.3419H154.452L154.515 18.5229V18.5862L154.73 21.2695C154.73 21.299 154.734 21.3285 154.734 21.3581C154.734 21.9867 154.224 22.493 153.601 22.493V22.4887Z" fill="#15182F"></path>
    <path d="M176.967 8.94238H176.929C174.352 8.94238 172.334 9.29256 170.932 9.98025C169.462 10.7017 168.548 12.0518 168.224 13.9967C168.161 14.3553 168.123 14.7139 168.123 15.0768C168.123 15.3932 168.144 15.7096 168.19 16.0176C168.241 16.3171 168.333 16.6125 168.468 16.8867C168.594 17.1525 168.712 17.3803 168.826 17.5702C168.973 17.8106 169.155 18.0258 169.357 18.2241C169.58 18.4435 169.765 18.6249 169.917 18.7515C170.068 18.878 170.287 19.0468 170.578 19.2493C170.869 19.4518 171.088 19.5995 171.248 19.6965L175.409 22.2237C176.31 22.7089 177.106 23.367 177.75 24.1644C178.146 24.7424 178.281 25.4596 178.121 26.1431C177.99 27.0164 177.384 27.7421 176.55 28.029C176.55 28.029 176.55 28.029 176.55 28.029C175.236 28.4509 173.855 28.6365 172.477 28.5817C170.582 28.5268 168.691 28.3623 166.813 28.0923L166.501 28.0459L165.684 30.8388L166.08 30.9105C168.135 31.286 170.224 31.4843 172.313 31.5054C175.055 31.5054 177.216 31.1004 178.74 30.3072C180.307 29.5056 181.381 27.9868 181.612 26.2401C181.987 24.4977 181.402 22.6835 180.079 21.4896C179.334 20.8441 178.534 20.2703 177.687 19.7725L174.284 17.7263C173.446 17.2706 172.68 16.6884 172.014 16.0049C171.61 15.5155 171.462 14.8616 171.623 14.2456L171.631 14.1992C171.732 13.3723 172.28 12.6677 173.054 12.3597C173.905 12.0264 175.274 11.8577 177.123 11.8577C178.82 11.8999 180.513 12.0518 182.194 12.3176L182.51 12.3682L183.327 9.57523L182.931 9.50351C180.964 9.14911 178.972 8.95926 176.975 8.94238H176.967Z" fill="#15182F"></path>
    <path d="M201.571 9.27539H184.767L184.27 12.1316H190.933L187.572 31.1929H190.895L194.26 12.1316H201.078L201.571 9.27539Z" fill="#15182F"></path>
    <path d="M211.456 10.0096L211.422 9.97588C210.795 9.4021 209.969 9.10678 209.123 9.15318C208.242 9.11943 207.375 9.35569 206.634 9.82822L206.6 9.84931C205.808 10.4779 205.185 11.2964 204.789 12.2288L195.338 31.1973H198.863L201.761 25.2359H211.001L211.898 31.1973H215.347L212.513 12.6085C212.441 11.6508 212.071 10.7437 211.456 10.0096ZM210.744 22.5906H202.961L207.514 13.465C207.699 13.0557 207.939 12.676 208.23 12.3343C208.356 12.1908 208.537 12.1065 208.727 12.1022C209.156 12.1022 209.337 12.7899 209.417 13.3679L210.744 22.5906Z" fill="#15182F"></path>
    <path d="M229.452 8.87454C227.894 8.83657 226.335 9.0433 224.84 9.47786C223.606 9.86178 222.499 10.579 221.639 11.5494C220.763 12.5535 220.085 13.7179 219.643 14.9752C219.083 16.6037 218.666 18.2828 218.397 19.9831C218.076 21.6243 217.9 23.2907 217.866 24.9657C217.866 27.2397 218.409 28.9315 219.483 29.9947C220.557 31.0579 222.322 31.5979 224.735 31.5979C227.405 31.5894 230.063 31.2688 232.653 30.6317L232.939 30.56L232.927 30.2647C232.905 29.7964 232.897 29.0918 232.897 28.1763V27.7207L232.455 27.8219C230.185 28.3366 227.864 28.6024 225.535 28.6151C223.821 28.6151 222.68 28.3155 222.149 27.7291C221.606 27.13 221.332 25.9403 221.332 24.202C221.391 22.5482 221.593 20.8986 221.943 19.2785C222.444 16.6374 223.189 14.7094 224.162 13.5618C225.101 12.448 226.727 11.8827 228.989 11.8827C230.4 11.8827 231.465 12.081 232.156 12.4691C232.375 12.5915 233.049 12.9712 232.703 14.5701L232.185 17.1986H235.395L235.879 14.4267C236.191 12.6547 235.79 11.2625 234.7 10.2921C233.634 9.35129 231.869 8.87454 229.448 8.87454H229.452Z" fill="#15182F"></path>
    <path d="M246.555 20.2155C247.372 19.7936 248.092 19.2114 248.686 18.5068L257.004 9.28418H253.096L247.153 15.8658C246.433 16.6969 245.641 17.4648 244.791 18.1567C244.264 18.5954 243.607 18.8444 242.925 18.8612H241.847L243.544 9.28418H240.276L236.414 31.2017H239.678L241.346 21.7175H242.668C243.131 21.6922 243.586 21.8272 243.961 22.1014C244.399 22.5022 244.77 22.9705 245.052 23.4894L249.756 31.1975H253.53L247.958 21.8694C247.6 21.2365 247.124 20.6754 246.559 20.2113L246.555 20.2155Z" fill="#15182F"></path>
    <path d="M16.3999 25.872C15.7008 25.4121 14.9132 25.1126 14.0878 24.9945C13.9109 24.9776 13.7298 24.9734 13.5487 24.9902C12.5969 25.1337 11.7251 25.602 11.0807 26.315L4.30003 32.1456C3.77358 32.6266 3.73567 33.445 4.2158 33.9724C4.30003 34.0652 4.40111 34.1454 4.51061 34.2129L7.10916 35.7613C7.61455 36.065 8.25893 35.9849 8.67588 35.5714L13.2792 31.0951L11.5945 37.3434C11.4471 37.9045 11.6872 38.4951 12.1841 38.7905L14.7406 40.3135C15.3555 40.6806 16.1472 40.4781 16.5094 39.8621C16.581 39.744 16.6316 39.6089 16.6611 39.4739L18.5436 30.7955C18.8469 29.6269 18.8385 28.6945 18.51 27.9435C18.1857 27.201 17.495 26.5217 16.3915 25.8636L16.3999 25.872Z" fill="#485BFF"></path>
    <path d="M12.5758 23.0585C13.0559 22.4088 13.296 21.468 13.3171 20.1812C13.3634 19.3458 13.2286 18.5105 12.9212 17.7342C12.8496 17.5696 12.7569 17.4135 12.6558 17.2659C12.0578 16.5149 11.2155 15.9918 10.2763 15.7892L1.84889 12.8233C1.17082 12.6081 0.442218 12.9836 0.227427 13.6671C0.189523 13.7895 0.168465 13.916 0.168465 14.0426L0.126349 17.0718C0.113714 17.6625 0.505392 18.1856 1.07817 18.3375L7.24816 20.0926L1.00657 21.7549C0.44643 21.9067 0.0589632 22.4088 0.0463284 22.9868L8.41399e-07 25.9696C-0.00842235 26.6826 0.560143 27.269 1.2719 27.2817C1.41089 27.2817 1.54987 27.2648 1.68464 27.2184L10.1247 24.5141C11.2871 24.1934 12.0873 23.7167 12.5716 23.0627L12.5758 23.0585Z" fill="#485BFF"></path>
    <path d="M10.9628 14.5446C11.8219 15.3926 12.6306 15.8482 13.4434 15.941C13.5487 15.9537 13.6582 15.9579 13.7635 15.9579C14.6648 15.9031 15.5366 15.6246 16.2989 15.1437C17.0443 14.7682 17.6971 14.2324 18.2151 13.5784C18.3204 13.4308 18.4131 13.2789 18.4889 13.1143C18.8385 12.2157 18.8721 11.2285 18.5773 10.3087L16.9264 1.51219C16.7748 0.816063 16.0841 0.373072 15.3892 0.524954C15.267 0.550268 15.1491 0.596677 15.0354 0.659961L12.3947 2.14082C11.8809 2.42771 11.624 3.0268 11.7756 3.59636L13.3423 9.82777L8.78116 5.24598C8.37264 4.83674 7.7409 4.74814 7.23551 5.03081L4.64116 6.48635C4.01785 6.83652 3.79463 7.62125 4.14419 8.24566C4.21158 8.36801 4.30002 8.4777 4.40531 8.57052L10.9628 14.5361V14.5446Z" fill="#485BFF"></path>
    <path d="M22.3594 15.5405C23.0585 16.0003 23.846 16.2999 24.6715 16.418C24.7684 16.4265 24.8695 16.4349 24.9705 16.4349C25.0506 16.4349 25.1306 16.4349 25.2106 16.4265C26.1624 16.283 27.0342 15.8147 27.6786 15.1017L34.4551 9.27109C34.9815 8.79013 35.0194 7.97165 34.5393 7.44428C34.4551 7.35146 34.354 7.2713 34.2445 7.2038L31.6459 5.65544C31.1405 5.35167 30.4919 5.42761 30.075 5.84529L25.4717 10.3216L27.1522 4.07332C27.2996 3.5122 27.0595 2.92155 26.5625 2.62622L24.0061 1.10317C23.3954 0.740342 22.6036 0.938634 22.2372 1.55038C22.1656 1.67273 22.1151 1.80352 22.0856 1.93853L20.203 10.6169C19.8998 11.7856 19.9082 12.718 20.2367 13.469C20.561 14.2115 21.2517 14.8907 22.3551 15.5489L22.3551 15.5489Z" fill="#485BFF"></path>
    <path d="M27.8681 25.9186C27.009 25.0706 26.2003 24.6149 25.3875 24.5221C24.5873 24.4293 23.6523 24.6909 22.532 25.3195C21.7866 25.695 21.1338 26.2308 20.6158 26.8847C20.5105 27.0324 20.4178 27.1843 20.342 27.3488C19.9882 28.2475 19.9587 29.2347 20.2536 30.1544L21.9045 38.951C22.0561 39.6471 22.7426 40.0901 23.4375 39.9382C23.5639 39.9129 23.686 39.8665 23.7955 39.799L26.4362 38.3181C26.95 38.0312 27.2069 37.4321 27.0553 36.8626L25.4886 30.6312L30.0497 35.213C30.4583 35.6222 31.09 35.7108 31.5954 35.4281L34.1897 33.9726C34.813 33.6224 35.0363 32.8335 34.6867 32.2091C34.6193 32.0867 34.5309 31.977 34.4298 31.8842L27.8681 25.9101V25.9186Z" fill="#485BFF"></path>
    <path d="M36.4935 19.3074C36.4261 18.5184 35.748 17.9278 34.9605 17.9658H23.6523C22.8353 17.9151 22.1361 18.5395 22.0856 19.3538V21.6785C22.1572 22.4294 22.7763 23.0116 23.5302 23.0243C23.5597 23.0243 23.5891 23.0243 23.6186 23.0243H34.9057C35.727 23.0791 36.4387 22.459 36.4935 21.6405V19.3116V19.3074Z" fill="#485BFF"></path>
  </svg>
);

const CompanyLogo = ({ logo, company }: { logo?: string, company: string }) => {
  if (!logo) return null;
  if (logo === 'gammastack') return <GammaStackLogo />;
  return (
    <img 
      src={logo} 
      alt={company} 
      className="h-6 object-contain inline-block align-middle mr-2" 
      referrerPolicy="no-referrer"
    />
  );
};

const HobbyIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'Trophy': return <Trophy size={10} />;
    case 'Plane': return <Plane size={10} />;
    case 'Cpu': return <Cpu size={10} />;
    case 'Heart': return <Heart size={10} />;
    default: return null;
  }
};

export const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-0 pb-12 px-4 print:bg-white print:min-h-0 print:p-0 print:m-0 print:block">
      {/* Page 1 */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-b-3xl overflow-hidden print:shadow-none print:rounded-none flex flex-col md:flex-row print:flex-row print:max-w-none print:w-full print:border-none print:m-0 print:mt-0 print:min-h-screen">
        
        {/* Sidebar */}
        <div className="w-full md:w-80 bg-[#15182F] text-white p-6 flex flex-col gap-6 print:w-64 print:min-h-full print:bg-[#15182F] print:text-white print:p-5 print:gap-4" style={{ WebkitPrintColorAdjust: 'exact' }}>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold border-b border-white/20 pb-1.5 uppercase tracking-widest flex items-center gap-2">
              <User size={16} className="text-white" /> PROFILE
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed font-light">{personalInfo.profile}</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold border-b border-white/20 pb-1.5 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap size={16} className="text-white" /> EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="print:break-inside-avoid relative pl-0">
                  <p className="text-[#FF485B] font-bold text-[10px] mb-0.5">{edu.duration}</p>
                  <h3 className="font-bold text-sm mb-0 leading-tight uppercase">{edu.degree}</h3>
                  <p className="text-slate-300 text-[10px] leading-tight mb-0.5">{edu.institution}</p>
                  <p className="text-[#FF485B] text-[10px] font-bold">Score: {edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold border-b border-white/20 pb-1.5 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={16} className="text-white" /> SKILLS
            </h2>
            <div className="space-y-2.5">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="print:break-inside-avoid">
                  <h3 className="text-[10px] font-bold text-[#FF485B] uppercase mb-1 tracking-widest opacity-90">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map(item => (
                      <span key={item} className="bg-white/5 text-[10px] px-1.5 py-0.5 rounded text-slate-300 border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold border-b border-white/20 pb-1.5 uppercase tracking-widest flex items-center gap-2">
              <Heart size={16} className="text-white" /> HOBBIES
            </h2>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {hobbies.map(hobby => (
                <span key={hobby.name} className="text-xs text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                  <HobbyIcon icon={hobby.icon} />
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 pt-10 print:px-8 print:pb-4 relative">
          <div className="flex flex-col md:flex-row print:flex-row justify-between items-start mb-8 gap-6 print:mb-4 print:mt-0 relative z-10">
            <div className="flex-1">
              <h1 className="text-5xl font-black tracking-tight uppercase mb-1 print:text-3xl leading-none text-slate-900">{personalInfo.name}</h1>
              <div className="flex items-center gap-3">
                <p className="text-[#FF485B] font-bold text-xl tracking-[0.2em] uppercase print:text-base">{personalInfo.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-1 text-xs text-slate-600 font-semibold print:text-right print:items-end">
              <div className="flex items-center gap-2"><Mail size={14} className="text-[#FF485B]" /> {personalInfo.email}</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-[#FF485B]" /> {personalInfo.phone}</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-[#FF485B]" /> {personalInfo.location}</div>
              <div className="flex items-center gap-2"><Github size={14} className="text-[#FF485B]" /> {personalInfo.github}</div>
              <div className="flex items-center gap-2"><Globe size={14} className="text-[#FF485B]" /> Portfolio: https://sachin1612.github.io/me</div>
            </div>
          </div>

          <div className="space-y-8 print:space-y-4">
            <section>
              <h2 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 print:text-base print:mb-2">
                <div className="p-1.5 bg-[#FF485B]/10 rounded-lg">
                  <Briefcase className="text-[#FF485B]" size={16} />
                </div>
                PROFESSIONAL EXPERIENCE
                <div className="h-px flex-1 bg-slate-100" />
              </h2>
              <div className="space-y-6 print:space-y-3">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-100 print:break-inside-avoid">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#FF485B]" />
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-1">
                      <div>
                        <div className="flex items-center mb-0.5">
                          <CompanyLogo logo={exp.logo} company={exp.company} />
                          <h3 className="text-sm font-bold text-slate-900">{exp.company}</h3>
                        </div>
                        <p className="text-[#FF485B] font-bold text-[10px] uppercase tracking-widest">{exp.role}</p>
                      </div>
                      <div className="text-slate-500 text-[10px] font-bold flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-lg border border-slate-100">
                        <Calendar size={9} className="text-[#FF485B]" /> {exp.duration}
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 print:text-base print:mb-2">
                <div className="p-1.5 bg-[#FF485B]/10 rounded-lg">
                  <Award className="text-[#FF485B]" size={16} />
                </div>
                KEY PROJECTS
                <div className="h-px flex-1 bg-slate-100" />
              </h2>
              <div className="grid grid-cols-1 gap-4 print:gap-2">
                {/* Personal Projects */}
                <div className="space-y-3 print:space-y-2">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Code size={12} className="text-[#FF485B]" />
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">PERSONAL PROJECTS</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
                    {personalProjects.map((proj, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm print:break-inside-avoid flex flex-col hover:border-[#FF485B]/30 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{proj.name}</h4>
                            <a href={proj.link} target="_blank" className="text-[10px] text-[#FF485B] hover:underline font-medium block mt-0.5">
                              {proj.link.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
                            </a>
                          </div>
                          <a href={proj.link} target="_blank" className="text-slate-300 hover:text-[#FF485B] transition-colors print:hidden"><ExternalLink size={10} /></a>
                        </div>
                        <p className="text-xs text-slate-600 mb-2 leading-relaxed flex-1">{proj.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.map(tag => (
                            <span key={tag} className="text-[9px] font-bold uppercase bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-slate-500">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
            <p className="text-slate-400 text-xs italic">Designed for excellence. Built with modern technology.</p>
            <button 
              onClick={handlePrint}
              className="bg-primary text-white px-8 py-3 rounded-full font-black uppercase tracking-widest shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all text-xs"
            >
              Download PDF Resume
            </button>
          </div>
        </div>
      </div>

      {/* Page 2 - Professional Projects */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-t-3xl mt-8 overflow-hidden print:shadow-none print:rounded-none print:max-w-none print:w-full print:border-none print:m-0 print-page-break">
        <div className="p-8 print:p-8">
          <div className="flex items-center gap-4 mb-6 print:mb-4">
            <div className="bg-slate-900 text-white p-3 rounded-2xl print:p-2">
              <Briefcase size={24} className="print:w-5 print:h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight leading-none print:text-xl">Professional Projects</h2>
              <p className="text-primary font-bold text-base tracking-widest uppercase mt-1 print:text-xs">In-Office Experience & Contributions</p>
            </div>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-1 gap-4 print:gap-1.5">
            {inOfficeProjects.map((proj, i) => (
              <div key={i} className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 print:break-inside-avoid hover:bg-white transition-all duration-300 print:p-4 print:rounded-lg print:border-slate-200 print:mt-6 first:print:mt-0">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2 print:mb-0.5 print:gap-1">
                  <div>
                    <h4 className="text-lg font-bold mb-0 text-slate-900 print:text-[11px] print:leading-tight">{proj.name}</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest print:text-[10px] print:leading-none">{proj.duration}</p>
                  </div>
                  {proj.client && (
                    <span className="text-xs font-bold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 print:text-[9px] print:px-1.5 print:py-0 print:h-fit">
                      {proj.client}
                    </span>
                  )}
                </div>
                
                <p className="text-base text-slate-600 mb-4 leading-relaxed print:text-sm print:mb-1.5 print:leading-tight">{proj.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
                  {proj.technologies && (
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm print:p-1.5 print:rounded-md print:border-slate-50">
                      <p className="text-xs font-bold text-primary uppercase mb-2 flex items-center gap-2 print:text-[10px] print:mb-0.5">
                        <Cpu size={14} className="print:w-2.5 print:h-2.5" /> Technologies
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium print:text-sm print:leading-tight">{proj.technologies}</p>
                    </div>
                  )}
                  {proj.role && (
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm print:p-1.5 print:rounded-md print:border-slate-50">
                      <p className="text-xs font-bold text-primary uppercase mb-2 flex items-center gap-2 print:text-[10px] print:mb-0.5">
                        <Award size={14} className="print:w-2.5 print:h-2.5" /> Role & Contributions
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1.5 list-none print:text-sm print:space-y-0.5">
                        {Array.isArray(proj.role) 
                          ? proj.role.map((r, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 print:w-1 print:h-1 print:mt-1" />
                                <span className="leading-tight">{r}</span>
                              </li>
                            )) 
                          : <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 print:w-1 print:h-1 print:mt-1" />
                              <span className="leading-tight">{proj.role}</span>
                            </li>
                        }
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
