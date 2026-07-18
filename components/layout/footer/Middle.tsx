import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Links from "@/components/ui/Links";

import { contacts, socials, columns } from "@/data/links.json";

export default function Middle() {
  return (
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase">
              Contact Us
            </h3>
            {/* Loop Contacts */}
            <div className="flex flex-col gap-3">
              {contacts.map((contact) => (
                <Links
                  key={contact.label}
                  variant="primary"
                  href={contact.href}
                  icon={
                    <Image
                      src={contact.svgPath}
                      alt={contact.label}
                      width={20}
                      height={20}
                      className="h-4 w-4 invert opacity-60"
                    />
                  }
                >
                  {contact.label}
                </Links>
              ))}
            </div>
            {/* Loop Socials */}
            <div className="flex items-center flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all items-center justify-center"
                  aria-label={social.platform}
                >
                  <Image
                    src={social.svgPath}
                    alt={social.platform}
                    width={20}
                    height={20}
                    className="h-5 w-5 sm:h-7 sm:w-7 invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Loop Columns*/}
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {col.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                {col.links.map((item, itemIndex) => (
                  <Links
                    key={itemIndex}
                    variant="secondary"
                    href={item.href}
                    icon={
                      <MoveRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                    }
                  >
                    {item.label}
                  </Links>
                ))}
              </div>
            </div>
          ))}
        </div>
  )
}
