import "../../components/page-panel.js";
import "../../components/page-body.js";
import "../../components/action-card.js";
import "../../components/account-widget.js";
import "../../components/text-widget.js";
import "../../components/number-widget.js";
import "../../components/switch-widget.js";
import "../../components/composable_nft/generator/generator.js";

import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement('composable-nft-page')
export default class ComposableNFT extends LitElement {
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }

  constructor(args) {
    super(args);
  }

  render() {
    let content = html`
      <page-body
        title="${this.title}"
        category="${this.category}"
        description="${this.description}"
      >

      <div class="grid grid-cols-2 gap-6">
        <!-- START: SET URI and GET URI !-->
        <div>
          <action-card
            title="Set URI"
            description="Set metadata URI"
            action="setURI"
            method="post"
            fields="authorized newURI">

            <account-widget
              field="authorized"
              label="From Account"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="newURI"
              label="URI: "
              placeholder="Enter the URI here">
            </text-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Get URI"
            description="Get metadata URI"
            action="getURI"
            method="get"
            fields="">
          </action-card>
        </div>
        <!-- END: SET URI and GET URI !-->

        <!-- Start: Mint !-->
        <div>
          <action-card
            title="Mint"
            description="Create NFT or FT"
            action="mint"
            method="post"
            fields="authorized account id amount data">

            <account-widget
              field="authorized"
              label="From Account"
              placeholder="Account address">
            </account-widget>

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>

            <text-widget
              field="amount"
              label="Amount: "
              placeholder="Enter the amount of the NFT/FT here">
            </text-widget>

            <text-widget
              field="data"
              label="Data: "
              placeholder="Enter associated data in hex">
            </text-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Mint Batch"
            description="Create NFT or FT"
            action="mintBatch"
            method="post"
            fields="authorized account id1 id2 id3 amount1 amount2 amount3 data">

            <account-widget
              field="authorized"
              label="From Account"
              placeholder="Account address">
            </account-widget>

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <div class="grid grid-cols-2 gap-6">
              <div class="font-extrabold">ID</div>
              <div class="font-extrabold">Amount</div>
              <div>
                <text-widget
                  field="id1"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount1"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id2"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount2"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id3"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount3"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>
            </div>

            <text-widget
              field="data"
              label="Data: "
              placeholder="Enter associated data in hex">
            </text-widget>
          </action-card>
        </div>
        <!-- End: Mint !-->
  </div>

  <composable-nft-generator></composable-nft-generator>

  <div class="grid grid-cols-2 gap-6">

        <!-- START: Balance !-->
        <div>
          <action-card
            title="Get Balance"
            description="Get balance of an account for an ID"
            action="balanceOf"
            method="get"
            fields="account id">

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Get Balance of Batch"
            description="Get balance of multiple accounts for multiple IDs"
            action="balanceOfBatch"
            method="get"
            fields="account1 account2 account3 id1 id2 id3">

            <account-widget
              field="account1"
              label="Account 1"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id1"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>

            <account-widget
              field="account2"
              label="Account 2"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id2"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>

            <account-widget
              field="account3"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id3"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>
          </action-card>
        </div>
        <!-- End: Balance !-->

        <!-- Start: Proxy !-->
        <div>
          <action-card
            title="Set Approval"
            description="Give approval to a proxy to transfer funds on behalf of the authorizing account"
            action="setApprovalForAll"
            method="post"
            fields="from operator approved">

            <account-widget
              field="from"
              label="Authorizing account"
              placeholder="Select account address">
            </account-widget>

            <account-widget
              field="operator"
              label="Proxy"
              placeholder="Select proxy address">
            </account-widget>

            <switch-widget 
              field="approved" 
              label="Approve" 
              placeholder="">
            </switch-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Check Approval"
            description="Check if the proxy is authorized"
            action="isApprovedForAll"
            method="get"
            fields="account operator">

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <account-widget
              field="operator"
              label="Operator"
              placeholder="Account address">
            </account-widget>
          </action-card>
        </div>
        <!-- End: Proxy !-->

        <!-- Start: Transfer !-->
        <div>
          <action-card
            title="Transfer"
            description="Transfer tokens from one account to another"
            action="safeTransferFrom"
            method="post"
            fields="authorized from to id amount data">

            <account-widget
              field="authorized"
              label="Proxy Account"
              placeholder="Proxy account">
            </account-widget>

            <account-widget
              field="from"
              label="Sender's Account"
              placeholder="Sender's account">
            </account-widget>

            <account-widget
              field="to"
              label="Recipient's Account"
              placeholder="Recipient's account">
            </account-widget>

            <text-widget
              field="id"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>

            <text-widget
              field="amount"
              label="Amount: "
              placeholder="Enter the amount of the NFT/FT here">
            </text-widget>

            <text-widget
              field="data"
              label="Data: "
              placeholder="Enter associated data in hex">
            </text-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Transfer Batch"
            description="Transfer batch of tokens from one account to another"
            action="safeBatchTransferFrom"
            method="post"
            fields="authorized from to id1 id2 id3 amount1 amount2 amount3 data">

            <account-widget
              field="authorized"
              label="Proxy Account"
              placeholder="Proxy account">
            </account-widget>

            <account-widget
              field="from"
              label="Sender's Account"
              placeholder="Sender's account">
            </account-widget>

            <account-widget
              field="to"
              label="Recipient's Account"
              placeholder="Recipient's account">
            </account-widget>

            <div class="grid grid-cols-2 gap-6">
              <div class="font-extrabold">ID</div>
              <div class="font-extrabold">Amount</div>
              <div>
                <text-widget
                  field="id1"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount1"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id2"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount2"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id3"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount3"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>
            </div>

            <text-widget
              field="data"
              label="Data: "
              placeholder="Enter associated data in hex">
            </text-widget>
          </action-card>
        </div>
        <!-- End: Transfer !-->

        <!-- Start: Burn !-->
        <div>
          <action-card
            title="Burn"
            description="Burn NFT or FT"
            action="burn"
            method="post"
            fields="authorized account id amount">

            <account-widget
              field="authorized"
              label="From Account"
              placeholder="Account address">
            </account-widget>

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <text-widget
              field="id"
              label="ID: "
              placeholder="Enter the ID of the NFT/FT here">
            </text-widget>

            <text-widget
              field="amount"
              label="Amount: "
              placeholder="Enter the amount of the NFT/FT here">
            </text-widget>
          </action-card>
        </div>

        <div>
          <action-card
            title="Burn Batch"
            description="Burn a batch of NFT or FT"
            action="burnBatch"
            method="post"
            fields="authorized account id1 id2 id3 amount1 amount2 amount3">

            <account-widget
              field="authorized"
              label="From Account"
              placeholder="Account address">
            </account-widget>

            <account-widget
              field="account"
              label="Account"
              placeholder="Account address">
            </account-widget>

            <div class="grid grid-cols-2 gap-6">
              <div class="font-extrabold">ID</div>
              <div class="font-extrabold">Amount</div>
              <div>
                <text-widget
                  field="id1"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount1"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id2"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount2"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="id3"
                  label="ID: "
                  placeholder="">
                </text-widget>
              </div>

              <div>
                <text-widget
                  field="amount3"
                  label="Amount: "
                  placeholder="">
                </text-widget>
              </div>
            </div>
          </action-card>
        </div>
        <!-- End: Burn !-->
      </div> 



      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;

    return content;
  }
}
