/* pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
          <div>
            <div>
              <Alert color="primary">
                Hello Project is strapi-next with Bootstrap
              </Alert>
              &nbsp; <Button color="primary">Hello from nextjs</Button>
            </div>
          </div>
        </Layout>
        
      );
}
export default Home;