import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Small Button" size="small" shape="rounded-sm" />
        {/*
        <br/>
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <br/>
        <Button title="Large Button" size="large" shape="rounded-full" />
        */}
      </div>
    )
  }
  export default Landing