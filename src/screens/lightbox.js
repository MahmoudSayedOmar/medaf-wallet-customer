var lightBoxDoamin;
(function () {
    window.Lightbox = window.Lightbox || {};
    Lightbox.Checkout = (function () {
        var configure = {};
        function showLightbox() {
            if (this.configure) {

                var urlsrc = GetLightBoxUrl(this.configure, false, false);

                var ifrm = document.createElement("iframe");
                ifrm.id = "Lightbox";
                ifrm.setAttribute("src", urlsrc);
                ifrm.style.zIndex = "999999";
                ifrm.style.display = "block";
                ifrm.style.backgroundColor = "transparent";
                ifrm.style.border = "0px none transparent";
                ifrm.style.overflowX = "hidden"; //hidden
                ifrm.style.overflowY = "auto"; //scroll//auto

                ifrm.style.visibility = "visible";
                ifrm.style.margin = "0px";
                ifrm.style.padding = "0px";
                ifrm.style.position = "fixed";
                ifrm.style.left = "0px";
                ifrm.style.top = "0px;"
                ifrm.style.bottom = "0px";
                ifrm.style.right = "0px";
                ifrm.style.width = "100%";
                ifrm.style.height = "100%";
                document.body.appendChild(ifrm);


                window.addEventListener('message', function (event) {
                    var parser = document.createElement('a');
                    parser.href = lightBoxDoamin;
                    var ua = window.navigator.userAgent;

                    if (event.origin === parser.origin || (parser.origin == undefined && (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0))) {
                        if (event.data != null && event.data != '') {

                            if (event.data.callback == 'errorCallback' && this.Lightbox.Checkout.configure.errorCallback !== undefined) {
                                this.Lightbox.Checkout.configure.errorCallback(event.data.Info);
                            }
                            else if (event.data.callback == 'completeCallback' && this.Lightbox.Checkout.configure.completeCallback !== undefined) {
                                this.Lightbox.Checkout.configure.completeCallback(event.data.paymentInfo);
                            }
                            else if (event.data.callback == 'cancelCallback') {

                                closeLightbox();

                                if (this.Lightbox.Checkout.configure.cancelCallback !== undefined) {
                                    this.Lightbox.Checkout.configure.cancelCallback();
                                }
                            }
                        }
                    }
                }, false);

            } else {
                console.log('no configuration');
            }
        };

        function closeLightbox() {

            var elem = document.getElementById('Lightbox');
            if (elem != null && elem.parentNode != null) {
                elem.parentNode.removeChild(elem);
            }
        };



        function showPaymentPage() {
            if (this.configure) {
                window.location = GetLightBoxUrl(this.configure, true, true);

            } else {
                console.log('no configuration');
            }
        };



        function GetLightBoxUrl(configure, hideCloseButton, isEnableReturnUrl) {

            if (configure) {
                lightBoxDoamin = 'https://grey.paysky.io:9006/PayInterface'; //'http://www.testsite.com:3629/';/https://upg.egyptianbanks.com:3008/PayInterfac';
                var paymentMethodFromLightBox = null;
                var mId = 0;
                var tId = 0;
                var orderId = "";
                var amount = 0;
                var MerchantReference = "";
                var returnUrl = "";
                var configPath = window.Lightbox.Checkout.configure;
                var secureHash = "";
                var trxDateTime = "";

                if (typeof (configPath.paymentMethodFromLightBox) !== 'undefined') {
                    paymentMethodFromLightBox = configPath.paymentMethodFromLightBox;
                }

                if (typeof (configPath.OrderId) !== 'undefined' && configPath.OrderId !== null) {
                    orderId = configPath.OrderId;

                }
                if (typeof (configPath.MID) !== 'undefined' && configPath.MID !== null && !isNaN(configPath.MID)) {
                    mId = configPath.MID;
                }
                if (typeof (configPath.TID) !== 'undefined' && configPath.TID !== null && !isNaN(configPath.TID)) {
                    tId = configPath.TID;
                }

                if (typeof (configPath.AmountTrxn) !== 'undefined' && configPath.AmountTrxn !== null && !isNaN(configPath.AmountTrxn)) {
                    amount = configPath.AmountTrxn / 100;
                }
                if (typeof (configPath.MerchantReference) !== 'undefined') {
                    MerchantReference = configPath.MerchantReference;
                }

                if (typeof (configPath.ReturnUrl) !== 'undefined' && configPath.ReturnUrl !== null) {
                    returnUrl = configPath.ReturnUrl;
                }
                if (typeof (configPath.SecureHash) !== 'undefined') {
                    secureHash = configPath.SecureHash;
                }

                if (typeof (configPath.TrxDateTime) !== 'undefined') {
                    trxDateTime = configPath.TrxDateTime;
                }

                var lightboxHostedQueryString = '/?';
                lightboxHostedQueryString += 'paymentMethodFromLightBox=' + paymentMethodFromLightBox + '&';
                lightboxHostedQueryString += 'OrderID=' + orderId + '&';
                lightboxHostedQueryString += 'MID=' + mId + '&';
                lightboxHostedQueryString += 'MerchantReference=' + MerchantReference + '&';
                lightboxHostedQueryString += 'amount=' + amount + '&';
                lightboxHostedQueryString += 'TID=' + tId + '&';
                lightboxHostedQueryString += 'secureHashAnonymous=' + secureHash + '&';
                lightboxHostedQueryString += 'trxDateTime=' + trxDateTime + '&';

                if (hideCloseButton) {
                    lightboxHostedQueryString += 'hideCloseButton=' + true + '&';
                    if (isEnableReturnUrl) {
                        lightboxHostedQueryString += 'returnUrl=' + returnUrl;
                    }
                }
                return lightBoxDoamin + '/Home/LightboxHostedCheckout' + lightboxHostedQueryString;
            }
            return "";
        }


        function getLightBoxUrl() {
            if (this.configure) {
                return GetLightBoxUrl(this.configure, true, false);

            } else {
                return "";
            }
        };


        // Public interface
        return {
            showLightbox: showLightbox,
            closeLightbox: closeLightbox,
            configure: configure,
            showPaymentPage: showPaymentPage,
            getLightBoxUrl: getLightBoxUrl
        };

    })();
})(window);