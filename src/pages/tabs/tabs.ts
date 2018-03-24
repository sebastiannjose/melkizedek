/**
 * Component behaves as middleware for the page being rendered.
 * 
 * @author Sebastian Njose <s3bastian06@gmail.com>
 * @license http://www.github.com/sebastiannjose
 */

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { DiscoverPage } from '../discover/discover';

@Component({ templateUrl: 'tabs.html' })

export class TabsPage {

  constructor() {
    // Set defaults
  }

  public tab1Root = HomePage;
  public tab2Root = DiscoverPage;
  public tab3Root = AccountPage;

  /**
   * Method clears active user session.
   */
  public logOut() {
    console.log('Logout from this account.');
  }

}
