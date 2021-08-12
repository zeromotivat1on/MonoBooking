import React, { Component } from 'react'

interface LogoTextIconProps {
  classes?: string,
  fillFirstColor: string,
  fillSecondColor: string
}

export default class LogoTextIcon extends Component<LogoTextIconProps> {
  static displayName = LogoTextIcon.name

  render () {
    return (
      <svg
        className={`${this.props.classes}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 164 51" >
          <path d="M163.5 5C163.5 2.51472 161.485 0.5 159 0.5H69.5V50.5H159C161.485 50.5 163.5 48.4853 163.5 46V5Z" fill={`${this.props.fillFirstColor}`} stroke={`${this.props.fillSecondColor}`}/>
          <rect x="69" y="1" width="1" height="49" fill={`${this.props.fillFirstColor}`}/>
          <path d="M70.6504 32V17.7812H75.2988C76.8418 17.7812 78.0007 18.1003 78.7754 18.7383C79.5566 19.3763 79.9473 20.3203 79.9473 21.5703C79.9473 22.2344 79.7585 22.8236 79.3809 23.3379C79.0033 23.8457 78.4889 24.2396 77.8379 24.5195C78.6061 24.7344 79.2116 25.1445 79.6543 25.75C80.1035 26.349 80.3281 27.0651 80.3281 27.8984C80.3281 29.1745 79.9147 30.1771 79.0879 30.9062C78.2611 31.6354 77.0924 32 75.582 32H70.6504ZM72.5254 25.3496V30.4668H75.6211C76.4935 30.4668 77.1803 30.2422 77.6816 29.793C78.1895 29.3372 78.4434 28.7122 78.4434 27.918C78.4434 26.2057 77.5124 25.3496 75.6504 25.3496H72.5254ZM72.5254 23.8457H75.3574C76.1777 23.8457 76.832 23.6406 77.3203 23.2305C77.8151 22.8203 78.0625 22.2637 78.0625 21.5605C78.0625 20.7793 77.8346 20.2129 77.3789 19.8613C76.9232 19.5033 76.2298 19.3242 75.2988 19.3242H72.5254V23.8457ZM94.0488 25.3496C94.0488 26.7428 93.8145 27.9603 93.3457 29.002C92.877 30.0371 92.2129 30.8281 91.3535 31.375C90.4941 31.9219 89.4915 32.1953 88.3457 32.1953C87.2259 32.1953 86.2331 31.9219 85.3672 31.375C84.5013 30.8216 83.8275 30.0371 83.3457 29.0215C82.8704 27.9993 82.6263 26.8177 82.6133 25.4766V24.4512C82.6133 23.084 82.8509 21.8763 83.3262 20.8281C83.8014 19.7799 84.472 18.9792 85.3379 18.4258C86.2103 17.8659 87.2064 17.5859 88.3262 17.5859C89.4655 17.5859 90.4681 17.8626 91.334 18.416C92.2064 18.9629 92.877 19.7604 93.3457 20.8086C93.8145 21.8503 94.0488 23.0645 94.0488 24.4512V25.3496ZM92.1836 24.4316C92.1836 22.7454 91.8451 21.4531 91.168 20.5547C90.4909 19.6497 89.5436 19.1973 88.3262 19.1973C87.1413 19.1973 86.207 19.6497 85.5234 20.5547C84.8464 21.4531 84.498 22.7031 84.4785 24.3047V25.3496C84.4785 26.9837 84.8203 28.2695 85.5039 29.207C86.194 30.138 87.1413 30.6035 88.3457 30.6035C89.5566 30.6035 90.4941 30.1641 91.1582 29.2852C91.8223 28.3997 92.1641 27.1335 92.1836 25.4863V24.4316ZM107.799 25.3496C107.799 26.7428 107.564 27.9603 107.096 29.002C106.627 30.0371 105.963 30.8281 105.104 31.375C104.244 31.9219 103.242 32.1953 102.096 32.1953C100.976 32.1953 99.9831 31.9219 99.1172 31.375C98.2513 30.8216 97.5775 30.0371 97.0957 29.0215C96.6204 27.9993 96.3763 26.8177 96.3633 25.4766V24.4512C96.3633 23.084 96.6009 21.8763 97.0762 20.8281C97.5514 19.7799 98.222 18.9792 99.0879 18.4258C99.9603 17.8659 100.956 17.5859 102.076 17.5859C103.215 17.5859 104.218 17.8626 105.084 18.416C105.956 18.9629 106.627 19.7604 107.096 20.8086C107.564 21.8503 107.799 23.0645 107.799 24.4512V25.3496ZM105.934 24.4316C105.934 22.7454 105.595 21.4531 104.918 20.5547C104.241 19.6497 103.294 19.1973 102.076 19.1973C100.891 19.1973 99.957 19.6497 99.2734 20.5547C98.5964 21.4531 98.248 22.7031 98.2285 24.3047V25.3496C98.2285 26.9837 98.5703 28.2695 99.2539 29.207C99.944 30.138 100.891 30.6035 102.096 30.6035C103.307 30.6035 104.244 30.1641 104.908 29.2852C105.572 28.3997 105.914 27.1335 105.934 25.4863V24.4316ZM114.225 25.3887L112.486 27.1953V32H110.611V17.7812H112.486V24.8125L118.805 17.7812H121.07L115.475 24.0605L121.51 32H119.264L114.225 25.3887ZM125.162 32H123.287V17.7812H125.162V32ZM139.527 32H137.643L130.484 21.043V32H128.6V17.7812H130.484L137.662 28.7871V17.7812H139.527V32ZM153.355 30.1348C152.874 30.8249 152.2 31.3424 151.334 31.6875C150.475 32.026 149.472 32.1953 148.326 32.1953C147.167 32.1953 146.139 31.9251 145.24 31.3848C144.342 30.8379 143.645 30.0632 143.15 29.0605C142.662 28.0579 142.411 26.8958 142.398 25.5742V24.334C142.398 22.1921 142.896 20.5319 143.893 19.3535C144.895 18.1751 146.301 17.5859 148.111 17.5859C149.596 17.5859 150.79 17.9668 151.695 18.7285C152.6 19.4837 153.154 20.5579 153.355 21.9512H151.48C151.129 20.0697 150.009 19.1289 148.121 19.1289C146.865 19.1289 145.911 19.5716 145.26 20.457C144.615 21.3359 144.29 22.612 144.283 24.2852V25.4473C144.283 27.0423 144.648 28.3118 145.377 29.2559C146.106 30.1934 147.092 30.6621 148.336 30.6621C149.039 30.6621 149.654 30.584 150.182 30.4277C150.709 30.2715 151.145 30.0078 151.49 29.6367V26.4434H148.199V24.9199H153.355V30.1348Z" fill={`${this.props.fillSecondColor}`}/>
          <path d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H68.5V50.5H5C2.51472 50.5 0.5 48.4853 0.5 46V5Z" fill={`${this.props.fillSecondColor}`} stroke={`${this.props.fillSecondColor}`}/>
          <rect x="68" y="1" width="1" height="49" fill={`${this.props.fillSecondColor}`}/>
          <path d="M13.0723 17.7812L17.7207 29.3828L22.3691 17.7812H24.8008V32H22.9258V26.4629L23.1016 20.4863L18.4336 32H16.998L12.3398 20.5156L12.5254 26.4629V32H10.6504V17.7812H13.0723ZM39.0488 25.3496C39.0488 26.7428 38.8145 27.9603 38.3457 29.002C37.877 30.0371 37.2129 30.8281 36.3535 31.375C35.4941 31.9219 34.4915 32.1953 33.3457 32.1953C32.2259 32.1953 31.2331 31.9219 30.3672 31.375C29.5013 30.8216 28.8275 30.0371 28.3457 29.0215C27.8704 27.9993 27.6263 26.8177 27.6133 25.4766V24.4512C27.6133 23.084 27.8509 21.8763 28.3262 20.8281C28.8014 19.7799 29.472 18.9792 30.3379 18.4258C31.2103 17.8659 32.2064 17.5859 33.3262 17.5859C34.4655 17.5859 35.4681 17.8626 36.334 18.416C37.2064 18.9629 37.877 19.7604 38.3457 20.8086C38.8145 21.8503 39.0488 23.0645 39.0488 24.4512V25.3496ZM37.1836 24.4316C37.1836 22.7454 36.8451 21.4531 36.168 20.5547C35.4909 19.6497 34.5436 19.1973 33.3262 19.1973C32.1413 19.1973 31.207 19.6497 30.5234 20.5547C29.8464 21.4531 29.498 22.7031 29.4785 24.3047V25.3496C29.4785 26.9837 29.8203 28.2695 30.5039 29.207C31.194 30.138 32.1413 30.6035 33.3457 30.6035C34.5566 30.6035 35.4941 30.1641 36.1582 29.2852C36.8223 28.3997 37.1641 27.1335 37.1836 25.4863V24.4316ZM52.7891 32H50.9043L43.7461 21.043V32H41.8613V17.7812H43.7461L50.9238 28.7871V17.7812H52.7891V32ZM67.0566 25.3496C67.0566 26.7428 66.8223 27.9603 66.3535 29.002C65.8848 30.0371 65.2207 30.8281 64.3613 31.375C63.502 31.9219 62.4993 32.1953 61.3535 32.1953C60.2337 32.1953 59.2409 31.9219 58.375 31.375C57.5091 30.8216 56.8353 30.0371 56.3535 29.0215C55.8783 27.9993 55.6341 26.8177 55.6211 25.4766V24.4512C55.6211 23.084 55.8587 21.8763 56.334 20.8281C56.8092 19.7799 57.4798 18.9792 58.3457 18.4258C59.2181 17.8659 60.2142 17.5859 61.334 17.5859C62.4733 17.5859 63.4759 17.8626 64.3418 18.416C65.2142 18.9629 65.8848 19.7604 66.3535 20.8086C66.8223 21.8503 67.0566 23.0645 67.0566 24.4512V25.3496ZM65.1914 24.4316C65.1914 22.7454 64.8529 21.4531 64.1758 20.5547C63.4987 19.6497 62.5514 19.1973 61.334 19.1973C60.1491 19.1973 59.2148 19.6497 58.5312 20.5547C57.8542 21.4531 57.5059 22.7031 57.4863 24.3047V25.3496C57.4863 26.9837 57.8281 28.2695 58.5117 29.207C59.2018 30.138 60.1491 30.6035 61.3535 30.6035C62.5645 30.6035 63.502 30.1641 64.166 29.2852C64.8301 28.3997 65.1719 27.1335 65.1914 25.4863V24.4316Z" fill={`${this.props.fillFirstColor}`}/>
      </svg>
    )
  }
}