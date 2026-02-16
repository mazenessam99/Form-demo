import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Lock, Mail } from "lucide-react"

const LoginForm = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">

        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-primary">Welcome back</h2>
          <p className="text-sm text-gray-500">
            Login to access the validation
          </p>
        </div>

        <form className="space-y-6">
          <FieldGroup>

            <Field>
              <FieldLabel htmlFor="email">
                Email Address
              </FieldLabel>
              <div className="relative flex items-center">
                <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
                  <Mail size={20} />
                </span>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10 py-3 focus:ring-2 focus:ring-black"
                />
              </div>

            </Field>

            <Field>
              <FieldLabel htmlFor="password">
                Password
              </FieldLabel>
              <div className="relative flex items-center">
                <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
                  <Lock size={20}/>
                </span>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password here"
                  className="pl-10 py-3 focus:ring-2 focus:ring-black"
                />
              </div>
            </Field>

          </FieldGroup>

          <Field orientation="horizontal">
            <Button type="submit" className="flex-1 py-5 cursor-pointer border-2 transition-all delay-200 shadow-md hover:bg-white hover:text-primary hover:border-primary ">
              Login
            </Button>
          </Field>
          <p className="text-center font-bold">Don't have an account ? <Link to={'/register'} className="text-primary">Create an account</Link></p>


        </form>
      </div>

    </main>
  )
}

export default LoginForm
