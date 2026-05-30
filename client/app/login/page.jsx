"use client"
import { useState } from "react"
import { Eye, EyeOff, GraduationCap } from "lucide-react"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md bg-raised rounded-2xl shadow-xl p-10 flex flex-col gap-8">

                {/* Header */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                        <GraduationCap size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
                            Iniciar Sesión
                        </h1>
                        <p className="text-sm text-text-hint">
                            Bienvenido de vuelta a MiProfe
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu@correo.es"
                                autoComplete="email"
                                autoFocus
                                required
                            />
                        </Field>

                        <Field>
                            <div className="flex items-center justify-between">
                                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                                <a href="/forgot-password" className="text-xs text-brand-fg hover:underline underline-offset-4">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    required
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-hint hover:text-text-body transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </Field>
                    </FieldGroup>

                    <Button type="submit" size="lg" className="w-full">
                        Iniciar Sesión
                    </Button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-text-hint">
                    ¿No tienes cuenta?{" "}
                    <a href="/register" className="font-medium text-brand-fg hover:underline underline-offset-4">
                        Regístrate
                    </a>
                </p>

            </div>
        </div>
    )
}
