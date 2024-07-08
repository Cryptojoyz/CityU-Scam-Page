const ContactUs = () => {
  return (
      <div className="flex inset-x-0 bottom-0 mt-6">
        <div className="flex items-center justify-center bg-gray-900 w-screen">
          <p className="text-2xl text-white py-2">
            <a href="mailto:xf.liu@cityu.edu.hk">
              <strong className="font-semibold">Contact: xf.liu@cityu.edu.hk</strong>
            </a>
          </p>
        </div>
      </div>
  )
}

const ContactUszh = () => {
  return (
      <div className="flex inset-x-0 bottom-0 mt-6">
        <div className="flex items-center justify-center bg-gray-900 w-screen">
          <p className="text-2xl text-white py-2">
            <a href="mailto:xf.liu@cityu.edu.hk">
              <strong className="font-semibold">联系我们: xf.liu@cityu.edu.hk</strong>
            </a>
          </p>
        </div>
      </div>
  )
}

export { ContactUs, ContactUszh };