import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {
  slackUrl: string = 'http://slack.com/bitcoineum';
  twitterUrl: string = 'http://twitter.com/bitcoineum';
  redditUrl: string = 'http://www.reddit.com/r/bitcoineum';
  pdfUrl: string = 'http://www.bitcoineum.com/assets/Bitcoineum.pdf';
  mainPdfUrl: string = 'http://bitcoineum.com/assets/BitcoineumManifesto.pdf';

  constructor() { }

  ngOnInit() { }
}
