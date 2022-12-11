pkgname=cryptomail-electron
pkgver=1.0.0
pkgrel=1
pkgdesc="Cryptomail desktop client"
arch=(any)
url=https://lantern.uber.space/main.html
license=(GPL3)
depends=(electron)
makedepends=(wget)
source=(backend.js package.json cryptomail-electron.sh cryptomail-electron.desktop)
sha512sums=(SKIP SKIP SKIP SKIP)

build() {
	mkdir -p app
	cp backend.js package.json app
	cd app
	wget -N "https://lantern.uber.space/"{main.html,style.css,sodium.js,main.js,Ubuntu-Regular.ttf,Ubuntu-Bold.ttf,UbuntuMono-Regular.ttf}
}

package() {
	mkdir -p "$pkgdir"/usr/{bin,lib,share/applications}/

	cp -r "$srcdir"/app "$pkgdir"/usr/lib/"$pkgname"

	install -Dm755 "$srcdir"/cryptomail-electron.sh "$pkgdir"/usr/bin/"$pkgname"
	install -Dm755 "$srcdir"/cryptomail-electron.desktop "$pkgdir"/usr/share/applications/

}
