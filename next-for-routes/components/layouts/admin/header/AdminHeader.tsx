import Link from 'next/link'
import React from 'react'

function AdminHeader() {
  return (
    <div>  <nav>
    <ul>
      <li>
        <Link href="/admin">Admin</Link>
      </li>
      <li>
        <Link href="/admin/blogs">Blogs</Link>
      </li>
      <li>
        <Link href="/admin/contacts">Contacts</Link>
      </li>
    </ul>
  </nav></div>
  )
}

export default AdminHeader