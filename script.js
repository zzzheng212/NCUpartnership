function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 24.968311, lng: 121.195333 } // 預設中心點
    });

    var locations = [
        {
            id: 'restaurant1',
            title: '藝奇日本料理',
            subLocations: [
                { lat: 25.042323527756302, lng: 121.51208886975535, title: '台北衡陽店' },
                { lat: 24.990718567741236, lng: 121.30854299538406, title: '桃園南華店' },
                { lat: 24.831163101857594, lng: 121.01309144140664, title: '竹北光明店' },
                { lat: 22.995828382872258, lng: 120.23367995601168, title: '台南南紡店' }
            ]
        },
        {
            id: 'restaurant2',
            title: '享鴨',
            subLocations: [
                { lat: 25.08337123472803, lng: 121.29319317322877, title: '桃園同德店' },
                { lat: 25.034071706973933, lng: 121.52701191208229, title: '台北金山南店' },
                { lat: 25.041549986480675, lng: 121.54792562237186, title: '台北忠孝東店' }
            ]
        },
        {
            id: 'restaurant3',
            title: '涮乃葉',
            subLocations: [
                { lat: 25.037115574562485, lng: 121.56812486654995, title: '信義遠百店' },
                { lat: 23.079810705074472, lng: 120.24166082360118, title: '台南遠百成功店' }
            ]
        },
        { id: 'restaurant4', coords: { lat: 25.052124092335085, lng: 121.5479585399683 }, title: '橫浜牛排 微風南京店' },
        { id: 'restaurant5', coords: { lat: 24.96184325386761, lng: 121.22662872740773 }, title: '原燒 中壢元化店' },
        {
            id: 'restaurant6',
            title: '柚子花花青春客家菜',
            subLocations: [
                { lat: 25.023061392372526, lng: 121.2960357287901, title: '桃園店' },
                { lat: 25.005499299074692, lng: 121.20263635838165, title: 'A19環球青埔店' },
                { lat: 24.83061323240136, lng: 121.03172300641192, title: '竹北享平方店' },
                { lat: 25.05835694398406, lng: 121.5202360901603, title: '台北店' }
            ]
        },
        {
            id: 'restaurant7',
            title: '陶板屋',
            subLocations: [
                { lat: 24.964341288060027, lng: 121.22192276249923, title: '中壢中山店' },
                { lat: 24.96997841604051, lng: 121.29906187900747, title: '八德大和店' }
            ]
        },
        {
            id: 'restaurant8',
            title: '王品牛排',
            subLocations: [
                { lat: 25.025806252110055, lng: 121.30318071091851, title: '桃園同德店' },
                { lat: 25.071107801265327, lng: 121.5221557425648, title: '台北中山北店' },
                { lat: 24.83063092889069, lng: 121.01419090702255, title: '新竹光明店' },
                { lat: 22.981603258109068, lng: 120.21101259627386, title: '台南健康店' }

            ]
        },
        { id: 'restaurant9', coords: { lat: 25.041223010234816, lng: 121.1958237148014 }, title: '尬鍋 中壢店' },
        { id: 'restaurant10', coords: { lat: 25.007824230115236, lng: 121.30500704150174 }, title: 'Tasty西堤牛排 桃園南華店' },
        { id: 'restaurant11', coords: { lat: 25.03819989312054, lng: 121.50771842237174 }, title: '匡記涼麵' },
        { id: 'restaurant12', coords: { lat: 24.968614317024272, lng: 121.20142044090241 }, title: '有竹居' },
        {
            id: 'restaurant13',
            title: '天母盛鑫',
            subLocations: [
                { lat: 25.098463546852532, lng: 121.52697272422319, title: '中山店' },
                { lat: 25.085014667257646, lng: 121.55777492604872, title: '麗華店' }
            ]
        },
        { id: 'restaurant14', coords: { lat: 22.988750506906246, lng: 120.17469853088215 }, title: '東東餐飲集團' },
        {
            id: 'restaurant15',
            title: '一番地',
            subLocations: [
                { lat: 25.031135091143582, lng: 121.51874119402282, title: '台北店' },
                { lat: 24.960306040136654, lng: 121.22095249538309, title: '中壢店' },
                { lat: 25.01765790460142, lng: 121.29750883009197, title: '桃園店' }
            ]
        },
        { id: 'restaurant16', coords: { lat: 24.99129801299116, lng: 121.31253219538411 }, title: '海底撈' },
        { id: 'restaurant17', coords: { lat: 24.965264843201506, lng: 121.2168652161046 }, title: '七盞茶' },
        { id: 'restaurant18', coords: { lat: 24.965264843201506, lng: 121.2168652161046 }, title: '鶴茶樓' },
        { id: 'traffic1', coords: { lat: 25.057540056405674, lng: 121.53756816706775 }, title: '中國東方航空' },
        { id: 'traffic2', coords: { lat: 24.968238626139875, lng: 121.19432434232908 }, title: '飛遊網 台灣航空' },
        { id: 'traffic3', coords: { lat: 25.05817927290209, lng: 121.54778479666119 }, title: '國泰航空' },
        { id: 'traffic4', coords: { lat: 25.00908808328985, lng: 121.31058853054088 }, title: '喜鴻(綜合)旅行社' },
        { id: 'traffic5', coords: { lat: 23.561319900000026, lng: 119.59439539634326 }, title: '愛之旅旅行社有限公司' },
        { id: 'products1', coords: { lat: 24.825877640590218, lng: 121.01570823159864 }, title: 'homebox好博家' },
        { id: 'products2', coords: { lat: 25.01501792241476, lng: 121.2152170589606 }, title: '萬國通路 桃園高鐵店' }, // 有超多分店但先建一個示意
        { id: 'products3', coords: { lat: 25.061831221171147, lng: 121.52547113379316 }, title: '愛菲斯居家美學' },
        { id: 'products4', coords: { lat: 25.00791464680665, lng: 121.48383054911483 }, title: '朵法亞生活美學' },
        { id: 'products5', coords: { lat: 24.963459559429634, lng: 121.23257706444043 }, title: '台灣歐德家具股份有限公司' },
        { id: 'products6', coords: { lat: 25.02065581063814, lng: 121.21518044912008 }, title: '新視代影音科技' },
    ];

    var markers = {};
    var infoWindows = {};
    var openInfoWindows = [];

    locations.forEach(function (location) {
        if (location.subLocations) {
            markers[location.id] = [];
            infoWindows[location.id] = [];
            location.subLocations.forEach(function (subLocation) {
                var marker = new google.maps.Marker({
                    position: subLocation,
                    map: map,
                    title: location.title + ' ' + subLocation.title,
                    visible: false
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: location.title + ' ' + subLocation.title
                });

                marker.addListener('click', function () {
                    closeAllInfoWindows();
                    infoWindow.open(map, marker);
                    openInfoWindows.push(infoWindow);
                });

                markers[location.id].push(marker);
                infoWindows[location.id].push(infoWindow);
            });
        } else {
            var marker = new google.maps.Marker({
                position: location.coords,
                map: map,
                title: location.title,
                visible: false
            });

            var infoWindow = new google.maps.InfoWindow({
                content: location.title
            });

            marker.addListener('click', function () {
                closeAllInfoWindows();
                infoWindow.open(map, marker);
                openInfoWindows.push(infoWindow);
            });

            markers[location.id] = [marker];
            infoWindows[location.id] = [infoWindow];
        }

        // Listen for clicks on the menu items
        document.getElementById(location.id).addEventListener('click', function () {
            showMarkers(location.id);
            updateInfoContainer(location.id);
        });
    });

    function showMarkers(locationId) {
        closeAllInfoWindows();

        // 隱藏所有標記
        for (var key in markers) {
            markers[key].forEach(function (marker) {
                marker.setVisible(false);
            });
        }

        // 顯示選中地標的標記並打開對應的信息窗口
        var bounds = new google.maps.LatLngBounds();
        markers[locationId].forEach(function (marker, index) {
            marker.setVisible(true);
            infoWindows[locationId][index].open(map, marker);
            openInfoWindows.push(infoWindows[locationId][index]);
            bounds.extend(marker.getPosition());
        });
        map.fitBounds(bounds);
    }

    function closeAllInfoWindows() {
        while (openInfoWindows.length) {
            openInfoWindows.pop().close();
        }
    }
}


function smoothPanAndZoom(map, destination, zoomLevel) {
    let start = Date.now();
    let duration = 1000; // Duration in milliseconds
    let startLatLng = map.getCenter();
    let endLatLng = destination;
    let deltaLat = (endLatLng.lat() - startLatLng.lat()) / duration;
    let deltaLng = (endLatLng.lng() - startLatLng.lng()) / duration;
    let startZoom = map.getZoom();
    let deltaZoom = (zoomLevel - startZoom) / duration;

    let interval = setInterval(function () {
        let now = Date.now() - start;
        if (now >= duration) {
            map.panTo(endLatLng);
            map.setZoom(zoomLevel);
            clearInterval(interval);
        } else {
            map.panTo({
                lat: startLatLng.lat() + deltaLat * now,
                lng: startLatLng.lng() + deltaLng * now
            });
            map.setZoom(Math.round(startZoom + deltaZoom * now));
        } ``
    }, 10); // Adjust the time interval for smooth animation
}

function updateInfoContainer(locationId) {
    const infoContainer = document.getElementById('info-container');
    let content = '';

    if (locationId === 'restaurant1') {
        content = `
        <h1>藝奇日本料理</h1>
        <p>* 台北衡陽店：台北市中正區衡陽路52號。(近博愛路)。02-23310200</p>
        <p>* 桃園南華：桃園市桃園區南華街60號(南華街‧中華路口)。03-3398680</p>
        <p>* 竹北光明：新竹縣竹北市光明一路368號(近文祿街口)。035-589622</p>
        <p>* 台南南紡店：台南市東區中華東路一段358號 3樓(南紡購物中心A2館)。</p>
        <p>優惠內容：憑校友證消費套餐，即可享有主廚私房菜一份(優惠內容視各分店提供內容為主)。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽藝奇日本料理確認。</p>
        <p>網站連結：<a href="https://www.ikki.com.tw/store_view.php?store=7" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant2') {
        content = `
        <h1>享鴨</h1>
        <p>* 桃園同德店：桃園市桃園區同德五街73號10樓(中茂新天地)。03-3568805</p>
        <p>* 台北金山南店：台北市大安區金山南路二段2號2樓。02-23223789</p>
        <p>* 台北忠孝東店：台北市大安區忠孝東路四段128號2樓。02-27118823</p>
        <p>優惠內容：憑校友證至店內消費，即招待芝麻流沙湯圓一份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽享鴨確認。</p>
        <p>網站連結：<a href="https://www.xiangduck.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant3') {
        content = `
        <h1>涮乃葉</h1>
        <p>*信義遠百店：台北市信義區松仁路58號7樓。02-27230698</p>
        <p>*台南遠百成功店：台南市東區前鋒路210號4樓。06-2091292</p>
        <p>優惠內容：憑校友證，店內用餐享 9.5折優惠。</p>
        <p>優惠期限 : 依各分店為準，使用優惠前請電洽涮乃葉(信義遠百店、台南遠百成功店)確認。</p>
        <p>網站連結：<a href="https://syabuyo.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant4') {
        content = `
        <h1>橫浜牛排</h1>
        <p>* 微風南京店：台北市南京東路三段337號3樓。02-87125575</p>
        <p>優惠內容：憑校友證用餐，全時段95折。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽橫浜牛排(微風南京店)確認。</p>
        <p>網站連結：<a href="https://inline.app/booking/-LmryXQ4hVtyifXQLKkD%3Ainline-live-1/-LmryXU-OKIeX6tvoKJL?language=zh-tw" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant5') {
        content = `
        <h1>原燒</h1>
        <p>* 中壢元化店：桃園市中壢區元化路245號2樓。03-4526458</p>
        <p>優惠內容：憑校友證至原燒中壢元化店內消費套餐，贈送「去骨雞腿」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽原燒（中壢元化店）確認。</p>
        <p>網站連結：<a href="https://www.yakiyan.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant6') {
        content = `
        <h1>柚子花花青春客家菜</h1>
        <p>* 桃園店：桃園市桃園區中正路1270號。03-317-2666</p>
        <p>* A19環球青埔店：桃園市中壢區高鐵南路二段352號5F。03-2871931</p>
        <p>* 竹北享平方店：新竹縣竹北市自強南路36號2樓。03-6685591</p>
        <p>* 台北店：台北市中山區中山北路二段48巷7號B1。02-25218601</p>
        <p>優惠內容：憑校友證至店內消費享菜色九折優惠。凡預約商務合菜消費即享菜色九折優惠。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽柚子花花青春客家菜(桃園店、A19環球青埔店、竹北享平方店、台北店)確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/HakkaHappyFlower/?locale=zh_TW" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant7') {
        content = `
        <h1>陶板屋</h1>
        <p>* 中壢中山店：桃園市中壢區中山路111號2樓。03-2807070</p>
        <p>* 八德大和店：桃園市八德區金和路27號2樓。03-2182928</p>
        <p>優惠內容：持校友證、員工證至餐廳消費，即贈送主廚私房菜一份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽陶板屋(中壢中山店、八德大和店)確認。</p>
        <p>網站連結：<a href="https://www.tokiya.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant8') {
        content = `
        <h1>王品牛排</h1>
        <p>* 桃園同德店：桃園市桃園區同德五街69號3F。03-3561887</p>
        <p>* 台北中山北店：台北市中山區中山北路二段33號2F。02-25361350</p>
        <p>* 新竹光明店：新竹縣竹北市光明一路181號。03-5588669</p>
        <p>* 台南健康店：台南市中西區健康路一段24號。06-2137966</p>
        <p>優惠內容：憑校友證至店內消費套餐，贈送「主廚私房菜」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽王品牛排(桃園同德店、台北中山北店、新竹光明店、台南健康店)確認。</p>
        <p>網站連結：<a href="https://www.wangsteak.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant9') {
        content = `
        <h1>尬鍋</h1>
        <p>* 中壢店：桃園市中壢區元化路327號1樓。03-4220036</p>
        <p>優惠內容：憑校友證至店內消費享好禮五選一（雪花牛肉、梅花豬肉、真香無骨鹽酥雞、鮮切雕魚、蛤蜊）。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽尬鍋(中壢店)確認。</p>
        <p>網站連結：<a href="https://www.godguo.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant10') {
        content = `
        <h1>Tasty 西堤牛排</h1>
        <p>* 桃園南華店：桃園市桃園區南華街66號。03-3395896</p>
        <p>優惠內容：憑校友證消費套餐，每桌每人贈送「無酒精香檳氣泡飲」乙份。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽Tasty 西堤牛排-桃園南華店確認。</p>
        <p>網站連結：<a href="https://www.tasty.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant11') {
        content = `
        <h1>匡記涼麵</h1>
        <p>地址：台北市信義區吳興街8巷3號。02-27324719</p>
        <p>優惠內容：憑校友證消費9折優惠。</p>
        <p>優惠期限：無限制，使用優惠前請電洽匡記涼麵確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/kuangjinoodle/?locale=zh_TW" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant12') {
        content = `
        <h1>友竹居</h1>
        <p>地址：桃園縣中壢市中大路32號。03-4271116</p>
        <p>優惠內容：憑教職員證用餐以現金消費一律9折。</p>
        <p>優惠期限：無限制 ，使用優惠前請電洽友竹居確認。</p>
        <p>網站連結：<a href="https://www.facebook.com/people/%E5%8F%8B%E7%AB%B9%E5%B1%85%E8%8C%B6%E8%97%9D%E9%A4%A8/100064085109802/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'restaurant13') {
        content = `
        <h1>天母盛鑫</h1>
        <p>* 中山店：台北市士林區中山北路五段729號。02-28363588</p>
        <p>* 麗華店：台北市敬業三路22號5樓。02-21753816</p>
        <p>優惠內容：憑校友證消費免加一成服務費。</p>
        <p>優惠期限：無期限，使用優惠前請電洽天母盛鑫(中山店、麗華店)確認。</p>
        <p>網站連結：<a href="https://www.gilleys.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant14') {
        content = `
        <h1>東東餐飲集團</h1>
        <p>地址：台南市安平區華平路152號。06-2951000</p>
        <p>優惠內容：憑校友證至旗下分店消費享消費金額九折優惠。</p>
        <p>優惠期限：依各分店為準，使用優惠前請電洽東東餐飲集團確認。</p>
        <p>網站連結：<a href="http://www.dondom.com.tw/career.php" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant15') {
        content = `
        <h1>一番地</h1>
        <p>* 台北店：台北市中正區和平西路一段80號。02-2368-6600</p>
        <p>* 中壢店：桃園市中壢區中美路二段130號。03-4252588</p>
        <p>* 桃園店：桃園市桃園區大興西路二段86號。03-3019500</p>
        <p>優惠內容：憑校友證消費95折優惠。</p>
        <p>優惠期限：無限期，使用優惠前請電洽一番地(台北店、中壢店、桃園店)確認。</p>
        <p>網站連結：<a href="https://www.sukiyakino1.com.tw/home.html" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant16') {
        content = `
        <h1>海底撈</h1>
        <p>*桃園統領店：桃園市桃園區中正路61號8樓。03-3321608</p>
        <p>優惠內容: 結帳時出示學生證</p>
        <p>（1） 平日（即非假日、星期六及星期日），結帳享全店菜品88折優惠價；</p>
        <p>假日，結帳享全店菜品95折優惠價 (以上均不含鍋底/酒水/醬料等)。</p>
        <p>（2） 不定期推出獨家限定款商品組合優惠價/優惠卷等，所有優惠不得同時使用 。</p>
        <p>優惠期限: 使用優惠前請電洽 海底撈(桃園統領店)確認</p>
        <p>網站連結：<a href="https://inline.app/booking/-LamXb5SAQN7JcJfyRKi:inline-live-2a466/-LcTecEoGkZm2Acfd96G?language=zh-tw" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant17') {
        content = `
        <h1>七盞茶</h1>
        <p>*中壢光明店：桃園市中壢區三光路409號。03-2812355</p>
        <p>優惠內容:憑學生證可享以下優惠</p>
        <p>1.來店消費享95折優惠</p>
        <p>2.外送滿300，享9折優惠</p>
        <p>優惠期限: 使用優惠前請電洽 七盞茶(中壢光明店)確認</p>
        <p>網站連結：<a href="https://www.taiwan7tea.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'restaurant18') {
        content = `
        <h1>鶴茶樓</h1>
        <p>*中壢中山店：桃園市中壢區大同路130號1樓。03-4228900</p>
        <p>優惠內容:憑學生證可享以下優惠</p>
        <p>1.來店或電話自取享9折優惠(可與環保杯、買五送一併用)</p>
        <p>2.外送滿500元享9折，300元享95折</p>
        <p>優惠期限: 使用優惠前請電洽 鶴茶樓(中壢中山店)確認</p>
        <p>網站連結：<a href="https://hechaloutea.com.tw/" target="_blank">前往連結</a></p>
      `;
    } else if (locationId === 'traffic1') {
        content = `
        <h1>中國東方航空</h1>
        <p>* 台北市民生東路三段2號6樓A室。03-4128118。</p>
        <p>優惠內容：
            1.提供在校生/校友/教職員於中國東方航空台灣官網上註冊成為『東方萬里行會員』，並登入會員購買由中國東方航空/上海航空實際承運由台灣始發直航大陸航點或經大陸中轉至大陸地區航線、日本、韓國、歐洲、北美、紐澳、東南亞和南亞中東航線之指定艙等，享有單程或來回機票價格優惠。
            2.促銷代碼：購票流程時使用，如未於付款前進行驗證使用，則無法事後主張享有其優惠。促優惠折扣僅限機票價格。機場稅、燃油附加費用及其他雜項費用不列入折扣範圍。</p>
        <p>優惠內容說明：(1)【購票日期】
            自2024年05月01日起至2025年04月30日止
            (2)【旅行日期】
            2024年05月01日起至2024年09月27日止
            2024年10月08日起至2024年12月31日止
            2025年01月01日起至2025年01月25日止
            2025年02月12日起至2054年04月30日止
            實際訂位均以東航台灣官方網站系統提供為準。
            (3)本優惠專案限使用指定促銷代碼(詳如附件說明)於中國東方航空台灣官網且登入會員後購票適用。</p>
        <p>優惠期限： 2024.05.01-2025.04.30 ，使用優惠前請電洽 中國東方航空確認</p>
        <p>網站連結：<a href="https://tw.ceair.com/hk/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic2') {
        content = `
        <h1>飛遊網 台灣航空</h1>
        <p>* 桃園市中壢區中大路300號(產學中心2樓R226室)。0930138177。</p>
        <p>優惠內容：
            1. 護照(14歲以上) 售價$1800,教職員生優惠$1700
            (未滿14歲) 售價$1400,教職員生優惠$1350
            2. 台胞證 售價$1800,教職員生優惠$1700
            3.口譯機 售價$60/天，教職員生$55/天(租五天起)
            4.上網卡 蝦皮價格，教職員生折$15/張</p>
        <p>優惠期限： 2023年01月02日起至 2024年12月31日 ，使用優惠前請電洽 飛遊網 台灣航空福利社確認</p>
        <p>網站連結：<a href="https://www.plynet.com.tw/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic3') {
        content = `
        <h1>國泰航空</h1>
        <p>* 台北:台北市民生東路三段129號12樓環球商業大樓。02-27152333。</p>
        <p>* 台中:台中市民權路239號8樓A1室</p>
        <p>* 高雄:高雄市中華三路21號6樓</p>
        <p>優惠內容：僅提供學生留學機票網上專屬優惠</p>
        <p>優惠期限 : 2018.04.20-無期限 ，使用優惠前請電洽 國泰航空確認</p>
        <p>網站連結：<a href="https://www.cathaypacific.com/cx/zh_TW.html" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic4') {
        content = `
        <h1>喜鴻(綜合)旅行社</h1>
        <p>* 桃園市經國路9號11樓之2。03-3167121。</p>
        <p>優惠內容：憑校友證
            1.購買喜鴻網頁之旅遊商品,必須透過網路交易機制,刷卡消費可享特約銀行信用卡分期0利率(3期)。
            2.會員透過網路報名國外團體旅遊可享比一般價便宜新台幣1200元、國外自由行比一般價便宜1000元,國內團體旅遊比一般價便宜新台幣300元之優惠,惟國際機票、國內外定房及量身訂做、促銷及特惠團體，不適用上述優惠範圍。
            3.憑企業帳號45002931及密碼4227151即可享優惠</p>
        <p>優惠期限：2017.04.19-永久 ，使用優惠前請電洽 喜鴻(綜合)旅行社確認。</p>
        <p>網站連結：<a>href="https://www.besttour.com.tw/e_web/?utm_source=google&utm_medium=cpc&utm_campaign=21163175911&utm_term=%E5%96%9C%E9%B4%BB%20%E6%97%85%E8%A1%8C%E7%A4%BE&utm_content=695684372371&fc=mk&gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1-yRvvT3PLomZu2LqHuGpMHyqQ5H9B8_A3VO8ptAJSr2y1RAPFPQ6UaAmClEALw_wcB"target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'traffic5') {
        content = `
        <h1>愛之旅旅行社有限公司</h1>
        <p>* 2017.04.19-永久 ，使用優惠前請電洽 喜鴻(綜合)旅行社確認</p>
        <p>優惠內容：
            1.親持中央大學學生證、校友證參加自由行行程或散客湊團,確定成行並完款後,即享有優惠金額200元/人
            2.凡改住6-8人房,即可再享有優惠金額200元/人
            3.總人數滿11人以上(確定成行並完款後),以11人為一單位提供天然珍珠項鍊禮盒給予摸彩
            4.總人數滿33人以上(確定成行並完款後)，另有優惠(須親自洽詢)</p>
        <p>優惠期限：2015.12.01-無期限 ，使用優惠前請電洽 愛之旅</p>
        <p>網站連結：<a href="https://www.go-penghu.com/" target="_blank">按此前往</a></p>
        `;
    } else if (locationId === 'products1') {
        content = `
        <h1>Homebox好博家</h1>
        <p>*新竹縣竹北市縣政二路186號。0800-285-885</p>
        <p>優惠內容：1.全國實體門市購物享95折優惠
            5/23(四)~5/27(一)特約9折◆SUMMER樂一夏！特約企業9折優惠活動即將開跑！
            注意事項：
            A. 不適用冷氣、家電、施工費、廚具櫥櫃、系統家具、特訂窗簾布、磁磚、鐡件商品、TOTO合購套組、衛生紙巾類、出清品等。
            B. 不適用以員工卡、VIP濾芯卡、9折炫涼卡及交易折價券、現折券、其他優惠卡(券)等結帳。
            C. 恕無法享有會員紅利點數。
            D. 不得與其他優惠併用(例：滿千送百、滿萬送千、合購價、現折優惠、買X送Y、安裝優惠、同類商品買第X件享Y折、加購價、免頭期款優惠、滿額贈優惠等)。
        </p>
        <p>優惠期限：即日起-2024.12.31 ，使用優惠前請電洽Homebox好博家確認。</p>
        <p>網站連結：<a href="https://www.homeboxshop.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products2') {
        content = `
        <h1>萬國通路股份有限公司</h1>
        <p>優惠內容：憑校友證
            1.商品9折優惠價
            2.不定期提出獨家限定款商品組合優惠價
        </p>
        <p>優惠期限： 2022.01.01-2024.12.31 ，使用優惠前請電洽 萬國通路股份有限公司確認。</p>
        <p>網站連結：<a href="https://tw.eminent.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products3') {
        content = `
        <h1>愛菲斯居家美學</h1>
        <p>*新北市中和區板南路663號14樓。02-2778-0037。</p>
        <p>優惠內容：可憑校友證，即享有相關特價優惠。
            優惠對象：教職員工、校友、學生
            於朵法亞生活美學官網：
            https://www.darphia.com/
            使用優惠代碼：SVIP2401
            ※全館85折，不與館內其他優惠共用。
            合約期間：自中華民國 113 年 02 月 01 日起至 114 年 02 月 01 日止。
            若雙方無不續約之意思表示，為節省行政作業，可於合約到期日之前，經雙方email聯繫同意續約後，即按本合約書之原條件，自動續約一期；如優惠內容有變更，可以附件形式提供。
        </p>
        <p>優惠期限 : 2023.02.01-2024.02.01 ，使用優惠前請電洽 朵法亞生活美學確認。</p>
        <p>網站連結：<a href="https://www.elvishome.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products4') {
        content = `
        <h1>朵法亞生活美學</h1>
        <p>* 新北市中和區板南路663號14樓。02-2778-0037。</p>
        <p>優惠內容：可憑校友證，即享有相關特價優惠。</p>
        <p>優惠對象：教職員工、校友、學生</p>
            於朵法亞生活美學官網：https://www.darphia.com/ 使用優惠代碼：SVIP2401
            ※全館85折，不與館內其他優惠共用。
            合約期間：自中華民國 113 年 02 月 01 日起至 114 年 02 月 01 日止。
            若雙方無不續約之意思表示，為節省行政作業，可於合約到期日之前，經雙方email聯繫同意續約後，即按本合約書之原條件，自動續約一期；如優惠內容有變更，可以附件形式提供。
        </p>
        <p>優惠期限： 2023.02.01-2024.02.01 ，使用優惠前請電洽 朵法亞生活美學確認</p>
        <p>網站連結：<a href="http://www.darphia.com/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products5') {
        content = `
        <h1>台灣歐德家具股份有限公司</h1>
        <p>*桃園縣中壢市延平路47號。03-4535778。</p>
        <p>優惠內容：1.原有折扣，再享95折。2.來店即贈來店禮。3.不定期促銷活動。4.免費3D圖面設計規劃</p>
        <p>優惠期限：2013.10.04-無期限 ，使用優惠前請電洽 台灣歐德家具股份有限公司確認。</p>
        <p>網站連結：<a href="https://www.order.com.tw/" target="_blank">按此前往</a></p>
      `;
    } else if (locationId === 'products6') {
        content = `
        <h1>新視代影音科技</h1>
        <p>*桃園市大園區領航北路四段12號。03-3811373。</p>
        <p>優惠內容：憑校友證消費 1.享全館市售價九折及每月特惠商品低價回饋。2. Lgy全系列商品十二期零利率</p>
        <p>優惠期限： 2014.01.01-無期限 ，使用優惠前請電洽 新視代影音科技確認。</p>
        <p>網站連結：<a href="http://www.neo-force.com.tw/" target="_blank">按此前往</a></p>
      `;
    }
    infoContainer.innerHTML = content;
}

function smoothPanAndZoom(map, destination, zoomLevel) {
    let start = Date.now();
    let duration = 1000; // Duration in milliseconds
    let startLatLng = map.getCenter();
    let endLatLng = destination;
    let deltaLat = (endLatLng.lat() - startLatLng.lat()) / duration;
    let deltaLng = (endLatLng.lng() - startLatLng.lng()) / duration;
    let startZoom = map.getZoom();
    let deltaZoom = (zoomLevel - startZoom) / duration;

    let interval = setInterval(function () {
        let now = Date.now() - start;
        if (now >= duration) {
            map.panTo(endLatLng);
            map.setZoom(zoomLevel);
            clearInterval(interval);
        } else {
            map.panTo({
                lat: startLatLng.lat() + deltaLat * now,
                lng: startLatLng.lng() + deltaLng * now
            });
            map.setZoom(Math.round(startZoom + deltaZoom * now));
        }
    }, 10); // Adjust the time interval for smooth animation
}

document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll('.menu-item h3');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (content.style.display === "none" || !content.style.display) {
                content.style.display = "block";
                this.classList.add('open');
            } else {
                content.style.display = "none";
                this.classList.remove('open');
            }
        });
    });

    const toggleButton = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('#sidebar');
    const main = document.querySelector('#main');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
        main.classList.toggle('shrink');
    });
});


