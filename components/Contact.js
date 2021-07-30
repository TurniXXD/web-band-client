import styles from 'styles/Contact.module.css'

export default function Contact() {
  return (
    <div id="kontakt" className="content container">
      <h1>kontakt</h1>
      <div className="row">
        <div id="socials-wrapper" className="col">
          <div className="row">
            <div className="col">

            </div>
            <div className="col">
              
              </div>
          </div>
          <div className="row">
            <div className="col">

            </div>
            <div className="col">
              
              </div>
          </div>
        </div>
        <div id="form-wrapper" className="col">
          <div className="row">
            <form autocomplete="on">
							<div class="form-inputs row">
								<div class="col-6">
									<div class="form-group">
										<div class="input-icon-wrap">
											<input id="name" type="text" tabindex="1" placeholder="Celé jméno" autocomplete="name" />
											<span class="typcn typcn-user-outline"></span>
										</div>
									</div>
                  {/* honeypot rework */}
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
							<p class="gdpr-notice">Odesláním souhlasíte se <a href="/privacy.html" tabindex="9">zpracováním osobních
									údajů</a>.
							</p>
						</form>
          </div>
        </div>
        <div className="row flex-center">&copy 2021 | Steepens</div>
      </div>
    </div>
  )
}