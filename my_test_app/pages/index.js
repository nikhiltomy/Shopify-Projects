import { Heading, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { Component } from "react";

class Index extends Component {
 state={open:false}
  render() {
    return (
      <Page
        fullWidth
        title="Product Selector"
        primaryAction={{
          content: 'Select Products',
          onAction: () => this.setState({open:true})
        }}
      >
       <ResourcePicker
        resourceType='Product'
        open={this.state.open}
        onCancel={()=>this.setState({open:false})}
        onSelection={(resources)=>this.handleselection(resources)}
       />
      </Page>
    )
  }
  handleselection=(resources)=>{
    const idFromResources= resources.selection.map((product)=> product.id)
    this.setState({open:false})
    console.log(idFromResources);
  }

}

export default Index;
