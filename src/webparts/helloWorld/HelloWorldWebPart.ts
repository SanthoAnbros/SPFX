import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import * as $ from 'jquery'

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
              <input id="inp" type="text"/>
              <button type="button" id="btnC">Click</button>
            </div>
          </div>
        </div>
      </div>`;
      this._setButtonEventHandlers(); 

    }
    
    
    
    private _setButtonEventHandlers(): void {
       const webPart: HelloWorldWebPart = this;
       this.domElement.querySelector('#btnC').addEventListener('click', () => {
          this._GetListItemsNF();
       });
    }
    
    
    private _GetListItemsNF(): void {
      debugger;
      //alert((<HTMLInputElement>this.domElement.querySelector('#inp')).value)
      alert($('#inp').val());
    }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
