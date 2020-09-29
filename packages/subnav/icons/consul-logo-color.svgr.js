import React from 'react'

function ConsulLogoColor({ title, ...props }) {
  return (
    <div className="g-svg">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAwCAYAAACSXKFTAAAANUlEQVR4Ae3BAQ0AAADCIPunfg43YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOcCebAAAc6U718AAAAASUVORK5CYII="
        className="svg-sizer"
        alt=""
        role="presentation"
      />
      <svg
        width={162}
        height={48}
        viewBox="0 0 162 48"
        fill="none"
        role="img"
        {...props}
      >
        {title ? <title>{title}</title> : null}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M156.666 36.269V10.447l4.592-.64v26.462h-4.592zm-14.791-18.331v12.798c0 .978.414 1.468 1.468 1.468 1.129 0 3.123-.678 4.78-1.544V17.937h4.592V36.27h-3.501l-.452-1.543c-2.296 1.129-5.194 1.92-7.339 1.92-3.048 0-4.14-2.146-4.14-5.42V17.937h4.592zm-14.227 18.707c-1.958 0-4.63-.451-6.323-1.054l.64-3.5c1.542.451 3.575.79 5.458.79 2.032 0 2.333-.451 2.333-1.845 0-1.128-.226-1.693-3.2-2.409-4.478-1.09-5.006-2.22-5.006-5.758 0-3.69 1.619-5.308 6.851-5.308 1.693 0 3.914.226 5.494.639l-.451 3.652c-1.392-.263-3.612-.527-5.043-.527-1.995 0-2.334.452-2.334 1.581 0 1.468.113 1.58 2.597 2.221 5.119 1.355 5.608 2.033 5.608 5.796 0 3.539-1.091 5.722-6.624 5.722zm-14.039-.376V23.47c0-.978-.413-1.467-1.467-1.467-1.129 0-3.124.677-4.78 1.543v12.723h-4.592V17.937h3.5l.452 1.543c2.296-1.129 5.194-1.92 7.339-1.92 3.049 0 4.141 2.147 4.141 5.421V36.27h-4.593zM91.667 21.476c-2.446 0-3.387 1.091-3.387 3.162v4.931c0 2.07.941 3.162 3.387 3.162 2.447 0 3.388-1.092 3.388-3.162v-4.931c0-2.07-.94-3.162-3.388-3.162zm0 15.17c-6.285 0-7.979-3.464-7.979-7.228v-4.63c0-3.764 1.694-7.227 7.98-7.227 6.285 0 7.979 3.463 7.979 7.227v4.63c0 3.764-1.694 7.227-7.98 7.227zM65.774 18.087c0-4.593 2.671-7.265 8.92-7.265 2.333 0 4.742.3 6.812.828l-.527 4.103c-2.032-.376-4.404-.64-6.135-.64-3.274 0-4.328 1.13-4.328 3.802v9.637c0 2.672 1.054 3.801 4.328 3.801 1.731 0 4.103-.263 6.135-.64l.527 4.104c-2.07.526-4.479.827-6.813.827-6.248 0-8.92-2.672-8.92-7.265V18.088z"
          fill={props.color || '#000'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.383 42.776c-5.043 0-9.776-1.95-13.323-5.487-3.552-3.555-5.508-8.274-5.508-13.285 0-5.026 1.954-9.745 5.5-13.282a18.816 18.816 0 0113.331-5.491c4.18 0 8.133 1.332 11.433 3.852l2.88-3.746C34.561 2.181 29.612.512 24.382.512c-6.285 0-12.205 2.438-16.674 6.87C3.265 11.815.818 17.718.818 24.005c0 6.267 2.446 12.168 6.891 16.62 4.445 4.431 10.366 6.87 16.674 6.87 5.225 0 10.172-1.668 14.31-4.822l-2.875-3.75a18.697 18.697 0 01-11.435 3.854zM45.06 14.845a2.34 2.34 0 001.183-1.84 2.172 2.172 0 00-.29-1.353 2.373 2.373 0 00-3.202-.891 2.36 2.36 0 00-.894 3.192 2.374 2.374 0 003.203.892zm-.037 18.283a2.347 2.347 0 00-3.203.88c-.65 1.133-.244 2.545.883 3.192a2.347 2.347 0 003.203-.879c.174-.313.278-.624.29-.96a2.34 2.34 0 00-1.173-2.233zm-.172-12.685a2.338 2.338 0 002.693 1.92 2.323 2.323 0 001.949-2.082c.024-.209 0-.393-.024-.602a2.338 2.338 0 00-2.692-1.92 2.332 2.332 0 00-1.926 2.684zm2.695 5.076c-1.277-.231-2.506.626-2.716 1.898a2.322 2.322 0 001.904 2.707c1.276.231 2.506-.625 2.715-1.897 0-.082.023-.139.046-.21.105-1.19-.743-2.29-1.95-2.498zm-9.257-4.801c.29 1.272 1.567 2.037 2.82 1.747a2.253 2.253 0 001.765-1.898c.057-.289.035-.6-.023-.914-.29-1.272-1.568-2.035-2.821-1.746-1.265.289-2.03 1.561-1.741 2.81zm4.481 7.768c.023-.07.023-.127.046-.186.21-1.19-.546-2.336-1.74-2.65-1.254-.31-2.53.44-2.845 1.69a2.336 2.336 0 001.695 2.835 2.345 2.345 0 002.844-1.689zm-10.923-4.54a2.334 2.334 0 002.345 2.336c1.299 0 2.344-1.04 2.344-2.336a2.334 2.334 0 00-2.344-2.338 2.334 2.334 0 00-2.345 2.338z"
          fill="#CA2171"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.204 23.955c0 2.808 2.276 5.059 5.092 5.059 2.817-.01 5.094-2.27 5.074-5.078 0-2.807-2.276-5.058-5.092-5.058a5.063 5.063 0 00-5.074 5.077z"
          fill="#961D59"
        />
      </svg>
    </div>
  )
}

export default ConsulLogoColor