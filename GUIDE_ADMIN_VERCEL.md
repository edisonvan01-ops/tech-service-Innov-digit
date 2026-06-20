# Guide rapide - version dynamique

## Liens du site

Lien public à envoyer aux clients :

```text
https://votre-site.vercel.app/
```

Lien admin à garder pour vous seul :

```text
https://votre-site.vercel.app/admin-techinnov
```

L'ancien lien `/admin` fonctionne aussi, mais le lien conseillé est `/admin-techinnov`.

## Ce que permet l'espace admin

Depuis l'admin, vous pouvez ajouter, modifier, masquer, publier ou supprimer :

- les formations ;
- le prix en ligne ;
- le prix en présentiel ;
- la durée ;
- le programme ;
- les articles de blog.

Quand la base de données est connectée, les visiteurs voient automatiquement les contenus publiés sur le lien public.

## Mot de passe admin

Dans Vercel, ajoutez cette variable d'environnement :

```env
ADMIN_PASSWORD=votre-mot-de-passe-secret
```

Ne gardez pas `TECH2026` comme mot de passe final.

Vous pourrez ensuite changer le mot de passe directement dans l'espace admin, si la base de données est connectée.

## Base de données obligatoire

Pour que les changements soient visibles par tout le monde, il faut connecter une base Upstash Redis ou Vercel KV et ajouter ces deux variables dans Vercel :

```env
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

Sans ces deux valeurs, le site peut s'afficher, mais les changements faits dans l'admin ne seront pas fiables en production.

## Fichiers à envoyer sur GitHub

Envoyez tout le contenu du dossier dynamique préparé, sauf :

- `node_modules`
- `.next`
- les anciens dossiers `outputs`
- les anciens fichiers `.zip`

Vercel reconnaîtra automatiquement Next.js et construira le site.
