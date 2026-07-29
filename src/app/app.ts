import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteFocusService } from './core/a11y/route-focus.service';
import { LocaleService } from './core/i18n/locale.service';
import { SiteHeader } from './shared/site-header/site-header';
import { SiteFooter } from './shared/site-footer/site-footer';
import { Watermark } from './shared/watermark/watermark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, Watermark],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly routeFocus = inject(RouteFocusService);
  protected readonly locale = inject(LocaleService);

  ngOnInit(): void {
    this.routeFocus.start();
  }
}
