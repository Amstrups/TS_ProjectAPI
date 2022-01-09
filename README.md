# API/Backend for TechSkunk(TS)-Project

## Important information

Due to this project only being used as a sample of abilities, I have included a '.env'-file in this reposotory. Please refrain from sharing these sensitive information with people, who it does not concern.

## Requirements

You will need to have installed the official 'node'-image, locally on your desktop for this application to build/run.

You can see the documentation here [https://hub.docker.com/_/node], or simply use the following command:

```bash
docker pull node
```

## Build

**The following docker-commands are all required to be run in the root directory of the application.**

Before the application can run, you will have to build the image by running the following command, replacing "your-preferred-image-name":

```bash
docker build -t your-preferred-image-name .
```

or, if no personalized image-name wanted, run:

```bash
docker-compose build .
```

This command will hijack the name of the directory, and use this in the naming process.

## Run

After building the image, simply run the command:

```bash
docker-compose up -d
```

\*The -d flag is used for detatching the container from your current terminal.

To shutdown the application, run the following command:

```bash
docker-compose down
```

## API-Documentation

**All queries make use of the body, in form of JSON**

#### Getters

**Returns all companies**

```bash
GET /GetCompanies
```

**Returns company with the given ID. Null if none found.**

```bash
GET /GetOwnerByCompanyId
```

Body: {companyId: ID}

**Returns owners of company with the given ID. Null if none found.**

```bash
GET /GetOwnersByCompanyId
```

Body: {companyId: ID}

#### Posts

```bash
POST /CreateCompany
```

Body: {name: CompanyName,
country: CompanyCountry,
owners: [{
name: OwnerName,
socialNumber: OwnerSocialSecurityNumber
}]

}

#### Putters

```bash
PUT /UpdateCompanyById
```

```bash
PUT /AddOwner
```

#### Delets

```bash
PUT /RemoveCompany
```

```bash
PUT /RemoveOwner
```
