"use client"

import { useSession } from "@node_modules/next-auth/react"
import { useRouter } from "@node_modules/next/navigation"
import React, { useState } from "react"
import Form from "@components/Form"
const CreatePrompt = () => {
  const [submitting, setSubmitting] = useSession(false);
  const [post, setPost]=useState({
    prompt:'',
    tag:'',
  });

  const createPrompt=async((e) => {

  })


  return (<Form
  type="Create"
  post={post}
  setPost={setPost}
  submitting={submitting}
  handleSubmit={createPrompt}
  />
  )
}

export default CreatePrompt;
