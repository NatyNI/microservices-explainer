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
        authDesc: "Login, revoke, logout și app-uri conectate la auth.",
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
          appsOnAuth: "App-uri pe auth",
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
          separate: "Login separat",
          notConnected: "Neconectat",
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
          appLogout: "Superadmin Logout",
          loginBtn: "Login with theMarketerID",
          connectedApps: {
            title: "Aplicații conectate",
            intro:
              "Aplicații cărora le-ai acordat acces la contul tău. Eliminarea accesului le revocă tokenurile.",
            appName: "Super admin",
            grantedSince: "din 27 august 2026",
            removeAccess: "Elimină accesul",
          },
          connectedAppsDual: {
            saName: "Super admin",
            sendmName: "theMarketer",
            saSince: "din 27 august 2026",
            sendmSince: "din 31 august 2026",
          },
          connectedAppsTriple: {
            partnersName: "Partners",
            partnersSince: "din 31 august 2026",
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
          saConnected: "Conectat în Super Admin",
          saAndAuth: "Conectat în SA · sesiune auth activă",
          saDisconnected: "Deconectat din Super Admin",
          authSessionOnly: "Logat în theMarketerID · neconectat din Super Admin",
          hubAuthOnly: "Logat în theMarketerID · app-urile nu sunt încă conectate",
          hubSaConnected: "Super Admin conectat prin auth · sendm urmează",
          hubBothApps: "SA + theMarketer conectate prin auth",
          hubAllApps: "SA + theMarketer + Partners — prin auth",
          hubOneIdentity: "O identitate theMarketerID · ambele app-uri",
        },
        hub: {
          authLabel: "Auth — centrul login-ului",
          saLabel: "Super Admin",
          sendmLabel: "theMarketer",
          partnersLabel: "Partners",
          partnersOn: "Partners afișat · apasă P din nou pentru ascundere",
          partnersOff: "Partners ascuns",
          partnersConnected: "Conectat prin auth",
          partnersPending: "Nu ești conectat încă",
          step9Title: "Pas 9 — Toate app-urile prin auth",
          step9Text:
            "Super Admin, theMarketer și Partners — toate prin auth. În portal vezi toate app-urile conectate.",
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
        authDesc: "Login, revoke, logout, and apps connected through auth.",
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
          appsOnAuth: "Apps on auth",
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
          separate: "Separate login",
          notConnected: "Not connected",
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
          appLogout: "Superadmin Logout",
          loginBtn: "Login with theMarketerID",
          connectedApps: {
            title: "Connected applications",
            intro:
              "Applications you granted access to your account. Removing access revokes their tokens.",
            appName: "Super admin",
            grantedSince: "since 27 August 2026",
            removeAccess: "Remove access",
          },
          connectedAppsDual: {
            saName: "Super admin",
            sendmName: "theMarketer",
            saSince: "since 27 August 2026",
            sendmSince: "since 31 August 2026",
          },
          connectedAppsTriple: {
            partnersName: "Partners",
            partnersSince: "since 31 August 2026",
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
          saConnected: "Connected to Super Admin",
          saAndAuth: "Connected to SA · auth session active",
          saDisconnected: "Logged out of Super Admin",
          authSessionOnly: "Signed in to theMarketerID · not connected to Super Admin",
          hubAuthOnly: "Signed in to theMarketerID · apps not connected yet",
          hubSaConnected: "Super Admin connected via auth · sendm next",
          hubBothApps: "SA + theMarketer connected via auth",
          hubAllApps: "SA + theMarketer + Partners — via auth",
          hubOneIdentity: "One theMarketerID · both apps",
        },
        hub: {
          authLabel: "Auth — login hub",
          saLabel: "Super Admin",
          sendmLabel: "theMarketer",
          partnersLabel: "Partners",
          partnersOn: "Partners shown · press P again to hide",
          partnersOff: "Partners hidden",
          partnersConnected: "Connected via auth",
          partnersPending: "Not connected yet",
          step9Title: "Step 9 — All apps via auth",
          step9Text:
            "Super Admin, theMarketer, and Partners — all via auth. The portal lists every connected app.",
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
            text: "Ești deconectat din Super Admin. Nu ești conectat în app.",
            meta: "sa.themarketer.com/login",
            appState: "guest",
            statusNote: "saDisconnected",
            showMockup: { emphasis: false },
            nodeActions: {
              app: { text: "Vezi pagina de login", kind: "passive" },
            },
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
            nodeActions: {
              app: { text: "Apeși Login with theMarketerID", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Pas 3 — Login în auth",
            text: "Auth nu găsește sesiune → îți arată login (email/parolă sau Google).",
            meta: "Validare: email + parolă (sau Google OAuth)",
            showLoginNoSessionMockup: true,
            nodeActions: {
              auth: { text: "Te loghezi aici (email, parolă sau Google)", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Înapoi în Super Admin",
            text: "Auth te trimite înapoi. Super Admin te loghează.",
            authState: "in",
            styles: { auth: "connected", app: "connected" },
            showCallbackArrow: true,
            nodeActions: {
              auth: { text: "Confirmă identitatea și te trimite înapoi", kind: "auth", emphasis: true },
              app: { text: "Te primește și te loghează", kind: "sa", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Pas 5 — Logat în Super Admin",
            text: "Ești în Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "Ești conectat aici", kind: "sa", emphasis: true },
              auth: { text: "Sesiune auth activă", kind: "passive" },
            },
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
            meta: "auth.themarketer.com · sesiune activă",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            statusNote: "authSessionOnly",
            showMockup: { emphasis: false },
            nodeActions: {
              auth: { text: "Ești deja logat aici", kind: "auth", emphasis: true },
              app: { text: "Neconectat din SA", kind: "passive" },
            },
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
            nodeActions: {
              app: { text: "Apeși Login with theMarketerID", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Pas 3 — Skip login",
            text: "Auth găsește sesiune activă → sari peste login, direct la authorize.",
            meta: "Validare: sesiunea existentă theMarketerID",
            showLoginWithSessionMockup: true,
            authState: "in",
            styles: { auth: "connected" },
            nodeActions: {
              auth: { text: "Te recunoaște — nu mai cere parola", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Înapoi în Super Admin",
            text: "Auth te trimite înapoi. Super Admin te loghează.",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
            showCallbackArrow: true,
            nodeActions: {
              auth: { text: "Confirmă identitatea și te trimite înapoi", kind: "auth", emphasis: true },
              app: { text: "Te primește și te loghează", kind: "sa", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Pas 5 — Logat în Super Admin",
            text: "Ești în Super Admin — ai sărit peste login pentru că aveai deja sesiune auth.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "Ești conectat aici", kind: "sa", emphasis: true },
              auth: { text: "Te-a recunoscut fără parolă", kind: "passive" },
            },
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
            activeNodes: ["auth", "app"],
            title: "Pas 1 — Conectat",
            text: "Ești logat în Super Admin, cu sesiune activă în theMarketerID.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "Ești conectat aici", kind: "sa", emphasis: true },
              auth: { text: "Sesiune auth activă", kind: "passive" },
            },
          },
          {
            active: "auth",
            title: "Pas 2 — Portal auth",
            text: "Deschizi theMarketerID și vezi lista de app-uri conectate — Super Admin apare acolo.",
            meta: "auth.themarketer.com · Aplicații conectate",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showConnectedAppsMockup: { emphasis: false },
            nodeActions: {
              auth: { text: "Vezi Super Admin în listă", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Pas 3 — Elimini accesul",
            text: "Apeși „Elimină accesul” la Super Admin — spui auth-ului să retragă permisiunea.",
            meta: "auth.themarketer.com · Elimină accesul",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showConnectedAppsMockup: { emphasis: true },
            nodeActions: {
              auth: { text: "Apeși Elimină accesul", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Pas 4 — Auth retrage accesul",
            text: "Auth anulează accesul Super Admin — nu mai poți folosi app-ul cu vechiul login.",
            meta: "auth.themarketer.com · acces revocat",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              auth: { text: "Retrage accesul la SA", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Pas 5 — Auth anunță Super Admin",
            text: "Auth trimite un semnal către Super Admin — app-ul află că accesul a fost retras.",
            meta: "auth → Super Admin · acces revocat",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showEventArrow: true,
            nodeActions: {
              auth: { text: "Trimite notificarea", kind: "auth", emphasis: true },
              app: { text: "Primește vestea", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 6 — Super Admin te deconectează",
            text: "Super Admin te scoate din app — sesiunea locală e ștearsă.",
            meta: "sa.themarketer.com · deconectat din app",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Te deconectează din SA", kind: "sa", emphasis: true },
              auth: { text: "Încă logat în theMarketerID", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 7 — Deconectat din SA",
            text: "Nu mai ai acces la Super Admin. Alte app-uri pot rămâne conectate.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Pagina de login", kind: "passive" },
              auth: { text: "Sesiune theMarketerID încă activă", kind: "auth" },
            },
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
            activeNodes: ["auth", "app"],
            title: "Pas 1 — Conectat",
            text: "Ești logat în Super Admin, cu sesiune activă în theMarketerID.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "Ești conectat aici", kind: "sa", emphasis: true },
              auth: { text: "Sesiune auth activă", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 2 — Click Logout",
            text: "Din meniu apeși Logout — apare o fereastră cu două opțiuni.",
            meta: "Super Admin · Logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            nodeActions: {
              app: { text: "Apeși Logout din meniu", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 3 — Logout doar din SA",
            text: "Alegi Superadmin Logout — te deconectezi doar din Super Admin, nu din toate app-urile.",
            meta: "Super Admin · doar din această app",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            logoutChoice: "app",
            nodeActions: {
              app: { text: "Alegi logout doar aici", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Super Admin te deconectează",
            text: "Super Admin te scoate din app și anunță auth-ul.",
            meta: "sa.themarketer.com · deconectare app",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showApiArrow: true,
            nodeActions: {
              app: { text: "Te deconectează local", kind: "sa", emphasis: true },
              auth: { text: "Primește cererea", kind: "passive" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 5 — Auth confirmă",
            text: "Auth invalidează accesul la Super Admin — dar sesiunea ta theMarketerID rămâne.",
            meta: "auth.themarketer.com · sesiune păstrată",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              auth: { text: "Invalidează accesul la SA", kind: "auth", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 6 — Deconectat din SA",
            text: "Ești deconectat din Super Admin. Alte app-uri rămân logate.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Pagina de login", kind: "passive" },
              auth: { text: "Încă logat în theMarketerID", kind: "auth", emphasis: true },
            },
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
            activeNodes: ["auth", "app"],
            title: "Pas 1 — Conectat",
            text: "Ești logat în Super Admin, cu sesiune activă în theMarketerID.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "Ești conectat aici", kind: "sa", emphasis: true },
              auth: { text: "Sesiune auth activă", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 2 — Click Logout",
            text: "Din meniu apeși Logout — apare o fereastră cu două opțiuni.",
            meta: "Super Admin · Logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            nodeActions: {
              app: { text: "Apeși Logout din meniu", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 3 — Logout complet",
            text: "Alegi Complete Logout — te deconectezi din toate app-urile theMarketer.",
            meta: "Super Admin · din toate app-urile",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            logoutChoice: "complete",
            nodeActions: {
              app: { text: "Alegi logout peste tot", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 4 — Te duce la auth",
            text: "Super Admin te trimite la auth pentru logout complet.",
            meta: "sa.themarketer.com → auth.themarketer.com/logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showRedirectArrow: true,
            nodeActions: {
              app: { text: "Te redirecționează la auth", kind: "sa", emphasis: true },
              auth: { text: "Pregătit să închidă sesiunea", kind: "passive" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Pas 5 — Auth logout",
            text: "Auth distruge sesiunea theMarketerID — ești deconectat de peste tot.",
            meta: "auth.themarketer.com/logout",
            authState: "out",
            appState: "out",
            statusNote: "allApps",
            styles: { app: "revoked", auth: "revoked" },
            nodeActions: {
              auth: { text: "Închide sesiunea theMarketerID", kind: "auth", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Pas 6 — Deconectat peste tot",
            text: "Deconectat din toate app-urile theMarketer.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "out",
            statusNote: "allApps",
            styles: { app: "revoked", auth: "revoked" },
            nodeActions: {
              app: { text: "Pagina de login", kind: "passive" },
              auth: { text: "Deconectat din theMarketerID", kind: "passive" },
            },
          },
        ],
      },
      appsOnAuth: {
        layout: "hub",
        nodes: [
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
          { id: "sa", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "sendm", label: "theMarketer", url: "app.themarketer.com" },
          { id: "partners", label: "Partners", url: "partners.themarketer.com" },
        ],
        steps: [
          {
            active: "auth",
            activeNodes: ["auth"],
            title: "Pas 1 — Logat în theMarketerID",
            text: "Ești conectat doar la auth. Super Admin și sendm încă nu te cunosc — fiecare app se leagă separat, prin auth.",
            meta: "auth.themarketer.com · sesiune theMarketerID activă",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            nodeActions: {
              auth: { text: "Ești logat aici", kind: "auth", emphasis: true },
              sa: { text: "Nu ești conectat încă", kind: "passive" },
              sendm: { text: "Nu ești conectat încă", kind: "passive" },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Pas 2 — Intri în Super Admin",
            text: "Deschizi Super Admin. Vezi pagina de login — nu ești încă conectat în app.",
            meta: "sa.themarketer.com/login",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            mockupNode: "sa",
            showMockup: { emphasis: false },
            nodeActions: {
              sa: { text: "Vezi pagina de login", kind: "passive", emphasis: true },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Pas 3 — SA te trimite la auth",
            text: "Apeși Login with theMarketerID. Super Admin te redirecționează la auth pentru verificare.",
            meta: "sa.themarketer.com → auth.themarketer.com",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            highlightLink: "sa",
            mockupNode: "sa",
            showMockup: { emphasis: true },
            nodeActions: {
              sa: { text: "Apeși Login → auth", kind: "user", emphasis: true },
              auth: { text: "Pregătit să verifice", kind: "auth" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sa"],
            title: "Pas 4 — Auth verifică pentru SA",
            text: "Auth vede că ești deja logat în theMarketerID. Te recunoaște — nu mai cere parola.",
            meta: "auth.themarketer.com · sesiune activă",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            highlightLink: "sa",
            showLoginWithSessionMockup: true,
            nodeActions: {
              auth: { text: "Te recunoaște — sesiune activă", kind: "auth", emphasis: true },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Pas 5 — Conectat în Super Admin",
            text: "Auth te trimite înapoi. Super Admin te loghează — acum ești conectat în SA prin auth.",
            meta: "sa.themarketer.com · conectat prin auth",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sa",
            nodeActions: {
              sa: { text: "Te primește — logat prin auth", kind: "sa", emphasis: true },
              auth: { text: "A confirmat identitatea", kind: "auth" },
            },
          },
          {
            active: "sendm",
            activeNodes: ["auth", "sendm"],
            title: "Pas 6 — Intri în app sendm",
            text: "La fel în sendm: deschizi app-ul, vezi login-ul, apeși Login with theMarketerID.",
            meta: "app.themarketer.com/login",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sendm",
            mockupNode: "sendm",
            showMockup: { emphasis: true },
            nodeActions: {
              sendm: { text: "Apeși Login → auth", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sendm"],
            title: "Pas 7 — Auth verifică pentru sendm",
            text: "Auth verifică din nou sesiunea theMarketerID. Aceeași identitate — fără parolă din nou.",
            meta: "auth.themarketer.com · aceeași sesiune",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sendm",
            showLoginWithSessionMockup: true,
            nodeActions: {
              auth: { text: "Aceeași sesiune — te recunoaște", kind: "auth", emphasis: true },
            },
          },
          {
            active: "sendm",
            activeNodes: ["auth", "sendm"],
            title: "Pas 8 — Conectat în app sendm",
            text: "Auth te trimite înapoi. sendm te loghează — acum ești conectat și aici, prin auth.",
            meta: "app.themarketer.com · conectat prin auth",
            authState: "in",
            statusNote: "hubBothApps",
            styles: { auth: "connected", sa: "connected", sendm: "connected" },
            hubLinks: { sa: true, sendm: true },
            highlightLink: "sendm",
            nodeActions: {
              sendm: { text: "Te primește — logat prin auth", kind: "user", emphasis: true },
              auth: { text: "A confirmat identitatea", kind: "auth" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sa", "sendm"],
            title: "Pas 9 — Ambele app-uri prin auth",
            text: "Ești conectat în SA și sendm — ambele prin auth. În portal vezi ambele app-uri.",
            meta: "auth.themarketer.com · Aplicații conectate",
            authState: "in",
            statusNote: "hubBothApps",
            styles: { auth: "connected", sa: "connected", sendm: "connected" },
            hubLinks: { sa: true, sendm: true },
            showDualConnectedAppsMockup: true,
            nodeActions: {
              auth: { text: "SA + sendm — o identitate", kind: "auth", emphasis: true },
              sa: { text: "Conectat prin auth", kind: "passive" },
              sendm: { text: "Conectat prin auth", kind: "passive" },
            },
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
            text: "You are disconnected from Super Admin. You are not signed in to the app.",
            meta: "sa.themarketer.com/login",
            appState: "guest",
            statusNote: "saDisconnected",
            showMockup: { emphasis: false },
            nodeActions: {
              app: { text: "You see the login page", kind: "passive" },
            },
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
            nodeActions: {
              app: { text: "You click Login with theMarketerID", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Step 3 — Sign in at auth",
            text: "Auth finds no session → shows login (email/password or Google).",
            meta: "Validation: email + password (or Google OAuth)",
            showLoginNoSessionMockup: true,
            nodeActions: {
              auth: { text: "You sign in here (email, password or Google)", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Back to Super Admin",
            text: "Auth sends you back. Super Admin logs you in.",
            authState: "in",
            styles: { auth: "connected", app: "connected" },
            showCallbackArrow: true,
            nodeActions: {
              auth: { text: "Confirms who you are and sends you back", kind: "auth", emphasis: true },
              app: { text: "Welcomes you and logs you in", kind: "sa", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Step 5 — Logged in to Super Admin",
            text: "You are in Super Admin.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "You are connected here", kind: "sa", emphasis: true },
              auth: { text: "Auth session active", kind: "passive" },
            },
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
            meta: "auth.themarketer.com · active session",
            appState: "guest",
            authState: "in",
            styles: { auth: "connected" },
            statusNote: "authSessionOnly",
            showMockup: { emphasis: false },
            nodeActions: {
              auth: { text: "You are already signed in here", kind: "auth", emphasis: true },
              app: { text: "Not connected to SA", kind: "passive" },
            },
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
            nodeActions: {
              app: { text: "You click Login with theMarketerID", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Step 3 — Skip login",
            text: "Auth finds active session → skip login, go straight to authorize.",
            meta: "Validation: existing theMarketerID session",
            showLoginWithSessionMockup: true,
            authState: "in",
            styles: { auth: "connected" },
            nodeActions: {
              auth: { text: "Recognizes you — no password needed", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Back to Super Admin",
            text: "Auth sends you back. Super Admin logs you in.",
            authState: "in",
            styles: { app: "connected", auth: "connected" },
            showCallbackArrow: true,
            nodeActions: {
              auth: { text: "Confirms who you are and sends you back", kind: "auth", emphasis: true },
              app: { text: "Welcomes you and logs you in", kind: "sa", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["app", "auth"],
            title: "Step 5 — Logged in to Super Admin",
            text: "You are in Super Admin — login was skipped because you already had an auth session.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "You are connected here", kind: "sa", emphasis: true },
              auth: { text: "Recognized you without password", kind: "passive" },
            },
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
            activeNodes: ["auth", "app"],
            title: "Step 1 — Connected",
            text: "You are logged in to Super Admin with an active theMarketerID session.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "You are connected here", kind: "sa", emphasis: true },
              auth: { text: "Auth session active", kind: "passive" },
            },
          },
          {
            active: "auth",
            title: "Step 2 — Auth portal",
            text: "You open theMarketerID and see connected apps — Super Admin is in the list.",
            meta: "auth.themarketer.com · Connected applications",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showConnectedAppsMockup: { emphasis: false },
            nodeActions: {
              auth: { text: "Super Admin in the list", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Step 3 — Remove access",
            text: 'You click "Remove access" on Super Admin — telling auth to withdraw permission.',
            meta: "auth.themarketer.com · Remove access",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showConnectedAppsMockup: { emphasis: true },
            nodeActions: {
              auth: { text: "Click Remove access", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Step 4 — Auth revokes access",
            text: "Auth cancels Super Admin access — you can no longer use the app with the old login.",
            meta: "auth.themarketer.com · access revoked",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              auth: { text: "Revokes access to SA", kind: "auth", emphasis: true },
            },
          },
          {
            active: "auth",
            title: "Step 5 — Auth notifies Super Admin",
            text: "Auth sends a signal to Super Admin — the app learns access was withdrawn.",
            meta: "auth → Super Admin · access revoked",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showEventArrow: true,
            nodeActions: {
              auth: { text: "Sends the notification", kind: "auth", emphasis: true },
              app: { text: "Receives the news", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 6 — Super Admin signs you out",
            text: "Super Admin removes you from the app — your local session is cleared.",
            meta: "sa.themarketer.com · signed out of app",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Signs you out of SA", kind: "sa", emphasis: true },
              auth: { text: "Still signed in to theMarketerID", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 7 — Disconnected from SA",
            text: "You no longer have access to Super Admin. Other apps may stay connected.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Login page", kind: "passive" },
              auth: { text: "theMarketerID session still active", kind: "auth" },
            },
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
            activeNodes: ["auth", "app"],
            title: "Step 1 — Connected",
            text: "You are logged in to Super Admin with an active theMarketerID session.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "You are connected here", kind: "sa", emphasis: true },
              auth: { text: "Auth session active", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 2 — Click Logout",
            text: "From the menu you click Logout — a dialog with two options appears.",
            meta: "Super Admin · Logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            nodeActions: {
              app: { text: "Click Logout in the menu", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 3 — Logout from SA only",
            text: "You choose Superadmin Logout — signed out of Super Admin only, not all apps.",
            meta: "Super Admin · this app only",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            logoutChoice: "app",
            nodeActions: {
              app: { text: "Choose logout here only", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Super Admin signs you out",
            text: "Super Admin removes you from the app and notifies auth.",
            meta: "sa.themarketer.com · app sign-out",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showApiArrow: true,
            nodeActions: {
              app: { text: "Signs you out locally", kind: "sa", emphasis: true },
              auth: { text: "Receives the request", kind: "passive" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 5 — Auth confirms",
            text: "Auth invalidates Super Admin access — but your theMarketerID session stays.",
            meta: "auth.themarketer.com · session kept",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              auth: { text: "Invalidates access to SA", kind: "auth", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 6 — Disconnected from SA",
            text: "You are logged out of Super Admin. Other apps stay signed in.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "in",
            statusNote: "otherApps",
            styles: { app: "revoked", auth: "connected" },
            nodeActions: {
              app: { text: "Login page", kind: "passive" },
              auth: { text: "Still signed in to theMarketerID", kind: "auth", emphasis: true },
            },
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
            activeNodes: ["auth", "app"],
            title: "Step 1 — Connected",
            text: "You are logged in to Super Admin with an active theMarketerID session.",
            meta: "sa.themarketer.com",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            nodeActions: {
              app: { text: "You are connected here", kind: "sa", emphasis: true },
              auth: { text: "Auth session active", kind: "passive" },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 2 — Click Logout",
            text: "From the menu you click Logout — a dialog with two options appears.",
            meta: "Super Admin · Logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            nodeActions: {
              app: { text: "Click Logout in the menu", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 3 — Complete logout",
            text: "You choose Complete Logout — signed out of all theMarketer apps.",
            meta: "Super Admin · all apps",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showLogoutModal: true,
            logoutChoice: "complete",
            nodeActions: {
              app: { text: "Choose logout everywhere", kind: "user", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 4 — Redirect to auth",
            text: "Super Admin sends you to auth for complete logout.",
            meta: "sa.themarketer.com → auth.themarketer.com/logout",
            appState: "in",
            authState: "in",
            statusNote: "saAndAuth",
            styles: { app: "connected", auth: "connected" },
            showRedirectArrow: true,
            nodeActions: {
              app: { text: "Redirects you to auth", kind: "sa", emphasis: true },
              auth: { text: "Ready to end session", kind: "passive" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "app"],
            title: "Step 5 — Auth logout",
            text: "Auth destroys your theMarketerID session — you are signed out everywhere.",
            meta: "auth.themarketer.com/logout",
            authState: "out",
            appState: "out",
            statusNote: "allApps",
            styles: { app: "revoked", auth: "revoked" },
            nodeActions: {
              auth: { text: "Ends theMarketerID session", kind: "auth", emphasis: true },
            },
          },
          {
            active: "app",
            activeNodes: ["auth", "app"],
            title: "Step 6 — Disconnected everywhere",
            text: "Logged out of all theMarketer apps.",
            meta: "sa.themarketer.com/login",
            appState: "out",
            authState: "out",
            statusNote: "allApps",
            styles: { app: "revoked", auth: "revoked" },
            nodeActions: {
              app: { text: "Login page", kind: "passive" },
              auth: { text: "Signed out of theMarketerID", kind: "passive" },
            },
          },
        ],
      },
      appsOnAuth: {
        layout: "hub",
        nodes: [
          { id: "auth", label: "Auth", url: "auth.themarketer.com" },
          { id: "sa", label: "Super Admin", url: "sa.themarketer.com" },
          { id: "sendm", label: "theMarketer", url: "app.themarketer.com" },
          { id: "partners", label: "Partners", url: "partners.themarketer.com" },
        ],
        steps: [
          {
            active: "auth",
            activeNodes: ["auth"],
            title: "Step 1 — Signed in to theMarketerID",
            text: "You are connected only to auth. Super Admin and sendm do not know you yet — each app connects separately, through auth.",
            meta: "auth.themarketer.com · active theMarketerID session",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            nodeActions: {
              auth: { text: "You are signed in here", kind: "auth", emphasis: true },
              sa: { text: "Not connected yet", kind: "passive" },
              sendm: { text: "Not connected yet", kind: "passive" },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Step 2 — Open Super Admin",
            text: "You open Super Admin. You see the login page — you are not signed in to the app yet.",
            meta: "sa.themarketer.com/login",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            mockupNode: "sa",
            showMockup: { emphasis: false },
            nodeActions: {
              sa: { text: "You see the login page", kind: "passive", emphasis: true },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Step 3 — SA sends you to auth",
            text: "You click Login with theMarketerID. Super Admin redirects you to auth for verification.",
            meta: "sa.themarketer.com → auth.themarketer.com",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            highlightLink: "sa",
            mockupNode: "sa",
            showMockup: { emphasis: true },
            nodeActions: {
              sa: { text: "Click Login → auth", kind: "user", emphasis: true },
              auth: { text: "Ready to verify", kind: "auth" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sa"],
            title: "Step 4 — Auth verifies for SA",
            text: "Auth sees you are already signed in to theMarketerID. It recognizes you — no password again.",
            meta: "auth.themarketer.com · active session",
            authState: "in",
            statusNote: "hubAuthOnly",
            styles: { auth: "connected", sa: "pending", sendm: "pending" },
            hubLinks: { sa: false, sendm: false },
            highlightLink: "sa",
            showLoginWithSessionMockup: true,
            nodeActions: {
              auth: { text: "Recognizes you — active session", kind: "auth", emphasis: true },
            },
          },
          {
            active: "sa",
            activeNodes: ["auth", "sa"],
            title: "Step 5 — Connected to Super Admin",
            text: "Auth sends you back. Super Admin logs you in — you are now connected to SA via auth.",
            meta: "sa.themarketer.com · connected via auth",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sa",
            nodeActions: {
              sa: { text: "Welcomes you — signed in via auth", kind: "sa", emphasis: true },
              auth: { text: "Identity confirmed", kind: "auth" },
            },
          },
          {
            active: "sendm",
            activeNodes: ["auth", "sendm"],
            title: "Step 6 — Open app sendm",
            text: "Same in sendm: open the app, see login, click Login with theMarketerID.",
            meta: "app.themarketer.com/login",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sendm",
            mockupNode: "sendm",
            showMockup: { emphasis: true },
            nodeActions: {
              sendm: { text: "Click Login → auth", kind: "user", emphasis: true },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sendm"],
            title: "Step 7 — Auth verifies for sendm",
            text: "Auth checks your theMarketerID session again. Same identity — no password again.",
            meta: "auth.themarketer.com · same session",
            authState: "in",
            statusNote: "hubSaConnected",
            styles: { auth: "connected", sa: "connected", sendm: "pending" },
            hubLinks: { sa: true, sendm: false },
            highlightLink: "sendm",
            showLoginWithSessionMockup: true,
            nodeActions: {
              auth: { text: "Same session — recognizes you", kind: "auth", emphasis: true },
            },
          },
          {
            active: "sendm",
            activeNodes: ["auth", "sendm"],
            title: "Step 8 — Connected to app sendm",
            text: "Auth sends you back. sendm logs you in — you are now connected here too, via auth.",
            meta: "app.themarketer.com · connected via auth",
            authState: "in",
            statusNote: "hubBothApps",
            styles: { auth: "connected", sa: "connected", sendm: "connected" },
            hubLinks: { sa: true, sendm: true },
            highlightLink: "sendm",
            nodeActions: {
              sendm: { text: "Welcomes you — signed in via auth", kind: "user", emphasis: true },
              auth: { text: "Identity confirmed", kind: "auth" },
            },
          },
          {
            active: "auth",
            activeNodes: ["auth", "sa", "sendm"],
            title: "Step 9 — Both apps via auth",
            text: "You are connected to SA and sendm — both through auth. The portal lists both apps.",
            meta: "auth.themarketer.com · Connected applications",
            authState: "in",
            statusNote: "hubBothApps",
            styles: { auth: "connected", sa: "connected", sendm: "connected" },
            hubLinks: { sa: true, sendm: true },
            showDualConnectedAppsMockup: true,
            nodeActions: {
              auth: { text: "SA + sendm — one identity", kind: "auth", emphasis: true },
              sa: { text: "Connected via auth", kind: "passive" },
              sendm: { text: "Connected via auth", kind: "passive" },
            },
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
