this.onscroll = function()

{

	if( this.XMLHttpRequest ) {

		if (document.documentElement.scrollTop > 221 || self.pageYOffset > 221) {

			$('content').style.position = 'fixed';

			$('content').style.top = '0';

		} else if (document.documentElement.scrollTop < 221 || self.pageYOffset < 221) {

			$('content').style.position = 'absolute';

			$('content').style.top = '221px';

		}

	}

}
