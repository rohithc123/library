import { useToasts } from 'react-toast-notifications'

export const ToastDemo = () => {
  const { addToast } = useToasts()
  return (
    <Button onClick={() => addToast("Enter valid input", {
      appearance: 'success',
      autoDismiss: true,
    })}>
      Add Toast
    </Button>
  )
}