'use client'
import assets from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

interface Contact {
    id: number;
    name: string;
    avatar: string;
    outGoing: boolean;
    incoming: boolean;
    timestamp: string;
  }

interface CallContactsProps {
    contact: Contact;
    selectedChat: Contact | null;
    setSelectedChat: (contact: Contact) => void;
  }
const Call_Contacts = ({ contact, selectedChat, setSelectedChat }: CallContactsProps) => {
  return (
    <div
      onClick={() => setSelectedChat(contact)}
      className={`flex relative m-2 rounded-xl transition-all items-center p-4 box3 cursor-pointer ${
        selectedChat?.id === contact.id ? "box2" : ""
      }`}
    >
      {selectedChat?.id === contact.id ? <p className="bg-green-400 absolute h-6 w-[2.8px] left-[5px] top-7"></p> :" " } 
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="ml-4 flex-1 relative">
        <h3 className="font-semibold">{contact.name}</h3>
        <p className="text-sm ">{contact.outGoing?"Outgoing":"Incomming"}</p>
        <p className="text-sm absolute right-1 top-1/2 ">{contact.timestamp}</p>
      </div>
    </div>
  )
}

export default Call_Contacts