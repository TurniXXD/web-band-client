import { useEffect } from 'react'
import styles from 'styles/Contact.module.css'

export default function Contact() {
	useEffect(() => {
		var ifr = document.getElementById('JotFormIFrame-220643511302339')
		if (ifr) {
			var src = ifr.src
			var iframeParams = []
			if (window.location.href && window.location.href.indexOf('?') > -1) {
				iframeParams = iframeParams.concat(
					window.location.href.substr(window.location.href.indexOf('?') + 1).split('&')
				)
			}
			if (src && src.indexOf('?') > -1) {
				iframeParams = iframeParams.concat(src.substr(src.indexOf('?') + 1).split('&'))
				src = src.substr(0, src.indexOf('?'))
			}
			iframeParams.push('isIframeEmbed=1')
			ifr.src = src + '?' + iframeParams.join('&')
		}
		window.handleIFrameMessage = function (e) {
			if (typeof e.data === 'object') {
				return
			}
			var args = e.data.split(':'),
				iframe
			if (args.length > 2) {
				iframe = document.getElementById('JotFormIFrame-' + args[args.length - 1])
			} else {
				iframe = document.getElementById('JotFormIFrame')
			}
			if (!iframe) {
				return
			}
			switch (args[0]) {
				case 'scrollIntoView':
					iframe.scrollIntoView()
					break
				case 'setHeight':
					iframe.style.height = args[1] + 'px'
					break
				case 'collapseErrorPage':
					if (iframe.clientHeight > window.innerHeight) {
						iframe.style.height = window.innerHeight + 'px'
					}
					break
				case 'reloadPage':
					window.location.reload()
					break
				case 'loadScript':
					if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
						break
					}
					var src = args[1]
					if (args.length > 3) {
						src = args[1] + ':' + args[2]
					}
					var script = document.createElement('script')
					script.src = src
					script.type = 'text/javascript'
					document.body.appendChild(script)
					break
				case 'exitFullscreen':
					if (window.document.exitFullscreen) window.document.exitFullscreen()
					else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen()
					else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen()
					else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen()
					else if (window.document.msExitFullscreen) window.document.msExitFullscreen()
					break
			}
			var isJotForm = e.origin.indexOf('jotform') > -1 ? true : false
			if (isJotForm && 'contentWindow' in iframe && 'postMessage' in iframe.contentWindow) {
				var urls = { docurl: encodeURIComponent(document.URL), referrer: encodeURIComponent(document.referrer) }
				iframe.contentWindow.postMessage(JSON.stringify({ type: 'urls', value: urls }), '*')
			}
		}
		window.isPermitted = function (originUrl, whitelisted_domains) {
			var url = document.createElement('a')
			url.href = originUrl
			var hostname = url.hostname
			var result = false
			if (typeof hostname !== 'undefined') {
				whitelisted_domains.forEach(function (element) {
					if (hostname.slice(-1 * element.length - 1) === '.'.concat(element) || hostname === element) {
						result = true
					}
				})
				return result
			}
		}
		if (window.addEventListener) {
			window.addEventListener('message', handleIFrameMessage, false)
		} else if (window.attachEvent) {
			window.attachEvent('onmessage', handleIFrameMessage)
		}
	}, [])

	return (
		<div id="kontakt" className="content container">
			<h1>kontakt</h1>
			<div className="flex-row">
				<div id="socials-wrapper" className="flex-col">
					<div className="flex-row">
						<div className="flex-col"></div>
						<div className="flex-col"></div>
					</div>
					<div className="flex-row">
						<div className="flex-col"></div>
						<div className="flex-col"></div>
					</div>
				</div>
				<div className="flex-col">
					<div className="flex-row">
						<iframe
							id="JotFormIFrame-220643511302339"
							title="Blue Sky Contact Form"
							// onLoad="window.parent.scrollTo(0,0)"
							allowTransparency="true"
							allowFullScreen="true"
							allow="geolocation; microphone; camera"
							src="https://form.jotform.com/220643511302339"
							frameBorder="0"
							style={{ minWidth: '100%', height: '539px', border: 'none' }}
							scrolling="no"
						/>
					</div>
					<div className="hide-banner"></div>
				</div>
				{/* <div id="form-wrapper" className="flex-col">
					<div className="flex-row">
						<form autocomplete="on">
							<div class="form-inputs row">
								<div class="col-6">
									<div class="form-group">
										<div class="input-icon-wrap">
											<input id="name" type="text" tabindex="1" placeholder="Celé jméno" autocomplete="name" />
											<span class="typcn typcn-user-outline"></span>
										</div>
									</div>
									<div class="form-group">
										<div class="input-icon-wrap">
											<input id="username" type="text" tabindex="1" />
											<span class="typcn typcn-user-outline"></span>
										</div>
									</div>
									<div class="form-group">
										<div class="input-icon-wrap">
											<input id="email" type="text" tabindex="2" placeholder="Email" autocomplete="email" />
											<span class="typcn typcn-mail"></span>
										</div>
									</div>
									<div class="form-group">
										<label for="phone">Vaše telefonní číslo</label>
										<div class="input-icon-wrap">
											<input id="phone" type="text" tabindex="3" placeholder="Telefon" autocomplete="tel" />
											<span class="typcn typcn-phone-outline"></span>
										</div>
									</div>
								</div>
								<div class="col-6">
									<div class="form-group txtarea-cont">
										<textarea id="msg" tabindex="4" maxlength="5000" placeholder="Zpráva"></textarea>
									</div>
								</div>
							</div>
							<div class="send-button form-group flex-center">
								<input id="submit" class="btn btn-violet" type="button" tabindex="8" value="Odeslat" />
							</div>
							<p class="gdpr-notice">
								Odesláním souhlasíte se{' '}
								<a href="/privacy.html" tabindex="9">
									zpracováním osobních údajů
								</a>
								.
							</p>
						</form>
					</div>
				</div> */}
			</div>
			<div className="flex-row flex-center">&copy; {new Date().getFullYear()} | Steepens</div>
		</div>
	)
}
