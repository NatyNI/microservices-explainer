(function (global) {
  "use strict";

  var STORAGE_KEY = "explainer-lang";

  var UI = {
    ro: {
      index: {
        langLabel: "Limba",
        metaDescription: "Schematici interactive pentru microserviciile theMarketer.",
        title: "Microservices Explainer — theMarketer",
        heroTitle: "Schematici interactive<br />pentru microservicii",
        heroSub:
          "Fluxuri pas-cu-pas pentru echipă — click pe un serviciu ca să deschizi schematica.",
        authDesc: "Login, revoke, logout și migrare parolă la deploy auth.",
        authCta: "Deschide schematica",
        tagLive: "Live",
        tagSoon: "În curând",
        notifDesc: "Trimitere email/SMS, delivery logs, OAuth scopes.",
        trackDesc: "Evenimente, pixeli, integrare cu app.",
        footerSuffix: "theMarketer internal docs",
      },
      auth: {
        langLabel: "Limba",
        metaDescription:
          "Schematică interactivă Auth Service — login browser și revoke acces.",
        title: "Auth Service — schematic interactiv",
        back: "← Toate serviciile",
        present: "Prezentare",
        presentExit: "Ieșire",
        tabs: {
          browser: "Login",
          revoke: "Revoke din SA",
          logoutApp: "Logout app",
          logoutComplete: "Logout complet",
          migrate: "Migrare parolă",
        },
        prev: "Înapoi",
        next: "Următorul pas",
        play: "Auto ▶",
        stop: "Stop ■",
        reset: "Reset",
        share: "Copiază link",
        kbdHint: "navigare",
        stepJump: "Sari la pas:",
        scenarioJump: "Flow-uri login:",
        scenarioNoSession: "Fără sesiune auth",
        scenarioWithSession: "Cu sesiune auth",
        stepBtn: "Pas {n}/{total}",
        stepAria: "Pas {n} din {total}",
        toastCopied: "Link copiat!",
        toastFailed: "Nu s-a putut copia",
        badges: {
          guest: "Neautentificat",
          connected: "Conectat",
          disconnected: "Deconectat",
        },
        arrows: {
          redirect: "redirect →",
          sync: "sync →",
          roles: "roluri →",
          callback: "callback →",
        },
        mockup: {
          logoutTitle: "Logout Confirmation",
          completeLogout: "Complete Logout",
          appLogout: "theMarketer Logout",
          loginBtn: "Login with theMarketerID",
          connectedApps: {
            title: "Aplicații conectate",
            intro:
              "Aplicații cărora le-ai acordat acces la contul tău. Eliminarea accesului le revocă tokenurile.",
            appName: "Super admin",
            grantedSince: "din 27 august 2026",
            removeAccess: "Elimină accesul",
          },
          loginVerify: {
            title: "Bine ai revenit",
            emailLabel: "Email",
            emailValue: "user@themarketer.com",
            passwordLabel: "Parolă",
            passwordValue: "••••••••",
            success: "Email și parolă verificate",
          },
          loginBranch: {
            heading: "Verifică sesiune theMarketerID",
            noSessionTitle: "Fără sesiune auth",
            noSessionDesc: "Trebuie să te autentifici",
            withSessionTitle: "Cu sesiune auth",
            withSessionDesc: "Ești deja logat în theMarketerID",
            googleOr: "sau Google",
            sessionActive: "Sesiune activă",
            skipLogin: "Sari peste login → authorize",
            receives: "Primește: authorization code",
            noPassword: "App-ul NU primește parola",
            codeOut: "→ authorization code",
            authChecks: "Auth verifică sesiunea",
          },
        },
        status: {
          authAlwaysChecks: "Auth verifică sesiunea theMarketerID",
          otherApps: "Deconectat din SA · alte app-uri încă logate",
          allApps: "Deconectat din toate app-urile",
          firstWins: "Parola din auth = parola primului app migrat",
          secondNoPassword: "Al doilea sync: doar roluri, parola neschimbată",
          saConnected: "Conectat în Super Admin",
          saDisconnected: "Deconectat din Super Admin",
        },
        nats: {
          auth: "Auth",
          event: "NATS · UserAccessRevoked",
          sa: "Super Admin",
        },
      },
    },
    en: {
      index: {
        langLabel: "Language",
        metaDescription: "Interactive schematics for theMarketer microservices.",
        title: "Microservices Explainer — theMarketer",
        heroTitle: "Interactive schematics<br />for microservices",
        heroSub:
          "Step-by-step flows for the team — click a service to open its schematic.",
        authDesc: "Login, revoke, logout, and password migration at auth deploy.",
        authCta: "Open schematic",
        tagLive: "Live",
        tagSoon: "Coming soon",
        notifDesc: "Email/SMS delivery, delivery logs, OAuth scopes.",
        trackDesc: "Events, pixels, app integration.",
        footerSuffix: "theMarketer internal docs",
      },
      auth: {
        langLabel: "Language",
        metaDescription:
          "Interactive Auth Service schematic — browser login and access revoke.",
        title: "Auth Service — interactive schematic",
        back: "← All services",
        present: "Presentation",
        presentExit: "Exit",
        tabs: {
          browser: "Login",
          revoke: "Revoke from SA",
          logoutApp: "App logout",
          logoutComplete: "Complete logout",
          migrate: "Password migration",
        },
        prev: "Back",
        next: "Next step",
        play: "Auto ▶",
        stop: "Stop ■",
        reset: "Reset",
        share: "Copy link",
        kbdHint: "navigation",
        stepJump: "Jump to step:",
        scenarioJump: "Login flows:",
        scenarioNoSession: "No auth session",
        scenarioWithSession: "Auth session exists",
        stepBtn: "Step {n}/{total}",
        stepAria: "Step {n} of {total}",
        toastCopied: "Link copied!",
        toastFailed: "Could not copy",
        badges: {
          guest: "Unauthenticated",
          connected: "Connected",
          disconnected: "Disconnected",
        },
        arrows: {
          redirect: "redirect →",
          sync: "sync →",
          roles: "roles →",
          callback: "callback →",
        },
        mockup: {
          logoutTitle: "Logout Confirmation",
          completeLogout: "Complete Logout",
          appLogout: "theMarketer Logout",
          loginBtn: "Login with theMarketerID",
          connectedApps: {
            title: "Connected applications",
            intro:
              "Applications you granted access to your account. Removing access revokes their tokens.",
            appName: "Super admin",
            grantedSince: "since 27 August 2026",
            removeAccess: "Remove access",
          },
          loginVerify: {
            title: "Welcome back",
            emailLabel: "Email",
            emailValue: "user@themarketer.com",
            passwordLabel: "Password",
            passwordValue: "••••••••",
            success: "Email and password verified",
          },
          loginBranch: {
            heading: "Check theMarketerID session",
            noSessionTitle: "No auth session",
            noSessionDesc: "You must sign in",
            withSessionTitle: "Auth session exists",
            withSessionDesc: "Already signed in to theMarketerID",
            googleOr: "or Google",
            sessionActive: "Active session",
            skipLogin: "Skip login → authorize",
            receives: "Receives: authorization code",
            noPassword: "App does NOT receive your password",
            codeOut: "→ authorization code",
            authChecks: "Auth checks session",
          },
        },
        status: {
          authAlwaysChecks: "Auth checks your theMarketerID session",
          otherApps: "Logged out of SA · other apps still logged in",
          allApps: "Logged out of all apps",
          firstWins: "Auth password = first migrated app's password",
          secondNoPassword: "Second sync: roles only, password unchanged",
          saConnected: "Connected to Super Admin",
          saDisconnected: "Logged out of Super Admin",
        },
        nats: {
          auth: "Auth",
          event: "NATS · UserAccessRevoked",
          sa: "Super Admin",
        },
      },
    },
  };

  var FLOWS = {
    ro: {
      browserNoSession: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Pas 1 — Logout din app",
            text: "Ești deconectat din Super Admin. Nu există cookie sm_auth_session.",
            meta: "sa.themarketer.com/login · sesiune app OFF",
            appState: "guest",
            showMockup: { emphasis: false },
          },
          {
            active: "app",
            title: "Pas 2 — Login with theMarketerID",
            text: "Click pe butonul Login with theMarketerID — te duce la auth.",
            meta: "auth.themarketer.com",
            appState: "guest",
            showRedirectArrow: true,
            showMockup: { emphasis: true },
            statusNote: "authAlwaysChecks",
          },
          {
            active: "auth",
            title: "Pas 3 — Login în auth",
            text: "Auth nu găsește sesiune → îți arată login (email/parolă sau Google).",
            meta: "Validare: email + parolă (sau Google OAuth)",
            showLoginNoSessionMockup: true,
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Callback",
            text: "Auth trimite code-ul înapoi. Backend SA ia token-urile; browser primește cookie sm_auth_session.",
            authState: "in",
            styles: { auth: "connected", app: "connected" },
            showCallbackArrow: true,
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Pas 5 — Logat în Super Admin",
            text: "Ești în Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
          },
        ],
      },
      browserWithSession: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Pas 1 — Logout din app",
            text: "Ești deconectat din Super Admin, dar ai sesiune activă theMarketerID pe auth.",
            meta: "SA: sm_auth_session OFF · auth.themarketer.com: sesiune ON",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            showMockup: { emphasis: false },
          },
          {
            active: "app",
            title: "Pas 2 — Login with theMarketerID",
            text: "Click pe butonul Login with theMarketerID — te duce la auth.",
            meta: "auth.themarketer.com",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            showRedirectArrow: true,
            showMockup: { emphasis: true },
            statusNote: "authAlwaysChecks",
          },
          {
            active: "auth",
            title: "Pas 3 — Skip login",
            text: "Auth găsește sesiune activă → sari peste login, direct la authorize.",
            meta: "Validare: sesiunea existentă theMarketerID",
            showLoginWithSessionMockup: true,
            authState: "in",
            styles: { auth: "connected" },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Callback",
            text: "Auth trimite code-ul înapoi. Backend SA ia token-urile; browser primește cookie sm_auth_session.",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
            showCallbackArrow: true,
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Pas 5 — Logat în Super Admin",
            text: "Ești în Super Admin — ai sărit peste login pentru că aveai deja sesiune auth.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
          },
        ],
      },
      revoke: {
        nodes: [
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Pas 1 — Conectat",
            text: "Logat în Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "auth",
            title: "Pas 2 — Portal auth",
            text: "theMarketerID → Aplicații conectate — vezi Super Admin în listă.",
            meta: "auth.themarketer.com · Connected apps",
            appState: "in",
            styles: { app: "connected" },
            showConnectedAppsMockup: { emphasis: false },
          },
          {
            active: "auth",
            title: "Pas 3 — Revoke acces SA",
            text: "Apeși „Elimină accesul” la Super Admin — revoci accesul din SA.",
            meta: "Revoke access · Super Admin",
            appState: "in",
            styles: { app: "connected" },
            showConnectedAppsMockup: { emphasis: true },
          },
          {
            active: "auth",
            title: "Pas 4 — Auth revocă",
            text: "Token-uri revocate.",
            meta: "introspect → active: false",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "auth",
            title: "Pas 5 — Notificare",
            text: "Auth publică eveniment NATS → Super Admin îl primește.",
            meta: "UserAccessRevoked",
            appState: "in",
            styles: { app: "connected" },
            showEventArrow: true,
          },
          {
            active: "app",
            title: "Pas 6 — Super Admin",
            text: "Șterge sesiunile.",
            meta: "RevokeUserAccess",
            appState: "out",
            styles: { app: "revoked" },
          },
          {
            active: "app",
            title: "Pas 7 — Deconectat",
            text: "Nu mai ai acces la Super Admin.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            styles: { app: "revoked" },
          },
        ],
      },
      logoutApp: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Pas 1 — Conectat",
            text: "Ești logat în Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "app",
            title: "Pas 2 — Click Logout",
            text: "Din meniu apeși Logout — apare modalul.",
            meta: "Logout Confirmation",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
          },
          {
            active: "app",
            title: "Pas 3 — theMarketer Logout",
            text: "Alegi theMarketer Logout — doar din această app.",
            meta: "POST /logout · hard: false",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
            logoutChoice: "app",
          },
          {
            active: "app",
            title: "Pas 4 — Super Admin",
            text: "Backend revocă token-ul și șterge cookie-ul local.",
            meta: "sm_auth_session distrus",
            appState: "in",
            styles: { app: "connected" },
            showApiArrow: true,
          },
          {
            active: "auth",
            title: "Pas 5 — Auth",
            text: "Auth primește revokeToken — token invalid.",
            meta: "auth.themarketer.com",
          },
          {
            active: "app",
            title: "Pas 6 — Deconectat din SA",
            text: "Deconectat din Super Admin. Celelalte app-uri rămân logate.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            styles: { app: "revoked" },
          },
        ],
      },
      logoutComplete: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Pas 1 — Conectat",
            text: "Ești logat în Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "app",
            title: "Pas 2 — Click Logout",
            text: "Din meniu apeși Logout — apare modalul.",
            meta: "Logout Confirmation",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
          },
          {
            active: "app",
            title: "Pas 3 — Complete Logout",
            text: "Alegi Complete Logout — din toate app-urile.",
            meta: "POST /logout · hard: true",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
            logoutChoice: "complete",
          },
          {
            active: "app",
            title: "Pas 4 — Super Admin",
            text: "Backend revocă token + returnează logoutUrl.",
            meta: "logoutUrl → auth.themarketer.com/logout",
            appState: "in",
            styles: { app: "connected" },
            showRedirectArrow: true,
          },
          {
            active: "auth",
            title: "Pas 5 — Auth logout",
            text: "Browser pe auth — sesiune theMarketerID distrusă.",
            meta: "auth.themarketer.com/logout",
            authState: "out",
            appState: "out",
            styles: { app: "revoked", auth: "revoked" },
          },
          {
            active: "app",
            title: "Pas 6 — Deconectat peste tot",
            text: "Deconectat din toate app-urile theMarketer.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "out",
            styles: { app: "revoked", auth: "revoked" },
          },
        ],
      },
      migrate: {
        nodes: [
          { id: "sa", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "sendm", label: "App sendm", url: "app.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "sa",
            activeNodes: ["sa", "sendm"],
            title: "Pas 1 — Înainte de auth",
            text: "Același email, dar parole diferite în fiecare app.",
            meta: "SA: parolă A · sendm: parolă B",
            styles: { sa: "connected", sendm: "connected" },
            nodeHints: {
              sa: { text: "Parolă A" },
              sendm: { text: "Parolă B" },
            },
          },
          {
            active: "auth",
            title: "Pas 2 — Deploy auth",
            text: "Echipa rulează migrarea (sync useri către auth).",
            meta: "script auth:sync-…-to-auth-service",
            showSyncArrow: true,
            styles: { sa: "connected", sendm: "connected" },
          },
          {
            active: "auth",
            title: "Pas 3 — Primul sync câștigă",
            text: "Exemplu: Super Admin migrat primul → auth primește Parola A.",
            meta: "Cont nou în auth · password_hashed: true",
            nodeHints: { auth: { text: "Parolă A (din SA)", emphasis: true } },
            styles: { sa: "connected" },
            statusNote: "firstWins",
          },
          {
            active: "sendm",
            title: "Pas 4 — Al doilea sync",
            text: "App sendm sync: se adaugă roluri. Parola din auth NU se schimbă.",
            meta: "existing user → syncRoles only",
            nodeHints: { auth: { text: "Parolă A rămâne" } },
            styles: { auth: "connected" },
            showApiArrow: true,
            statusNote: "secondNoPassword",
          },
          {
            active: "auth",
            title: "Pas 5 — După deploy",
            text: "O singură parolă în auth pentru toate app-urile.",
            meta: "auth.themarketer.com",
          },
        ],
      },
    },
    en: {
      browserNoSession: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Step 1 — Logged out of app",
            text: "You are disconnected from Super Admin. No sm_auth_session cookie.",
            meta: "sa.themarketer.com/login · app session OFF",
            appState: "guest",
            showMockup: { emphasis: false },
          },
          {
            active: "app",
            title: "Step 2 — Login with theMarketerID",
            text: "Click Login with theMarketerID — you go to auth.",
            meta: "auth.themarketer.com",
            appState: "guest",
            showRedirectArrow: true,
            showMockup: { emphasis: true },
            statusNote: "authAlwaysChecks",
          },
          {
            active: "auth",
            title: "Step 3 — Sign in at auth",
            text: "Auth finds no session → shows login (email/password or Google).",
            meta: "Validation: email + password (or Google OAuth)",
            showLoginNoSessionMockup: true,
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Callback",
            text: "Auth sends the code back. SA backend gets tokens; browser gets sm_auth_session cookie.",
            authState: "in",
            styles: { auth: "connected", app: "connected" },
            showCallbackArrow: true,
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Step 5 — Logged in to Super Admin",
            text: "You are in Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
          },
        ],
      },
      browserWithSession: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Step 1 — Logged out of app",
            text: "You are disconnected from Super Admin, but have an active theMarketerID session on auth.",
            meta: "SA: sm_auth_session OFF · auth.themarketer.com: session ON",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            showMockup: { emphasis: false },
          },
          {
            active: "app",
            title: "Step 2 — Login with theMarketerID",
            text: "Click Login with theMarketerID — you go to auth.",
            meta: "auth.themarketer.com",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            showRedirectArrow: true,
            showMockup: { emphasis: true },
            statusNote: "authAlwaysChecks",
          },
          {
            active: "auth",
            title: "Step 3 — Skip login",
            text: "Auth finds active session → skip login, go straight to authorize.",
            meta: "Validation: existing theMarketerID session",
            showLoginWithSessionMockup: true,
            authState: "in",
            styles: { auth: "connected" },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Callback",
            text: "Auth sends the code back. SA backend gets tokens; browser gets sm_auth_session cookie.",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
            showCallbackArrow: true,
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Step 5 — Logged in to Super Admin",
            text: "You are in Super Admin — login was skipped because you already had an auth session.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
          },
        ],
      },
      revoke: {
        nodes: [
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Step 1 — Connected",
            text: "Logged in to Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "auth",
            title: "Step 2 — Auth portal",
            text: "theMarketerID → Connected applications — Super Admin in the list.",
            meta: "auth.themarketer.com · Connected apps",
            appState: "in",
            styles: { app: "connected" },
            showConnectedAppsMockup: { emphasis: false },
          },
          {
            active: "auth",
            title: "Step 3 — Revoke SA access",
            text: 'Click "Remove access" on Super Admin — revoke SA access.',
            meta: "Revoke access · Super Admin",
            appState: "in",
            styles: { app: "connected" },
            showConnectedAppsMockup: { emphasis: true },
          },
          {
            active: "auth",
            title: "Step 4 — Auth revokes",
            text: "Tokens revoked.",
            meta: "introspect → active: false",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "auth",
            title: "Step 5 — Notification",
            text: "Auth publishes NATS event → Super Admin receives it.",
            meta: "UserAccessRevoked",
            appState: "in",
            styles: { app: "connected" },
            showEventArrow: true,
          },
          {
            active: "app",
            title: "Step 6 — Super Admin",
            text: "Clears sessions.",
            meta: "RevokeUserAccess",
            appState: "out",
            styles: { app: "revoked" },
          },
          {
            active: "app",
            title: "Step 7 — Disconnected",
            text: "You no longer have access to Super Admin.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            styles: { app: "revoked" },
          },
        ],
      },
      logoutApp: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Step 1 — Connected",
            text: "You are logged in to Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "app",
            title: "Step 2 — Click Logout",
            text: "From the menu you click Logout — modal appears.",
            meta: "Logout Confirmation",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
          },
          {
            active: "app",
            title: "Step 3 — theMarketer Logout",
            text: "Choose theMarketer Logout — this app only.",
            meta: "POST /logout · hard: false",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
            logoutChoice: "app",
          },
          {
            active: "app",
            title: "Step 4 — Super Admin",
            text: "Backend revokes token and clears local cookie.",
            meta: "sm_auth_session destroyed",
            appState: "in",
            styles: { app: "connected" },
            showApiArrow: true,
          },
          {
            active: "auth",
            title: "Step 5 — Auth",
            text: "Auth receives revokeToken — token invalid.",
            meta: "auth.themarketer.com",
          },
          {
            active: "app",
            title: "Step 6 — Disconnected from SA",
            text: "Logged out of Super Admin. Other apps stay logged in.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            styles: { app: "revoked" },
          },
        ],
      },
      logoutComplete: {
        nodes: [
          { id: "app", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "app",
            title: "Step 1 — Connected",
            text: "You are logged in to Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            styles: { app: "connected" },
          },
          {
            active: "app",
            title: "Step 2 — Click Logout",
            text: "From the menu you click Logout — modal appears.",
            meta: "Logout Confirmation",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
          },
          {
            active: "app",
            title: "Step 3 — Complete Logout",
            text: "Choose Complete Logout — from all apps.",
            meta: "POST /logout · hard: true",
            appState: "in",
            styles: { app: "connected" },
            showLogoutModal: true,
            logoutChoice: "complete",
          },
          {
            active: "app",
            title: "Step 4 — Super Admin",
            text: "Backend revokes token + returns logoutUrl.",
            meta: "logoutUrl → auth.themarketer.com/logout",
            appState: "in",
            styles: { app: "connected" },
            showRedirectArrow: true,
          },
          {
            active: "auth",
            title: "Step 5 — Auth logout",
            text: "Browser on auth — theMarketerID session destroyed.",
            meta: "auth.themarketer.com/logout",
            authState: "out",
            appState: "out",
            styles: { app: "revoked", auth: "revoked" },
          },
          {
            active: "app",
            title: "Step 6 — Disconnected everywhere",
            text: "Logged out of all theMarketer apps.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "out",
            styles: { app: "revoked", auth: "revoked" },
          },
        ],
      },
      migrate: {
        nodes: [
          { id: "sa", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "sendm", label: "App sendm", url: "app.themarketer.com" },
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
        ],
        steps: [
          {
            active: "sa",
            activeNodes: ["sa", "sendm"],
            title: "Step 1 — Before auth",
            text: "Same email, but different passwords in each app.",
            meta: "SA: password A · sendm: password B",
            styles: { sa: "connected", sendm: "connected" },
            nodeHints: {
              sa: { text: "Password A" },
              sendm: { text: "Password B" },
            },
          },
          {
            active: "auth",
            title: "Step 2 — Auth deploy",
            text: "Team runs migration (sync users to auth).",
            meta: "script auth:sync-…-to-auth-service",
            showSyncArrow: true,
            styles: { sa: "connected", sendm: "connected" },
          },
          {
            active: "auth",
            title: "Step 3 — First sync wins",
            text: "Example: Super Admin synced first → auth gets Password A.",
            meta: "New account in auth · password_hashed: true",
            nodeHints: { auth: { text: "Password A (from SA)", emphasis: true } },
            styles: { sa: "connected" },
            statusNote: "firstWins",
          },
          {
            active: "sendm",
            title: "Step 4 — Second sync",
            text: "App sendm sync: roles added. Auth password does NOT change.",
            meta: "existing user → syncRoles only",
            nodeHints: { auth: { text: "Password A stays" } },
            styles: { auth: "connected" },
            showApiArrow: true,
            statusNote: "secondNoPassword",
          },
          {
            active: "auth",
            title: "Step 5 — After deploy",
            text: "One password in auth for all apps.",
            meta: "auth.themarketer.com",
          },
        ],
      },
    },
  };

  function fmt(template, vars) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return vars[key] != null ? String(vars[key]) : "";
    });
  }

  function normalizeLang(lang) {
    return lang === "en" ? "en" : "ro";
  }

  function detectLang() {
    try {
      var params = new URLSearchParams(global.location.search);
      var fromUrl = params.get("lang");
      if (fromUrl) return normalizeLang(fromUrl);
    } catch (e) {
      /* ignore */
    }
    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      if (stored) return normalizeLang(stored);
    } catch (e) {
      /* ignore */
    }
    return "ro";
  }

  var currentLang = detectLang();

  function setLang(lang) {
    currentLang = normalizeLang(lang);
    try {
      global.localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {
      /* ignore */
    }
    global.document.documentElement.lang = currentLang;
  }

  function getLang() {
    return currentLang;
  }

  function ui(page) {
    return UI[currentLang][page] || UI.ro[page];
  }

  function flows() {
    return FLOWS[currentLang] || FLOWS.ro;
  }

  function mountLangSwitch(container, onChange) {
    if (!container) return;
    container.innerHTML =
      '<div class="lang-switch" role="group" aria-label="' +
      (currentLang === "en" ? "Language" : "Limba") +
      '">' +
      '<button type="button" data-lang="ro"' +
      (currentLang === "ro" ? ' class="active" aria-pressed="true"' : ' aria-pressed="false"') +
      ">RO</button>" +
      '<button type="button" data-lang="en"' +
      (currentLang === "en" ? ' class="active" aria-pressed="true"' : ' aria-pressed="false"') +
      ">EN</button>" +
      "</div>";

    container.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = normalizeLang(btn.getAttribute("data-lang"));
        if (next === currentLang) return;
        setLang(next);
        mountLangSwitch(container, onChange);
        if (typeof onChange === "function") onChange(next);
      });
    });
  }

  function applyIndexPage() {
    var copy = ui("index");
    global.document.title = copy.title;
    var meta = global.document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", copy.metaDescription);
    var heroTitle = global.document.getElementById("hero-title");
    if (heroTitle) heroTitle.innerHTML = copy.heroTitle;
    var heroSub = global.document.getElementById("hero-sub");
    if (heroSub) heroSub.textContent = copy.heroSub;
    var authDesc = global.document.getElementById("auth-desc");
    if (authDesc) authDesc.textContent = copy.authDesc;
    var authCta = global.document.getElementById("auth-cta");
    if (authCta && authCta.firstChild && authCta.firstChild.nodeType === 3) {
      authCta.firstChild.textContent = copy.authCta + " ";
    }
    var tagLive = global.document.getElementById("tag-live");
    if (tagLive) tagLive.textContent = copy.tagLive;
    var tagsSoon = global.document.querySelectorAll(".tag-soon");
    tagsSoon.forEach(function (el) {
      el.textContent = copy.tagSoon;
    });
    var notifDesc = global.document.getElementById("notif-desc");
    if (notifDesc) notifDesc.textContent = copy.notifDesc;
    var trackDesc = global.document.getElementById("track-desc");
    if (trackDesc) trackDesc.textContent = copy.trackDesc;
    var footerSuffix = global.document.getElementById("footer-suffix");
    if (footerSuffix) footerSuffix.textContent = copy.footerSuffix;
  }

  global.ExplainerI18n = {
    STORAGE_KEY: STORAGE_KEY,
    fmt: fmt,
    getLang: getLang,
    setLang: setLang,
    ui: ui,
    flows: flows,
    mountLangSwitch: mountLangSwitch,
    applyIndexPage: applyIndexPage,
  };

  global.document.documentElement.lang = currentLang;
})(window);
