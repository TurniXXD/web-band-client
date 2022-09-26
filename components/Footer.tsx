import { Element as Section } from 'react-scroll'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Contact.module.css'
import Card from '@components/Card'
import bandzone from 'public/icons/bandzone.png'

export default function Footer() {
	return (
		<Section name="kontakty" className="element">
			<div id="kontakt" className="container mt-20">
				<div className="flex-row flex-center">
					<div id="socials-wrapper" className="footer-desktop flex-col flex-wrap mr-8">
						<div className="flex-row flex-center space-x-8 z-10 relative">
							<Link href="https://www.facebook.com/steepensband">
								<a target="_blank" rel="noreferrer noopener">
									<div className="flex-col">
										<Card>
											<span>
												<span className="typcn typcn-social-facebook-circular text-4xl"></span>
											</span>
										</Card>
									</div>
								</a>
							</Link>
							<Link href="https://www.instagram.com/steepensband">
								<a target="_blank" rel="noreferrer noopener">
									<div className="flex-col">
										<Card>
											<span>
												<span className="typcn typcn-social-instagram-circular text-4xl"></span>
											</span>
										</Card>
									</div>
								</a>
							</Link>
						</div>
						<div className="flex-row flex-center space-x-8 mt-10 z-10 relative">
							<Link href="https://www.youtube.com/channel/UCsr7ezsy-6ui68nSRQXwVAg">
								<a target="_blank" rel="noreferrer noopener">
									<div className="flex-col">
										<Card>
											<span>
												<span className="typcn typcn-social-youtube-circular text-4xl"></span>
											</span>
										</Card>
									</div>
								</a>
							</Link>
							<Link href="https://bandzone.cz/steepens" target="_blank" rel="noreferrer noopener">
								<a target="_blank" rel="noreferrer noopener">
									<div className="flex-col w-[123px]">
										<Card>
											<span className="nav-item mt-3 ">
												<Image src={bandzone} width="30" height="30" alt="hero" />
											</span>
										</Card>
									</div>
								</a>
							</Link>
						</div>
					</div>
					<div className="flex-col">
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
				<div className="footer-mobile flex-row flex-center space-x-8 -mt-12 z-10 relative">
					<div className="flex-col">
						<Link href="https://www.facebook.com/steepensband">
							<a target="_blank" rel="noreferrer noopener">
								<span className="typcn typcn-social-facebook-circular text-4xl"></span>
							</a>
						</Link>
					</div>
					<div className="flex-col">
						<Link href="https://www.instagram.com/steepensband">
							<a target="_blank" rel="noreferrer noopener">
								<span className="typcn typcn-social-instagram-circular text-4xl"></span>
							</a>
						</Link>
					</div>
					<div className="flex-col">
						<Link href="https://www.youtube.com/channel/UCsr7ezsy-6ui68nSRQXwVAg">
							<a target="_blank" rel="noreferrer noopener">
								<span className="typcn typcn-social-youtube-circular text-4xl"></span>
							</a>
						</Link>
					</div>
					<div className="flex-col">
						<Link href="https://bandzone.cz/steepens">
							<a className="md:nav-item mb-1" target="_blank" rel="noreferrer noopener">
								<span className="text-xl mt-8 md:text-4xl md:-mb-2">
									<Image src={bandzone} width="36" height="36" alt="hero" />
								</span>
							</a>
						</Link>
					</div>
				</div>
				<a href="mailto:kontakt@steepensband.eu" className="flex-row flex-center mb-4 mt-6 text-sm sm:text-base">MAIL: kontakt@steepensband.eu</a>
				<div className="flex-row flex-center mb-4 mt-6">&copy; {new Date().getFullYear()} | Steepens</div>
			</div>
		</Section>
	)
}
