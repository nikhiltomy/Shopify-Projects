import { EmptyState, Layout, Page} from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { Component } from "react";

class Index extends Component {
  state={open:false}
  render() {
    return (
      <Page>
        <Layout>
          <EmptyState
            heading="Manage your inventory transfers"
            action={{ content: 'Select Products' }}
            secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com' }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <p>Track and receive your incoming inventory from suppliers.</p>
          </EmptyState>
        </Layout>
        <ResourcePicker
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onSelection={(resources) => this.handleselection(resources)}
        />
      </Page>
    )
    
  }
  handleselection = (resources) => {
    const idFromResources = resources.selection.map((product) => product.id)
    this.setState({ open: false })
    console.log(idFromResources);
  }
}

export default Index;
