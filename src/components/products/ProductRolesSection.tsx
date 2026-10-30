"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { ShieldCheck, UserCheck, Key, CheckCircle2 } from "lucide-react";

interface ProductRolesSectionProps {
  product: ProductItem;
}

export default function ProductRolesSection({ product }: ProductRolesSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="ACCESS CONTROL"
        badgeTag="05 USER ROLES"
        title="Role-based permissions tailored for organizational hierarchy."
        description="Granular security boundaries guaranteeing that every user has exact access to their necessary operational tools."
      />

      <div className={`grid grid-cols-1 ${product.roles.length > 3 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
        {product.roles.map((role, idx) => (
          <div
            key={role.title}
            className="p-6 sm:p-7 rounded-3xl bg-nb-white dark:bg-nb-black border border-black/10 dark:border-white/10 shadow-lg space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
                <div className="w-9 h-9 rounded-xl bg-nb-orange/10 dark:bg-nb-orange/20 border border-nb-orange/20 flex items-center justify-center text-nb-orange">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono-tech text-nb-muted">ROLE // 0{idx + 1}</span>
              </div>

              <h4 className="text-lg font-bold text-nb-black dark:text-white tracking-tight">
                {role.title}
              </h4>

              <p className="text-xs sm:text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                {role.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-1.5 pt-2 border-t border-black/5 dark:border-white/10 font-mono-tech text-xs">
                {role.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-nb-graphite/90 dark:text-nb-off-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-nb-orange mt-0.5 shrink-0" />
                    <span className="text-[11px] leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-black/5 dark:border-white/10 text-[10px] font-mono-tech text-nb-muted">
              Security Level: Enterprise RBAC
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

