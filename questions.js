/**
 * @ts-nocheck
 * AWS MCQ Questions Database
 * Each set contains 50 questions with 4 options each
 * Format: { question, options: [], correctAnswer: index, explanation }
 */

const questionSets = {
    1: [
        {
            question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
            options: ["AWS CLI", "AWS API", "AWS SDK", "AWS Management Console"],
            correctAnswer: 3,
            explanation: "The AWS Management Console is a web-based interface for accessing and managing AWS services."
        },
        {
            question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
            options: ["Replacing an existing EC2 instance with a larger, more powerful one", "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application", "Adding more RAM capacity to an EC2 instance", "Adding more EC2 instances of the same size to handle an increase in traffic"],
            correctAnswer: 3,
            explanation: "Horizontal scaling involves adding more instances of the same size rather than increasing the size of existing instances (vertical scaling)."
        },
        {
            question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
            options: ["Amazon Inspector", "AWS CloudTrail", "AWS Trusted Advisor", "EC2 Instance Usage Report"],
            correctAnswer: 1,
            explanation: "AWS CloudTrail logs all API calls and actions taken on AWS resources, allowing you to track who terminated the instances."
        },
        {
            question: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
            options: ["Applying the principle of least privilege to all AWS resources", "Automatically provisioning new resources to meet demand", "All AWS services are considered Global Services, and this design helps customers serve their international users", "Providing compensation to customers if issues occur", "Ability to recover quickly from failures"],
            correctAnswer: 1,
            explanation: "Reliability in AWS includes automatically provisioning resources to meet demand and the ability to recover quickly from failures. (Correct answers: B, E)"
        },
        {
            question: "Which statement is true regarding the AWS Shared Responsibility Model?",
            options: ["Responsibilities vary depending on the services used", "Security of the IaaS services is the responsibility of AWS", "Patching the guest OS is always the responsibility of AWS", "Security of the managed services is the responsibility of the customer"],
            correctAnswer: 0,
            explanation: "In the AWS Shared Responsibility Model, responsibilities vary based on whether you're using IaaS, PaaS, or SaaS services."
        },
        {
            question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
            options: ["The Reserved Instance discounts can only be shared with the master account", "All accounts can receive the hourly cost benefit of the Reserved Instances", "The purchased instances will have better performance than On-demand instances", "There are no cost benefits from using consolidated billing; It is for informational purposes only"],
            correctAnswer: 1,
            explanation: "With consolidated billing, all linked accounts can benefit from Reserved Instance discounts purchased by any account in the organization."
        },
        {
            question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
            options: ["Deploy the application across multiple Availability Zones and Edge locations", "Deploy the application across multiple Availability Zones and subnets", "Deploy the application across multiple Regions and Availability Zones", "Deploy the application across multiple VPC's and subnets"],
            correctAnswer: 2,
            explanation: "Deploying across multiple Regions and Availability Zones provides the highest level of availability and disaster recovery."
        },
        {
            question: "What does AWS Snowball provide? (Choose TWO)",
            options: ["Built-in computing capabilities that allow customers to process data locally", "A catalog of third-party software solutions that customers need to build solutions and run their businesses", "A hybrid cloud storage between on-premises environments and the AWS Cloud", "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS", "Secure transfer of large amounts of data into and out of the AWS"],
            correctAnswer: 0,
            explanation: "AWS Snowball provides built-in computing capabilities and secure transfer of large amounts of data. (Correct answers: A, E)"
        },
        {
            question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
            options: ["AWS Health Dashboard", "AWS Support Concierge", "AWS Customer Service", "AWS Operations Support"],
            correctAnswer: 1,
            explanation: "AWS Support Concierge is available with Enterprise Support and provides billing and account assistance."
        },
        {
            question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
            options: ["Applying the Amazon Connect latency-based routing policy", "Registering a new US domain name to serve the users in the US", "Building a new data center in the US and implementing a hybrid model", "Deploying new Amazon EC2 instances in a Region located in the US"],
            correctAnswer: 3,
            explanation: "Deploying EC2 instances in a US Region will reduce latency for US users by serving content from a geographically closer location."
        },
        {
            question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
            options: ["IAM roles", "IAM users", "IAM user groups", "AWS Organizations"],
            correctAnswer: 2,
            explanation: "IAM user groups allow you to organize users and assign permissions to multiple users at once."
        },
        {
            question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
            options: ["AWS OpsWorks", "AWS Database Migration Service", "AWS Server Migration Service", "AWS Application Discovery Service"],
            correctAnswer: 1,
            explanation: "AWS Database Migration Service helps migrate databases to AWS with minimal downtime and no impact on source database functionality."
        },
        {
            question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
            options: ["Build security in every layer", "Parallelize tasks", "Implement elasticity", "Adopt monolithic architecture"],
            correctAnswer: 2,
            explanation: "Elasticity allows you to automatically scale resources up or down based on demand, reducing costs."
        },
        {
            question: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
            options: ["Increasing speed and agility", "There is no need to worry about security", "Gaining complete control over the physical infrastructure", "Operating applications on behalf of customers", "All of the physical security and most of the data/network security are taken care of for you"],
            correctAnswer: 0,
            explanation: "AWS provides increased speed and agility, and handles physical security and most infrastructure security. (Correct answers: A, E)"
        },
        {
            question: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
            options: ["Allows treating an application as a single, cohesive unit", "Reduces inter-dependencies so that failures do not impact other components of the application", "Allows updates of any monolithic application quickly and easily", "Allows tracking of any API call made to any AWS service"],
            correctAnswer: 1,
            explanation: "Decoupling reduces dependencies between application components, making the application more resilient to failures."
        },
        {
            question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
            options: ["AWS Budgets", "AWS Pricing Calculator", "AWS Systems Manager", "AWS Cost & Usage Reports"],
            correctAnswer: 3,
            explanation: "AWS Cost & Usage Reports provide detailed billing information including historical EC2 usage and costs."
        },
        {
            question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
            options: ["AWS services' costs will be reduced to half the original price", "The consolidated billing feature is just for organizational purpose", "Each AWS account gets volume discounts", "Each AWS account gets five times the free-tier services capacity"],
            correctAnswer: 2,
            explanation: "Consolidated billing combines usage across all accounts, potentially qualifying for volume discounts."
        },
        {
            question: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
            options: ["Regularly update firmware on EBS devices", "Create EBS snapshots", "Ensure that EBS data is encrypted at rest", "Store a backup daily in an external drive", "Prevent any unauthorized access to AWS data centers"],
            correctAnswer: 1,
            explanation: "Creating EBS snapshots and encrypting data at rest are customer responsibilities for data safety. (Correct answers: B, C)"
        },
        {
            question: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
            options: ["By automatically scaling your on-premises resources based on changes in demand", "By automatically scaling your AWS resources using an Elastic Load Balancer", "By reducing interdependencies between application components wherever possible", "By automatically provisioning the required AWS resources based on changes in demand"],
            correctAnswer: 3,
            explanation: "Elasticity automatically provisions or de-provisions resources based on actual demand, optimizing costs and performance."
        },
        {
            question: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
            options: ["Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded", "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis", "Configure the AWS Budgets Service to alert the company when the threshold is exceeded", "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded", "Configure the Amazon Connect Service to alert the company when the threshold is exceeded"],
            correctAnswer: 0,
            explanation: "CloudWatch billing alarms with SNS and AWS Budgets can both alert when spending thresholds are exceeded. (Correct answers: A, C)"
        },
        {
            question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
            options: ["AWS Global Accelerator", "AWS Regions", "AWS Edge Locations", "AWS Availability Zones"],
            correctAnswer: 2,
            explanation: "Amazon CloudFront uses Edge Locations worldwide to cache and deliver content closer to end users."
        },
        {
            question: "What does the 'Principle of Least Privilege' refer to?",
            options: ["You should grant your users only the permissions they need when they need them and nothing more", "All IAM users should have at least the necessary permissions to access the core AWS services", "All trusted IAM users should have access to any AWS service in the respective AWS account", "IAM users should not be granted any permissions; to keep your account safe"],
            correctAnswer: 0,
            explanation: "The Principle of Least Privilege means granting only the minimum permissions necessary to perform required tasks."
        },
        {
            question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
            options: ["Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Networking as a Service (NaaS)"],
            correctAnswer: 3,
            explanation: "The three main cloud computing models are IaaS, PaaS, and SaaS. NaaS is not a standard AWS cloud computing model."
        },
        {
            question: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
            options: ["S3 Intelligent-Tiering", "AWS Marketplace", "Amazon S3 Glacier Deep Archive", "Amazon EBS"],
            correctAnswer: 2,
            explanation: "S3 Glacier Deep Archive is the most cost-effective storage for long-term archival data that is rarely accessed."
        },
        {
            question: "Which service provides DNS in the AWS cloud?",
            options: ["Route 53", "AWS Config", "Amazon CloudFront", "Amazon EMR"],
            correctAnswer: 0,
            explanation: "Amazon Route 53 is AWS's scalable Domain Name System (DNS) service."
        },
        {
            question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
            options: ["AWS Shield", "AWS Config", "Amazon Cognito", "AWS WAF", "AWS KMS"],
            correctAnswer: 0,
            explanation: "AWS Shield provides DDoS protection and AWS WAF (Web Application Firewall) helps protect against common web exploits. (Correct answers: A, D)"
        },
        {
            question: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
            options: ["AWS OpsWorks", "AWS Storage Gateway", "Amazon EBS volume", "Amazon ElastiCache"],
            correctAnswer: 3,
            explanation: "Amazon ElastiCache provides in-memory caching for frequently accessed data, offering the fastest response times."
        },
        {
            question: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
            options: ["Reserved instances", "Spot instances", "Dedicated instances", "On-demand instances"],
            correctAnswer: 3,
            explanation: "On-demand instances are best for short-term workloads that cannot be interrupted and don't require long-term commitments."
        },
        {
            question: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
            options: ["Reserved Instances", "On-demand Instances", "Dedicated Instances", "Spot Instances"],
            correctAnswer: 3,
            explanation: "Spot Instances are the most cost-effective for batch processing jobs that can tolerate interruptions."
        },
        {
            question: "Which of the following can be described as a global content delivery network (CDN) service?",
            options: ["AWS VPN", "AWS Direct Connect", "AWS Regions", "Amazon CloudFront"],
            correctAnswer: 3,
            explanation: "Amazon CloudFront is AWS's global Content Delivery Network (CDN) service."
        },
        {
            question: "Which of the following services allows customers to manage their agreements with AWS?",
            options: ["AWS Artifact", "AWS Certificate Manager", "AWS Systems Manager", "AWS Organizations"],
            correctAnswer: 0,
            explanation: "AWS Artifact provides on-demand access to AWS compliance reports and agreements."
        },
        {
            question: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
            options: ["Amazon VPC", "Amazon DynamoDB", "Amazon Elastic MapReduce", "AWS IAM", "Amazon Elastic Compute Cloud"],
            correctAnswer: 1,
            explanation: "DynamoDB and EMR are fully managed services where AWS handles operational tasks. (Correct answers: B, C)"
        },
        {
            question: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
            options: ["Amazon Aurora", "Amazon DynamoDB", "Amazon Elastic Block Store", "Amazon Redshift"],
            correctAnswer: 1,
            explanation: "Amazon DynamoDB is a fully managed NoSQL database service."
        },
        {
            question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
            options: ["AWS Identity and Access Management (IAM) user", "Infrastructure Event Management (IEM) engineer", "AWS Consulting Partners", "Technical Account Manager (TAM)"],
            correctAnswer: 3,
            explanation: "Enterprise Support includes a Technical Account Manager (TAM) as the primary point of contact."
        },
        {
            question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
            options: ["By using Amazon VPC console", "By contacting the AWS Support team", "By using AWS Cost Explorer", "By contacting the AWS Finance team"],
            correctAnswer: 2,
            explanation: "AWS Cost Explorer provides visualization and analysis of your AWS spending patterns."
        },
        {
            question: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
            options: ["Access keys", "Secret token", "UserID", "User name and password"],
            correctAnswer: 0,
            explanation: "IAM users need access keys (access key ID and secret access key) to use the AWS CLI."
        },
        {
            question: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
            options: ["Contact the AWS Customer Service team", "Contact the AWS Abuse team", "Contact the AWS Concierge team", "Contact the AWS Security team"],
            correctAnswer: 1,
            explanation: "The AWS Abuse team handles reports of AWS resources being used for malicious purposes."
        },
        {
            question: "Select TWO examples of the AWS shared controls.",
            options: ["Patch Management", "IAM Management", "VPC Management", "Configuration Management", "Data Center operations"],
            correctAnswer: 0,
            explanation: "Patch Management and Configuration Management are shared controls where both AWS and customers have responsibilities. (Correct answers: A, D)"
        },
        {
            question: "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
            options: ["ELB", "Auto Scaling", "Amazon Athena", "ECR", "Amazon EC2"],
            correctAnswer: 0,
            explanation: "Elastic Load Balancing (ELB) and Auto Scaling help detect and react to failures automatically. (Correct answers: A, B)"
        },
        {
            question: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
            options: ["Amazon SNS", "Amazon Kinesis Video Streams", "AWS CloudFormation", "Amazon CloudFront"],
            correctAnswer: 3,
            explanation: "Amazon CloudFront is a CDN that caches content at edge locations worldwide for high-speed delivery."
        },
        {
            question: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
            options: ["A MySQL database installed on an EC2 instance", "Amazon Aurora", "Amazon DynamoDB", "Amazon Neptune"],
            correctAnswer: 1,
            explanation: "Amazon Aurora provides automated backups, unlike self-managed databases on EC2."
        },
        {
            question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
            options: ["AWS CloudFormation", "AWS Config", "Amazon SES", "Amazon EMR"],
            correctAnswer: 0,
            explanation: "AWS CloudFormation allows you to define and provision infrastructure using code templates."
        },
        {
            question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
            options: ["Client-side encryption", "Configuring infrastructure devices", "Server-side encryption", "Filtering traffic with Security Groups"],
            correctAnswer: 1,
            explanation: "AWS is responsible for configuring and maintaining physical infrastructure devices."
        },
        {
            question: "What does the AWS Health Dashboard provide? (Choose TWO)",
            options: ["Detailed troubleshooting guidance to address AWS events impacting your resources", "Health checks for Auto Scaling instances", "Recommendations for Cost Optimization", "A dashboard detailing vulnerabilities in your applications", "Personalized view of AWS service health"],
            correctAnswer: 0,
            explanation: "AWS Health Dashboard provides troubleshooting guidance and personalized service health information. (Correct answers: A, E)"
        },
        {
            question: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
            options: ["AWS Lambda", "AWS Config", "Amazon CloudWatch", "AWS CloudTrail"],
            correctAnswer: 2,
            explanation: "Amazon CloudWatch monitors EC2 instances and provides metrics to troubleshoot performance issues."
        },
        {
            question: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
            options: ["AWS Shield", "AWS Management Console", "AWS Secrets Manager", "AWS Trusted Advisor"],
            correctAnswer: 3,
            explanation: "AWS Trusted Advisor provides security recommendations including infrastructure optimization."
        },
        {
            question: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
            options: ["Amazon S3 provides unlimited storage for any type of data", "Amazon S3 can run any type of application or backend system", "Amazon S3 stores any number of objects, but with object size limits", "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere", "Amazon S3 provides 99.999999999% (11 9's) of data durability"],
            correctAnswer: 1,
            explanation: "S3 cannot run applications (it's storage only) and scales automatically, not manually. (Correct answers: B, D)"
        },
        {
            question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
            options: ["Disk disposal", "Controlling physical access to compute resources", "Patching the Network infrastructure", "Setting password complexity rules", "Configuring network access rules"],
            correctAnswer: 3,
            explanation: "Customers are responsible for setting password policies and configuring network access rules like security groups. (Correct answers: D, E)"
        },
        {
            question: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
            options: ["Amazon Aurora", "Amazon CloudWatch", "AWS Quick Start reference deployments", "AWS OpsWorks"],
            correctAnswer: 2,
            explanation: "AWS Quick Starts are automated reference deployments for popular technologies built by AWS solutions architects."
        },
        {
            question: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
            options: ["Elastic RI", "Premium RI", "Standard RI", "Convertible RI"],
            correctAnswer: 3,
            explanation: "Convertible Reserved Instances allow you to exchange for different instance types with different computing power during the term."
        }
    ],
    11: [
    {
        question: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
        options: ["By minimizing large capital expenditures.", "By having no responsibility for third-party license costs.", "By having no operational expenditures.", "By having AWS manage applications."],
        correctAnswer: 0,
        explanation: "AWS helps reduce TCO by minimizing large capital expenditures, allowing companies to shift from CapEx to OpEx model."
    },
    {
        question: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
        options: ["AWS Trusted Advisor", "AWS Online Tech Talks", "AWS Blog", "AWS Forums", "AWS Classroom Training"],
        correctAnswer: 1,
        explanation: "AWS Online Tech Talks and AWS Classroom Training provide instructor-led learning about security. (Correct answers: B, E)"
    },
    {
        question: "Which of the following will enhance the security of access to the AWS Management Console? (Select TWO)",
        options: ["AWS Secrets Manager", "AWS Certificate Manager", "AWS Multi-Factor Authentication (AWS MFA)", "Security groups", "Password policies"],
        correctAnswer: 2,
        explanation: "AWS MFA and Password policies enhance console security. (Correct answers: C, E)"
    },
    {
        question: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
        options: ["Amazon CloudFront distributions", "Amazon Route 53", "Security Groups", "Subnets", "Elastic Load Balancing"],
        correctAnswer: 2,
        explanation: "Security Groups and Subnets are configured through the VPC Dashboard. (Correct answers: C, D)"
    },
    {
        question: "For which auditing process does AWS have sole responsibility?",
        options: ["AWS IAM policies", "Physical security", "Amazon S3 bucket policies", "AWS CloudTrail Logs"],
        correctAnswer: 1,
        explanation: "AWS has sole responsibility for physical security of data centers under the shared responsibility model."
    },
    {
        question: "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
        options: ["The ability to receive one bill for multiple accounts", "Service limits increasing by default in all accounts", "A fixed discount on the monthly bill", "Potential volume discounts, as usage in all accounts is combined", "The automatic extension of the master account's AWS support plan to all accounts"],
        correctAnswer: 0,
        explanation: "Consolidated billing provides one bill for multiple accounts and potential volume discounts. (Correct answers: A, D)"
    },
    {
        question: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
        options: ["Patching databases software", "Testing application releases", "Backing up databases", "Creating database schema", "Running penetration tests"],
        correctAnswer: 0,
        explanation: "AWS can handle patching database software and backing up databases automatically. (Correct answers: A, C)"
    },
    {
        question: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
        options: ["Contact an AWS Account Manager to sign a new contract", "Move an Availability Zone to the new Region", "Begin deploying resources in the second Region", "Download the AWS Management Console for the new Region"],
        correctAnswer: 2,
        explanation: "Companies can simply begin deploying resources in any AWS Region without additional contracts or special steps."
    },
    {
        question: "Why is it beneficial to use Elastic Load Balancers with applications?",
        options: ["They allow for the conversion from Application Load Balancers to Classic Load Balancers", "They are capable of handling constant changes in network traffic patterns", "They automatically adjust capacity", "They are provided at no charge to users"],
        correctAnswer: 1,
        explanation: "Elastic Load Balancers can handle constant changes in network traffic patterns, distributing traffic across multiple targets."
    },
    {
        question: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 1,
        explanation: "The Business support plan provides one-hour response time for urgent support cases when production systems are impaired."
    },
    {
        question: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EC2 Instance Store"],
        correctAnswer: 0,
        explanation: "Amazon S3 provides low-cost, durable storage with immediate retrieval capabilities, making it ideal for database backups."
    },
    {
        question: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        options: ["AWS Enterprise Support", "AWS Solutions Architects", "AWS Professional Services", "AWS Account Managers"],
        correctAnswer: 2,
        explanation: "AWS Professional Services provides paid engagements to help customers accelerate cloud adoption."
    },
    {
        question: "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption. Which AWS Support plan meets these requirements at the LOWEST cost?",
        options: ["Basic", "Developer", "Business", "Enterprise"],
        correctAnswer: 2,
        explanation: "The Business support plan is the minimum plan offering 24/7 access with less than 1-hour response time for production issues."
    },
    {
        question: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        options: ["AWS Config", "AWS Trusted Advisor", "Amazon CloudWatch", "Amazon Inspector"],
        correctAnswer: 0,
        explanation: "AWS Config tracks resource configurations and changes over time, enabling change management auditing."
    },
    {
        question: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
        options: ["It identifies software vulnerabilities in applications running on AWS", "It provides a list of cost optimization recommendations based on current AWS usage", "It detects potential security vulnerabilities caused by permissions settings on account resources", "It automatically corrects potential security issues caused by permissions settings on account resources", "It provides proactive alerting whenever an Amazon EC2 instance has been compromised"],
        correctAnswer: 1,
        explanation: "Trusted Advisor provides cost optimization recommendations and detects security vulnerabilities in permissions. (Correct answers: B, C)"
    },
    {
        question: "Which AWS managed service is used to host databases?",
        options: ["AWS Batch", "AWS Artifact", "AWS Data Pipeline", "Amazon RDS"],
        correctAnswer: 3,
        explanation: "Amazon RDS (Relational Database Service) is a managed service for hosting databases."
    },
    {
        question: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        options: ["IAM group", "IAM user", "IAM role", "IAM policy"],
        correctAnswer: 1,
        explanation: "IAM users are associated with access key IDs and secret access keys for programmatic access via AWS CLI."
    },
    {
        question: "Under the shared responsibility model, which of the following is the customer responsible for?",
        options: ["Ensuring that disk drives are wiped after use", "Ensuring that firmware is updated on hardware devices", "Ensuring that data is encrypted at rest", "Ensuring that network cables are category six or higher"],
        correctAnswer: 2,
        explanation: "Customers are responsible for encrypting their data at rest under the shared responsibility model."
    },
    {
        question: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EFS"],
        correctAnswer: 3,
        explanation: "Amazon EFS (Elastic File System) provides scalable shared file storage for Linux-based systems."
    },
    {
        question: "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
        options: ["An access key ID", "A primary key", "A secret access key", "A user ID", "A secondary key"],
        correctAnswer: 0,
        explanation: "Programmatic access requires an access key ID and a secret access key. (Correct answers: A, C)"
    },
    {
        question: "Which of the following is a shared control between the customer and AWS?",
        options: ["Providing a key for Amazon S3 client-side encryption", "Configuration of an Amazon EC2 instance", "Environmental controls of physical AWS data centers", "Awareness"],
        correctAnswer: 3,
        explanation: "Awareness and training is a shared control where both AWS and customers have responsibilities."
    },
    {
        question: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
        options: ["Amazon EBS", "Amazon EC2 instance store", "Amazon EFS", "Amazon S3"],
        correctAnswer: 1,
        explanation: "EC2 instance store provides ephemeral storage that is deleted when an instance is stopped or terminated."
    },
    {
        question: "Which of the following is an advantage of consolidated billing on AWS?",
        options: ["Volume pricing qualification", "Shared access permissions", "Multiple bills per account", "Eliminates the need for tagging"],
        correctAnswer: 0,
        explanation: "Consolidated billing allows volume pricing qualification by combining usage across all accounts."
    },
    {
        question: "Which services are parts of the AWS serverless platform?",
        options: ["Amazon EC2, Amazon S3, Amazon Athena", "Amazon Kinesis, Amazon SQS, Amazon EMR", "AWS Step Functions, Amazon DynamoDB, Amazon SNS", "Amazon Athena, Amazon Cognito, Amazon EC2"],
        correctAnswer: 2,
        explanation: "AWS Step Functions, DynamoDB, and SNS are all serverless services that don't require server management."
    },
    {
        question: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        options: ["Spot Instances", "Reserved Instances", "Dedicated Hosts", "On-Demand Instances"],
        correctAnswer: 2,
        explanation: "Dedicated Hosts allow customers to use existing server-bound software licenses (BYOL - Bring Your Own License)."
    },
    {
        question: "Which of the following security measures protect access to an AWS account? (Select TWO)",
        options: ["Enable AWS CloudTrail", "Grant least privilege access to IAM users", "Create one IAM user and share with many developers and users", "Enable Amazon CloudFront", "Activate multi-factor authentication (MFA) for privileged users"],
        correctAnswer: 1,
        explanation: "Least privilege access and MFA for privileged users are key security measures. (Correct answers: B, E)"
    },
    {
        question: "Which AWS service provides the ability to manage infrastructure as code?",
        options: ["AWS CodePipeline", "AWS CodeDeploy", "AWS Direct Connect", "AWS CloudFormation"],
        correctAnswer: 3,
        explanation: "AWS CloudFormation enables infrastructure as code, allowing you to provision resources using templates."
    },
    {
        question: "What is an advantage of deploying an application across multiple Availability Zones?",
        options: ["There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region", "The application will have higher availability because it can withstand a service disruption in one Availability Zone", "There will be better coverage as Availability Zones are geographically distant and can serve a wider area", "There will be decreased application latency that will improve the user experience"],
        correctAnswer: 1,
        explanation: "Deploying across multiple AZs provides higher availability as the application can withstand AZ-level failures."
    },
    {
        question: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        options: ["Amazon Aurora", "Amazon Redshift", "Amazon DynamoDB", "Amazon ElastiCache"],
        correctAnswer: 0,
        explanation: "Amazon Aurora is a MySQL-compatible database that easily scales and provides high performance."
    },
    {
        question: "Which of the following is an AWS Cloud architecture design principle?",
        options: ["Implement single points of failure", "Implement loose coupling", "Implement monolithic design", "Implement vertical scaling"],
        correctAnswer: 1,
        explanation: "Loose coupling is a key AWS design principle that makes systems more scalable and resilient."
    },
    {
        question: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
        options: ["AWS Trusted Advisor", "AWS Support case", "Concierge team", "Amazon Connect"],
        correctAnswer: 2,
        explanation: "The Concierge team is exclusively available to Enterprise Support customers."
    },
    {
        question: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        options: ["Moving from variable operational expense (opex) to upfront capital expense (capex)", "Moving from upfront capital expense (capex) to variable capital expense (capex)", "Moving from upfront capital expense (capex) to variable operational expense (opex)", "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"],
        correctAnswer: 2,
        explanation: "Moving to AWS shifts from upfront capital expenses (capex) to variable operational expenses (opex)."
    },
    {
        question: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        options: ["Dedicated Hosts", "Reserved Instances", "On-Demand Instances", "No Upfront Reserved Instances"],
        correctAnswer: 0,
        explanation: "Dedicated Hosts provide physical isolation and should be included in TCO calculations for such requirements."
    },
    {
        question: "Which AWS service should be used for long-term, low-cost storage of data backups?",
        options: ["Amazon RDS", "Amazon Glacier", "AWS Snowball", "AWS EBS"],
        correctAnswer: 1,
        explanation: "Amazon Glacier (now S3 Glacier) is designed for long-term, low-cost archival storage."
    },
    {
        question: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 1,
        explanation: "The Business support plan is the minimum plan that provides technical support via phone."
    },
    {
        question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        options: ["Reserved Instances", "On-Demand", "Dedicated Hosts", "Spot Instances"],
        correctAnswer: 3,
        explanation: "Spot Instances can provide up to 90% discount compared to On-Demand pricing."
    },
    {
        question: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
        options: ["appGateway", "Amazon S3", "Amazon Elastic File System (EFS)", "Amazon Glacier", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "Amazon S3 for storage and Amazon CloudFront for content delivery provide low-latency video serving. (Correct answers: B, E)"
    },
    {
        question: "What can AWS edge locations be used for? (Select TWO)",
        options: ["Hosting applications", "Delivering content closer to users", "Running NoSQL database caching services", "Reducing traffic on the server by caching responses", "Sending notification messages to end users"],
        correctAnswer: 1,
        explanation: "Edge locations deliver content closer to users and reduce traffic by caching responses. (Correct answers: B, D)"
    },
    {
        question: "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
        options: ["AWS Total Cost of Ownership (TCO) Calculator", "Cost Explorer", "AWS Budgets", "AWS Migration Hub"],
        correctAnswer: 0,
        explanation: "The AWS TCO Calculator provides detailed reports on estimated cost savings when migrating to AWS."
    },
    {
        question: "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
        options: ["AWS Service Health Dashboard", "AWS X-Ray", "AWS Personal Health Dashboard", "Amazon CloudWatch"],
        correctAnswer: 2,
        explanation: "AWS Personal Health Dashboard provides a personalized view of AWS service health specific to your resources."
    },
    {
        question: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        options: ["It allows the business to eliminate IT bills", "It allows the business to put a server in each customer's data center", "It allows the business to focus on business activities", "It allows the business to leave servers unpatched"],
        correctAnswer: 2,
        explanation: "Moving to AWS allows businesses to focus on core business activities rather than infrastructure management."
    },
    {
        question: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        options: ["AWS Senior Support Engineers", "AWS Technical Account Managers", "AWS Trusted Advisor", "AWS Discussion Forums"],
        correctAnswer: 3,
        explanation: "Basic Support plan users can obtain technical assistance through AWS Discussion Forums."
    },
    {
        question: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        options: ["Deploy applications across multiple Availability Zones within an AWS Region", "Use a hybrid cloud computing deployment model within the geographic area", "Deploy applications across multiple AWS Regions", "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions"],
        correctAnswer: 2,
        explanation: "Deploying across multiple AWS Regions protects against regional disasters affecting entire geographic areas."
    },
    {
        question: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
        options: ["Ensuring network connectivity from AWS to the internet", "Patching and fixing flaws within the AWS Cloud infrastructure", "Ensuring the physical security of cloud data centers", "Ensuring Amazon EBS volumes are backed up"],
        correctAnswer: 3,
        explanation: "Customers are responsible for backing up their EBS volumes under the shared responsibility model."
    },
    {
        question: "In which scenario should Amazon EC2 Spot Instances be used?",
        options: ["A company wants to move its main website to AWS from an on-premises web server", "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime", "A company's heavily used legacy database is currently running on-premises", "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances"],
        correctAnswer: 3,
        explanation: "Spot Instances are ideal for infrequent, interruptible workloads that can tolerate interruptions."
    },
    {
        question: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO)",
        options: ["Reduced latency to users", "The application's presentation in the local language", "Data sovereignty compliance", "Cooling costs in hotter climates", "Proximity to the customer's office for on-site visits"],
        correctAnswer: 0,
        explanation: "Reduced latency to users and data sovereignty compliance are key factors in Region selection. (Correct answers: A, C)"
    },
    {
        question: "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
        options: ["AWS Personal Health Dashboard", "AWS Service Health Dashboard", "AWS Trusted Advisor", "AWS Infrastructure Event Management"],
        correctAnswer: 0,
        explanation: "AWS Personal Health Dashboard provides alerts about AWS events that may impact your specific resources."
    },
    {
        question: "Which disaster recovery scenario offers the lowest probability of down time?",
        options: ["Backup and restore", "Pilot light", "Warm standby", "Multi-site active-active"],
        correctAnswer: 3,
        explanation: "Multi-site active-active provides the lowest downtime as systems are fully operational in multiple locations."
    },
    {
        question: "Which service's PRIMARY purpose is software version control?",
        options: ["Amazon CodeStar", "AWS Command Line Interface (AWS CLI)", "Amazon Cognito", "AWS CodeCommit"],
        correctAnswer: 3,
        explanation: "AWS CodeCommit is a fully managed source control service for software version control."
    },
    {
        question: "How can a customer increase security to AWS account logons? (Select TWO)",
        options: ["Configure AWS Certificate Manager", "Enable Multi-Factor Authentication (MFA)", "Use Amazon Cognito to manage access", "Configure a strong password policy", "Enable AWS Organizations"],
        correctAnswer: 1,
        explanation: "Enabling MFA and configuring strong password policies increase account logon security. (Correct answers: B, D)"
    }
    ],
    2: [
    {
        question: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
        options: ["AWS Organizations", "AWS Trusted Advisor", "IAM User Groups", "AWS Config"],
        correctAnswer: 0,
        explanation: "AWS Organizations helps centrally manage billing and security policies across multiple AWS accounts."
    },
    {
        question: "Which service provides object-level storage in AWS?",
        options: ["Amazon EBS", "Amazon Instance Store", "Amazon EFS", "Amazon S3"],
        correctAnswer: 3,
        explanation: "Amazon S3 provides object-level storage for storing and retrieving any amount of data."
    },
    {
        question: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
        options: ["AWS Elastic Load Balancer", "AWS Budgets", "AWS Auto Scaling", "AWS Cost Explorer"],
        correctAnswer: 2,
        explanation: "AWS Auto Scaling automatically adjusts EC2 capacity to match demand, optimizing costs."
    },
    {
        question: "Which S3 storage class is best for data with unpredictable access patterns?",
        options: ["Amazon S3 Intelligent-Tiering", "Amazon S3 Glacier Flexible Retrieval", "Amazon S3 Standard", "Amazon S3 Standard-Infrequent Access"],
        correctAnswer: 0,
        explanation: "S3 Intelligent-Tiering automatically moves data between tiers based on access patterns."
    },
    {
        question: "What is the AWS database service that allows you to upload data structured in key-value format?",
        options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift", "Amazon RDS"],
        correctAnswer: 0,
        explanation: "Amazon DynamoDB is a NoSQL database service that supports key-value data structures."
    },
    {
        question: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
        options: ["You have to pay a start-up fee when launching a new instance for the first time", "The on-demand instances follow the AWS pay-as-you-go pricing model", "With on-demand instances, no longer-term commitments or upfront payments are needed", "When using on-demand Linux instances, you are charged per second based on an hourly rate"],
        correctAnswer: 0,
        explanation: "There is no start-up fee for EC2 On-demand instances. They follow pay-as-you-go pricing with no upfront costs."
    },
    {
        question: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
        options: ["AWS Trusted Advisor", "Amazon Inspector", "Amazon SNS", "Amazon CloudWatch", "Concierge Support Team"],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor and Amazon Inspector both provide security recommendations and vulnerability assessments. (Correct answers: A, B)"
    },
    {
        question: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
        options: ["Encrypted keys", "Email verification", "AWS KMS", "AWS MFA"],
        correctAnswer: 3,
        explanation: "AWS Multi-Factor Authentication (MFA) adds an extra layer of security beyond username and password."
    },
    {
        question: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
        options: ["AWS Knowledge Center", "AWS Health Dashboard", "Infrastructure Event Management", "AWS Support Concierge Service"],
        correctAnswer: 2,
        explanation: "Infrastructure Event Management (IEM) provides architectural and scaling guidance for significant events."
    },
    {
        question: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
        options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon CloudWatch"],
        correctAnswer: 0,
        explanation: "Amazon RDS is a managed service that automates database maintenance tasks like backups, patching, and configuration."
    },
    {
        question: "Which of the below is a best-practice when designing solutions on AWS?",
        options: ["Invest heavily in architecting your environment, as it is not easy to change your design later", "Use AWS reservations to reduce costs when testing your production environment", "Automate wherever possible to make architectural experimentation easier", "Provision a large compute capacity to handle any spikes in load"],
        correctAnswer: 2,
        explanation: "Automation enables easier experimentation and iteration in cloud architecture design."
    },
    {
        question: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
        options: ["Penetration testing is not allowed in AWS", "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure", "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS", "The AWS customers are only allowed to perform penetration testing on services managed by AWS"],
        correctAnswer: 2,
        explanation: "AWS allows customers to perform penetration testing on their own EC2 instances without prior authorization for most services."
    },
    {
        question: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
        options: ["Amazon SQS", "Amazon SES", "AWS Direct Connect", "Amazon Connect"],
        correctAnswer: 0,
        explanation: "Amazon SQS (Simple Queue Service) is a message queuing service that ensures messages are not lost."
    },
    {
        question: "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
        options: ["Multi-factor authentication", "Availability Zones", "Elastic Load Balancing", "Penetration testing", "Vertical Scaling"],
        correctAnswer: 1,
        explanation: "Using multiple Availability Zones and Elastic Load Balancing helps design fault-tolerant architectures. (Correct answers: B, C)"
    },
    {
        question: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
        options: ["AWS VPN", "AWS Subnets", "AWS Dedicated Hosts", "Amazon VPC"],
        correctAnswer: 3,
        explanation: "Amazon VPC (Virtual Private Cloud) provides an isolated virtual network for your AWS resources."
    },
    {
        question: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
        options: ["Managing environmental events of AWS data centers", "Protecting the confidentiality of data in transit in Amazon S3", "Controlling physical access to AWS Regions", "Ensuring that the underlying EC2 host is configured properly", "Patching applications installed on Amazon EC2"],
        correctAnswer: 1,
        explanation: "Customers are responsible for data protection in transit and patching their applications. (Correct answers: B, E)"
    },
    {
        question: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
        options: ["Amazon VPC", "Amazon CloudWatch", "Amazon S3", "Amazon EC2", "AWS Lambda"],
        correctAnswer: 3,
        explanation: "Amazon EC2 and AWS Lambda are both compute services that run application code. (Correct answers: D, E)"
    },
    {
        question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        options: ["Amazon EBS", "Amazon SQS", "Amazon S3", "Amazon Instance store"],
        correctAnswer: 2,
        explanation: "Amazon S3 is ideal for storing and retrieving media files like photos and videos."
    },
    {
        question: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
        options: ["Instance Password", "Key pairs", "Access Keys", "MFA"],
        correctAnswer: 2,
        explanation: "Access Keys (Access Key ID and Secret Access Key) are used for programmatic access to AWS."
    },
    {
        question: "What does Amazon ElastiCache provide?",
        options: ["In-memory caching for read-heavy applications", "An Ehcache compatible in-memory data store", "An online software store that allows Customers to launch pre-configured software with just few clicks", "A domain name system in the cloud"],
        correctAnswer: 0,
        explanation: "Amazon ElastiCache provides in-memory caching to improve application performance for read-heavy workloads."
    },
    {
        question: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
        options: ["AWS WAF", "AWS Trusted Advisor", "AWS Organizations", "Amazon Config"],
        correctAnswer: 2,
        explanation: "AWS Organizations allows you to manage multiple AWS accounts from a central master account."
    },
    {
        question: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
        options: ["Dedicated Instances", "Dedicated Hosts", "On-demand Instances", "Reserved Instances"],
        correctAnswer: 1,
        explanation: "Dedicated Hosts provide physical servers dedicated to your use, supporting BYOL scenarios."
    },
    {
        question: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
        options: ["Free support for all enterprise customers", "Automatic data protection", "Reduced Capital Expenditure (CapEx)", "AWS holds responsibility for managing customer applications"],
        correctAnswer: 2,
        explanation: "Moving to AWS reduces capital expenditure by shifting from CapEx to OpEx model."
    },
    {
        question: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
        options: ["Always use Global Services in your architecture rather than Regional Services", "Always choose to pay as you go", "Treat servers as fixed resources", "Automate wherever possible", "Remove single points of failure"],
        correctAnswer: 3,
        explanation: "Automation and removing single points of failure are key AWS design principles. (Correct answers: D, E)"
    },
    {
        question: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
        options: ["AWS Direct Connect", "Amazon CloudFront", "AWS Snowball", "Amazon Route 53"],
        correctAnswer: 0,
        explanation: "AWS Direct Connect provides a dedicated private network connection from your datacenter to AWS."
    },
    {
        question: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
        options: ["Internet gateways", "Virtual Private Cloud", "Security Groups", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "Virtual Private Cloud (VPC) allows you to isolate resources and create separate network configurations."
    },
    {
        question: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
        options: ["Amazon Cognito", "AWS IAM", "Amazon Aurora", "AWS WAF"],
        correctAnswer: 3,
        explanation: "AWS WAF (Web Application Firewall) protects web applications from common exploits like SQL injection."
    },
    {
        question: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
        options: ["Amazon EMR", "Amazon MQ", "Amazon SNS", "Amazon SQS"],
        correctAnswer: 0,
        explanation: "Amazon EMR (Elastic MapReduce) is designed for processing and analyzing large data sets."
    },
    {
        question: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
        options: ["Monitoring network performance", "Installing software on EC2 instances", "Creating hypervisors", "Configuring Access Control Lists (ACLs)", "Hardware maintenance"],
        correctAnswer: 2,
        explanation: "AWS is solely responsible for hypervisor creation and hardware maintenance. (Correct answers: C, E)"
    },
    {
        question: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
        options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon EC2", "Amazon RDS"],
        correctAnswer: 2,
        explanation: "Amazon EC2 provides the highest level of control over virtual infrastructure including OS and applications."
    },
    {
        question: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
        options: ["MFA", "Security tokens", "A user name and password", "Access keys"],
        correctAnswer: 2,
        explanation: "IAM users require a username and password to access the AWS Management Console."
    },
    {
        question: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
        options: ["IAM", "An internet gateway", "EBS Snapshot", "AMI"],
        correctAnswer: 3,
        explanation: "An AMI (Amazon Machine Image) is a template used to create multiple EC2 instances."
    },
    {
        question: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
        options: ["Reserved Compute capacity", "Eliminating Single Points of Failure (SPOFs)", "Distributed infrastructure", "Virtualized compute resources", "Dedicated hosting"],
        correctAnswer: 1,
        explanation: "Cloud computing enables eliminating SPOFs through distributed infrastructure. (Correct answers: B, C)"
    },
    {
        question: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
        options: ["Encryption of EBS volumes", "VPC security", "Access permissions", "Hardware patching", "Securing global physical infrastructure"],
        correctAnswer: 3,
        explanation: "AWS manages hardware patching and physical infrastructure security. (Correct answers: D, E)"
    },
    {
        question: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
        options: ["The ability of a system to recover gracefully from failure", "The efficient use of computing resources to meet requirements", "The ability to monitor systems and improve supporting processes and procedures", "The ability to manage datacenter operations more efficiently"],
        correctAnswer: 2,
        explanation: "Operational Excellence focuses on monitoring systems and continuously improving processes and procedures."
    },
    {
        question: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
        options: ["Edge locations are used by CloudFront to cache the most recent responses", "Edge locations are used by CloudFront to improve your end users' experience when uploading files", "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency", "Edge locations are used by CloudFront to distribute content to global users with low latency"],
        correctAnswer: 2,
        explanation: "Edge locations cache content, not distribute traffic across instances. Load balancers distribute traffic."
    },
    {
        question: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
        options: ["AWS CloudTrail", "Amazon Comprehend", "AWS Transit Gateway", "AWS X-Ray", "AWS Config"],
        correctAnswer: 0,
        explanation: "AWS CloudTrail and AWS Config both help audit and monitor resource changes. (Correct answers: A, E)"
    },
    {
        question: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
        options: ["Amazon ECS", "AWS Data Pipeline", "AWS Cloud9", "AWS Personal Health Dashboard"],
        correctAnswer: 0,
        explanation: "Amazon ECS (Elastic Container Service) runs containerized applications on EC2 clusters."
    },
    {
        question: "Which of the following services will help businesses ensure compliance in AWS?",
        options: ["CloudFront", "CloudEndure Migration", "CloudWatch", "CloudTrail"],
        correctAnswer: 3,
        explanation: "AWS CloudTrail helps ensure compliance by logging all API calls and user activities."
    },
    {
        question: "Which of the following procedures will help reduce your Amazon S3 costs?",
        options: ["Use the Import/Export feature to move old files automatically to Amazon Glacier", "Use the right combination of storage classes based on different use cases", "Pick the right Availability Zone for your S3 bucket", "Move all the data stored in S3 standard to EBS"],
        correctAnswer: 1,
        explanation: "Using appropriate S3 storage classes for different use cases optimizes costs."
    },
    {
        question: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
        options: ["AWS Direct Connect", "Amazon EC2 Auto Scaling", "Elastic Load Balancer", "CloudFormation", "Network ACLs"],
        correctAnswer: 1,
        explanation: "EC2 Auto Scaling and Elastic Load Balancer help maintain high availability and fault tolerance. (Correct answers: B, C)"
    },
    {
        question: "Which of the following activities may help reduce your AWS monthly costs?",
        options: ["Enabling Amazon EC2 Auto Scaling for all of your workloads", "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests", "Removing all of your Cost Allocation Tags", "Deploying your AWS resources across multiple Availability Zones"],
        correctAnswer: 0,
        explanation: "EC2 Auto Scaling reduces costs by automatically adjusting capacity based on actual demand."
    },
    {
        question: "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
        options: ["S3 Transfer Acceleration", "AWS WAF", "AWS Snowmobile", "AWS Snowball"],
        correctAnswer: 0,
        explanation: "S3 Transfer Acceleration uses CloudFront edge locations to speed up uploads to S3."
    },
    {
        question: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
        options: ["AWS X-Ray", "Network ACL", "Security Groups", "VPC Flow logs"],
        correctAnswer: 2,
        explanation: "Security Groups act as virtual firewalls for EC2 instances to filter incoming traffic."
    },
    {
        question: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
        options: ["AWS KMS", "AWS Global accelerator", "AWS Direct Connect", "AWS Glue", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "AWS Global Accelerator and CloudFront both improve global application performance and reduce latency. (Correct answers: B, E)"
    },
    {
        question: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
        options: ["Building the relational database schema", "Performing backups", "Managing the database settings", "Patching the database software", "Installing the database software"],
        correctAnswer: 0,
        explanation: "Customers are responsible for database schema design and managing database settings. (Correct answers: A, C)"
    },
    {
        question: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
        options: ["Amazon DynamoDB", "Amazon SNS", "Amazon RDS", "Amazon ElastiCache"],
        correctAnswer: 2,
        explanation: "Amazon RDS is the appropriate choice for migrating structured relational data to AWS."
    },
    {
        question: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
        options: ["APN Consulting Partners", "AWS TAM", "APN Technology Partners", "AWS Professional Services"],
        correctAnswer: 0,
        explanation: "APN Consulting Partners help AWS customers with architecture design and implementation."
    },
    {
        question: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
        options: ["Amazon LightSail", "AWS Lambda", "Amazon RDS instances", "Amazon EC2 instances"],
        correctAnswer: 1,
        explanation: "AWS Lambda is a serverless compute service that runs code without server management."
    },
    {
        question: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
        options: ["She has properly built an elastic system", "She has properly built a fault tolerant system", "She has properly built an encrypted system", "She has properly built a scalable system"],
        correctAnswer: 1,
        explanation: "A fault-tolerant system continues operating despite component failures, which is demonstrated here."
    }
    ],
    3: [
    {
        question: "Where can you store files in AWS? (Choose TWO)",
        options: ["Amazon EFS", "Amazon SNS", "Amazon EBS", "Amazon ECS", "Amazon EMR"],
        correctAnswer: 0,
        explanation: "Amazon EFS (Elastic File System) and Amazon EBS (Elastic Block Store) both provide file storage capabilities. (Correct answers: A, C)"
    },
    {
        question: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
        options: ["Amazon Simple Queue Service", "AWS Storage Gateway", "Amazon Simple Email Service", "Amazon Simple Storage Service"],
        correctAnswer: 0,
        explanation: "Amazon SQS is a fully managed message queuing service for reliably delivering messages across distributed systems."
    },
    {
        question: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
        options: ["Pay less as AWS grows", "Pay as you go", "Pay less by using more", "Save when you reserve"],
        correctAnswer: 3,
        explanation: "Reserved Instances allow customers to save money by committing to 1 or 3-year terms."
    },
    {
        question: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
        options: ["Right-size before and after migration", "Use a Multi-Region Active-Passive architecture", "Combine On-demand Capacity Reservations with Saving Plans", "Use a Multi-Region Active-Active architecture"],
        correctAnswer: 0,
        explanation: "Right-sizing ensures you're using the appropriate instance size, avoiding over-provisioning and minimizing costs."
    },
    {
        question: "What is the primary storage service used by Amazon RDS database instances?",
        options: ["Amazon Glacier", "Amazon EBS", "Amazon EFS", "Amazon S3"],
        correctAnswer: 1,
        explanation: "Amazon RDS uses Amazon EBS (Elastic Block Store) volumes for database storage."
    },
    {
        question: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
        options: ["AWS CodePipeline", "AWS X-Ray", "Amazon Inspector", "AWS CloudTrail"],
        correctAnswer: 1,
        explanation: "AWS X-Ray helps analyze and debug distributed applications, identifying performance bottlenecks and latency issues."
    },
    {
        question: "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
        options: ["Amazon Redshift", "AWS Snowball", "Amazon Simple Storage Service", "Amazon EBS", "Amazon DynamoDB"],
        correctAnswer: 2,
        explanation: "Amazon S3 and DynamoDB are designed with native Multi-AZ replication for fault tolerance. (Correct answers: C, E)"
    },
    {
        question: "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
        options: ["AWS Regions", "Multi-AZ Deployment", "Automatic patching", "Read Replicas", "Edge Locations"],
        correctAnswer: 1,
        explanation: "Multi-AZ Deployment and Read Replicas both improve database availability. (Correct answers: B, D)"
    },
    {
        question: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
        options: ["Replicate the current resources across multiple Availability Zones within the same region", "Migrate the application to a hosting provider in Asia", "Recreate the website content", "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia"],
        correctAnswer: 3,
        explanation: "CloudFront caches content at Edge Locations worldwide, reducing latency for global users."
    },
    {
        question: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
        options: ["AWS Identity and Access Management", "Amazon RDS", "Network Access Control Lists", "Amazon EMR"],
        correctAnswer: 0,
        explanation: "AWS IAM controls user access and permissions to AWS services and resources."
    },
    {
        question: "Using Amazon EC2 falls under which of the following cloud computing models?",
        options: ["IaaS & SaaS", "IaaS", "SaaS", "PaaS"],
        correctAnswer: 1,
        explanation: "Amazon EC2 is Infrastructure as a Service (IaaS), providing virtual servers."
    },
    {
        question: "Which of the below is a best-practice when building applications on AWS?",
        options: ["Strengthen physical security by applying the principle of least privilege", "Ensure that the application runs on hardware from trusted vendors", "Use IAM policies to maintain performance", "Decouple the components of the application so that they run independently"],
        correctAnswer: 3,
        explanation: "Decoupling application components makes systems more resilient and easier to scale independently."
    },
    {
        question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        options: ["Amazon EBS", "Amazon SQS", "Amazon Instance store", "Amazon S3"],
        correctAnswer: 3,
        explanation: "Amazon S3 is ideal for storing and retrieving media files like photos and videos."
    },
    {
        question: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
        options: ["Active archives", "Dynamic websites' assets", "Long-term analytic data", "Active databases", "Cached data"],
        correctAnswer: 0,
        explanation: "Amazon Glacier (S3 Glacier) is designed for active archives and long-term data storage. (Correct answers: A, C)"
    },
    {
        question: "What does Amazon Elastic Beanstalk provide?",
        options: ["A PaaS solution to automate application deployment", "A compute engine for Amazon ECS", "A scalable file storage solution for use with AWS and on-premises servers", "A NoSQL database service"],
        correctAnswer: 0,
        explanation: "Elastic Beanstalk is a Platform as a Service (PaaS) that automates application deployment and management."
    },
    {
        question: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
        options: ["Amazon Kinesis", "Security groups", "Amazon Inspector", "AWS Network Access Control Lists"],
        correctAnswer: 2,
        explanation: "Amazon Inspector automatically assesses EC2 instances for security vulnerabilities and compliance issues."
    },
    {
        question: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
        options: ["Patch management controls", "Database controls", "Awareness & Training", "Environmental controls", "Physical controls"],
        correctAnswer: 3,
        explanation: "Customers inherit environmental and physical controls from AWS as AWS manages the physical infrastructure. (Correct answers: D, E)"
    },
    {
        question: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
        options: ["Reserved instances - No Upfront", "Reserved instances - Partial Upfront", "On-Demand instances", "Spot Instances"],
        correctAnswer: 1,
        explanation: "Reserved Instances with Partial Upfront payment offer significant savings for long-term commitments."
    },
    {
        question: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
        options: ["Elasticity", "Global reach", "Data durability", "High availability"],
        correctAnswer: 1,
        explanation: "AWS's global reach through multiple regions and edge locations helps reduce latency for international users."
    },
    {
        question: "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
        options: ["AWS Batch", "AWS Outposts", "Amazon Lightsail", "Amazon EC2", "AWS Lambda"],
        correctAnswer: 3,
        explanation: "Savings Plans are available for Amazon EC2 and AWS Lambda compute services. (Correct answers: D, E)"
    },
    {
        question: "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
        options: ["Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage", "Deploy AWS resources across multiple Availability Zones within the same AWS Region", "Create point-in-time backups in another subnet and recover this data when a disaster occurs", "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy"],
        correctAnswer: 3,
        explanation: "Active-Active deployment across multiple regions provides the highest level of disaster recovery protection."
    },
    {
        question: "Which statement is correct with regards to AWS service limits? (Choose TWO)",
        options: ["You can contact AWS support to increase the service limits", "Each IAM user has the same service limit", "There are no service limits on AWS", "You can use the AWS Trusted Advisor to monitor your service limits", "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit"],
        correctAnswer: 0,
        explanation: "You can request limit increases through AWS Support, and Trusted Advisor monitors service limits. (Correct answers: A, D)"
    },
    {
        question: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
        options: ["AWS Console", "AWS Service Catalog", "AWS OpsWorks", "AWS CLI"],
        correctAnswer: 3,
        explanation: "AWS CLI (Command Line Interface) allows you to manage AWS services using scripts and commands."
    },
    {
        question: "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
        options: ["AWS Artifact", "AWS Cloud9", "AWS Direct Connect", "AWS CloudTrail", "AWS VPN"],
        correctAnswer: 2,
        explanation: "AWS Direct Connect and AWS VPN enable hybrid cloud connectivity between on-premises and AWS. (Correct answers: C, E)"
    },
    {
        question: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
        options: ["AWS EC2 Auto Recovery", "AWS Auto Scaling", "AWS Network Load Balancer", "AWS Application Load Balancer"],
        correctAnswer: 3,
        explanation: "Application Load Balancer is designed to distribute HTTP/HTTPS traffic across multiple targets."
    },
    {
        question: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
        options: ["Amazon Neptune", "Amazon Aurora", "Amazon RDS for SQL Server", "Amazon RDS for PostgreSQL"],
        correctAnswer: 1,
        explanation: "Amazon Aurora is MySQL-compatible and can automatically scale storage capacity based on demand."
    },
    {
        question: "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
        options: ["AWS CloudHSM", "Security Groups", "AWS Batch", "AWS IAM", "Network Access Control Lists (Network ACLs)"],
        correctAnswer: 1,
        explanation: "Security Groups and NACLs both filter network traffic, helping protect against DDoS attacks. (Correct answers: B, E)"
    },
    {
        question: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
        options: ["Amazon Redshift", "Amazon Kinesis", "Amazon DynamoDB", "Amazon RDS"],
        correctAnswer: 0,
        explanation: "Amazon Redshift is a data warehouse service optimized for analyzing large datasets with fast query performance."
    },
    {
        question: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
        options: ["Application development", "Market research", "Business analysis", "Physical hardware"],
        correctAnswer: 3,
        explanation: "TCO analysis should include physical hardware costs when comparing on-premises vs AWS deployment."
    },
    {
        question: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
        options: ["EC2 instances will be billed on one second increments, with a minimum of one minute", "EC2 instances will be billed on one hour increments, with a minimum of one day", "EC2 instances will be billed on one minute increments, with a minimum of one hour", "EC2 instances will be billed on one day increments, with a minimum of one month"],
        correctAnswer: 0,
        explanation: "Linux EC2 instances are billed per second with a minimum of one minute."
    },
    {
        question: "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
        options: ["Instance type", "The Availability Zone where the instance is provisioned", "Load balancing", "Number of buckets", "Number of private IPs"],
        correctAnswer: 0,
        explanation: "Instance type and Availability Zone can both affect EC2 pricing. (Correct answers: A, B)"
    },
    {
        question: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
        options: ["By creating an AWS Config template from the old instance and launching a new instance from it", "By creating an EBS Snapshot of the old instance", "By installing Aurora on EC2 and launching a new instance from it", "By creating an AMI from the old instance and launching a new instance from it"],
        correctAnswer: 3,
        explanation: "Creating an AMI from the configured instance allows you to launch identical instances."
    },
    {
        question: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
        options: ["IAM Principals", "AWS Service Control Policies (SCPs)", "IAM policies", "AWS Fargate"],
        correctAnswer: 1,
        explanation: "Service Control Policies (SCPs) in AWS Organizations restrict services and actions across accounts."
    },
    {
        question: "Which of the following statements describes the AWS Cloud's agility?",
        options: ["AWS allows you to host your applications in multiple regions around the world", "AWS provides customizable hardware at the lowest possible cost", "AWS allows you to provision resources in minutes", "AWS allows you to pay upfront to reduce costs"],
        correctAnswer: 2,
        explanation: "Cloud agility refers to the ability to quickly provision and de-provision resources as needed."
    },
    {
        question: "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
        options: ["Lower administrative burden", "Complete control over the underlying host", "Resizable compute capacity", "Scales automatically to larger or smaller instance types", "Supports the document and key-value data structure"],
        correctAnswer: 0,
        explanation: "RDS reduces administrative burden and provides resizable compute capacity. (Correct answers: A, C)"
    },
    {
        question: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
        options: ["Internet Gateway", "AWS IQ", "AWS Direct Connect", "AWS Site-to-Site VPN"],
        correctAnswer: 3,
        explanation: "AWS Site-to-Site VPN uses IPSec to create encrypted connections between on-premises and AWS."
    },
    {
        question: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
        options: ["Enterprise Support", "Developer Support", "Basic Support", "Business Support"],
        correctAnswer: 3,
        explanation: "Business Support is the minimum plan offering 24/7 access to technical support via phone and chat."
    },
    {
        question: "Which of the following is used to control network traffic in AWS? (Choose TWO)",
        options: ["Network Access Control Lists (NACLs)", "Key Pairs", "Access Keys", "IAM Policies", "Security Groups"],
        correctAnswer: 0,
        explanation: "NACLs and Security Groups both control network traffic at different levels. (Correct answers: A, E)"
    },
    {
        question: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
        options: ["Reserved instances", "Spot Instances", "On-Demand instances", "Dedicated instances"],
        correctAnswer: 1,
        explanation: "Spot Instances are most cost-effective for fault-tolerant workloads that can handle interruptions."
    },
    {
        question: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
        options: ["AWS Service Health Dashboard", "AWS Management Console", "Amazon CloudWatch", "AWS Personal Health Dashboard"],
        correctAnswer: 0,
        explanation: "AWS Service Health Dashboard shows the current status of all AWS services across all regions."
    },
    {
        question: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
        options: ["AWS Software Development Kit", "AWS Command Line Interface", "AWS CodeDeploy", "AWS Management Console"],
        correctAnswer: 0,
        explanation: "AWS SDKs provide APIs for calling AWS services from various programming languages."
    },
    {
        question: "Which AWS Service can be used to register a new domain name?",
        options: ["Amazon Personalize", "Amazon Route 53", "AWS KMS", "AWS Config"],
        correctAnswer: 1,
        explanation: "Amazon Route 53 provides domain registration services along with DNS management."
    },
    {
        question: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
        options: ["AWS CloudFormation", "AWS Migration Hub", "AWS IAM", "AWS Elastic Beanstalk", "Amazon Macie"],
        correctAnswer: 0,
        explanation: "CloudFormation and Elastic Beanstalk both automate application deployment. (Correct answers: A, D)"
    },
    {
        question: "Which AWS service provides cost-optimization recommendations?",
        options: ["AWS Trusted Advisor", "AWS Pricing Calculator", "Amazon QuickSight", "AWS X-Ray"],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor provides cost optimization recommendations along with other best practices."
    },
    {
        question: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
        options: ["VPC Peering", "AWS Transit Gateway", "Amazon Connect", "Security Groups"],
        correctAnswer: 1,
        explanation: "AWS Transit Gateway simplifies network connectivity by acting as a central hub for multiple VPCs."
    },
    {
        question: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
        options: ["Instances can be shut down by AWS at any time with no notification", "Reserved instances require at least a one-year pricing commitment", "There is no additional charge for using dedicated instances", "Reserved instances provide a significant discount compared to on-demand instances", "Reserved instances are best suited for periodic workloads"],
        correctAnswer: 1,
        explanation: "Reserved Instances require commitment (drawback) but provide significant discounts (benefit). (Correct answers: B, D)"
    },
    {
        question: "Why does every AWS Region contain multiple Availability Zones?",
        options: ["Multiple Availability Zones allows you to build resilient and highly available architectures", "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone", "Multiple Availability Zones allows for data replication and global reach", "Multiple Availability Zones within a region increases the storage capacity available in that region"],
        correctAnswer: 0,
        explanation: "Multiple AZs enable building fault-tolerant and highly available architectures."
    },
    {
        question: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
        options: ["On-Demand Instances", "Spot Instances", "Reserved Instances - All Upfront", "Reserved Instances - No Upfront"],
        correctAnswer: 0,
        explanation: "For short-term needs (2 months), On-Demand is most cost-effective as Reserved Instances require 1-year minimum."
    },
    {
        question: "Which of the following is a benefit of running an application in multiple Availability Zones?",
        options: ["Allows you to exceed AWS service limits", "Reduces application response time between servers and global users", "Increases available compute capacity", "Increases the availability of your application"],
        correctAnswer: 3,
        explanation: "Deploying across multiple AZs increases application availability by providing fault tolerance."
    },
    {
        question: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
        options: ["AWS sells the old devices to other hosting providers", "AWS destroys the old devices in accordance with industry-standard practices", "AWS sends the old devices for remanufacturing", "AWS stores the old devices in a secure place"],
        correctAnswer: 1,
        explanation: "AWS destroys decommissioned storage devices following industry-standard security practices to protect customer data."
    }
    ],
    4: [
    {
        question: "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
        options: ["Amazon Route 53", "AWS ACM", "AWS Directory Service", "AWS Identity & Access Management", "AWS Data Pipeline"],
        correctAnswer: 1,
        explanation: "Amazon Route 53 and AWS ACM (Certificate Manager) can both deploy SSL certificates. (Correct answers: A, B)"
    },
    {
        question: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
        options: ["Amazon EC2", "Amazon S3", "AWS Lambda", "Amazon EMR", "Amazon EBS"],
        correctAnswer: 1,
        explanation: "Amazon S3 and AWS Lambda both scale automatically without manual intervention. (Correct answers: B, C)"
    },
    {
        question: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
        options: ["Application management", "Capacity management", "Access control", "Operating system maintenance", "Data management"],
        correctAnswer: 1,
        explanation: "AWS manages capacity and operating system maintenance for Lambda. (Correct answers: B, D)"
    },
    {
        question: "How do ELBs improve the reliability of your application?",
        options: ["By distributing traffic across multiple S3 buckets", "By replicating data to multiple availability zones", "By creating database Read Replicas", "By ensuring that only healthy targets receive traffic"],
        correctAnswer: 3,
        explanation: "Elastic Load Balancers perform health checks and route traffic only to healthy targets."
    },
    {
        question: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
        options: ["On-demand instances", "Spot instances", "Dedicated instances", "Reserved instances"],
        correctAnswer: 2,
        explanation: "Dedicated Instances run on hardware dedicated to a single customer for enhanced isolation."
    },
    {
        question: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
        options: ["Snowball", "S3 Transfer Acceleration", "Snowmobile", "Amazon VPC"],
        correctAnswer: 2,
        explanation: "AWS Snowmobile is designed for exabyte-scale data transfer (up to 100 PB per Snowmobile)."
    },
    {
        question: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
        options: ["Amazon S3 Glacier", "Amazon EFS", "Amazon S3 Standard", "Amazon EBS"],
        correctAnswer: 0,
        explanation: "S3 Glacier provides cost-effective archival storage with retrieval times that meet the 5-hour requirement."
    },
    {
        question: "Which AWS Service is used to manage user permissions?",
        options: ["Security Groups", "Amazon ECS", "AWS IAM", "AWS Support"],
        correctAnswer: 2,
        explanation: "AWS IAM (Identity and Access Management) manages user permissions and access control."
    },
    {
        question: "Which support plan includes AWS Support Concierge Service?",
        options: ["Premium Support", "Business Support", "Enterprise Support", "Standard Support"],
        correctAnswer: 2,
        explanation: "AWS Support Concierge Service is exclusively available with Enterprise Support."
    },
    {
        question: "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
        options: ["AWS Config", "Amazon CloudWatch", "AWS CloudTrail", "AWS CloudFormation"],
        correctAnswer: 2,
        explanation: "AWS CloudTrail logs all API calls and provides a history of AWS account activity."
    },
    {
        question: "What are the benefits of using an AWS-managed service? (Choose TWO)",
        options: ["Provides complete control over the virtual infrastructure", "Allows customers to deliver new solutions faster", "Lowers operational complexity", "Eliminates the need to encrypt data", "Allows developers to control all patching related activities"],
        correctAnswer: 1,
        explanation: "Managed services enable faster solution delivery and lower operational complexity. (Correct answers: B, C)"
    },
    {
        question: "Which of the following are use cases for Amazon S3? (Choose TWO)",
        options: ["Hosting static websites", "Hosting websites that require sustained high CPU utilization", "Cost-effective database and log storage", "A media store for the CloudFront service", "Processing data streams at any scale"],
        correctAnswer: 0,
        explanation: "S3 is ideal for hosting static websites and serving as a media store for CloudFront. (Correct answers: A, D)"
    },
    {
        question: "What is the AWS' recommendation regarding access keys?",
        options: ["Delete all access keys and use passwords instead", "Only share them with trusted people", "Rotate them regularly", "Save them within your application code"],
        correctAnswer: 2,
        explanation: "AWS recommends rotating access keys regularly as a security best practice."
    },
    {
        question: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
        options: ["Key Pair", "Access Keys", "SDK", "MFA"],
        correctAnswer: 3,
        explanation: "Multi-Factor Authentication (MFA) adds an extra security layer beyond username and password."
    },
    {
        question: "What is the benefit of using an API to access AWS Services?",
        options: ["It improves the performance of AWS resources", "It reduces the time needed to provision AWS resources", "It reduces the number of developers necessary", "It allows for programmatic management of AWS resources"],
        correctAnswer: 3,
        explanation: "APIs enable programmatic management and automation of AWS resources."
    },
    {
        question: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
        options: ["AWS Storage Gateway", "Amazon S3", "Amazon EBS", "Amazon Glacier"],
        correctAnswer: 2,
        explanation: "Amazon EBS provides high-performance block storage suitable for databases with high I/O requirements."
    },
    {
        question: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
        options: ["Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing", "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace", "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define", "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill"],
        correctAnswer: 2,
        explanation: "AWS Budgets can track Reserved Instance utilization and send alerts when usage falls below defined thresholds."
    },
    {
        question: "What is the AWS service that provides five times the performance of a standard MySQL database?",
        options: ["Amazon Aurora", "Amazon Redshift", "Amazon DynamoDB", "Amazon Neptune"],
        correctAnswer: 0,
        explanation: "Amazon Aurora provides up to 5x the performance of standard MySQL databases."
    },
    {
        question: "What does AWS Service Catalog provide?",
        options: ["It enables customers to quickly find descriptions and use cases for AWS services", "It enables customers to explore the different catalogs of AWS services", "It simplifies organizing and governing commonly deployed IT services", "It allows developers to deploy infrastructure on AWS using familiar programming languages"],
        correctAnswer: 2,
        explanation: "AWS Service Catalog helps organizations create and manage catalogs of approved IT services."
    },
    {
        question: "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
        options: ["Protecting credentials", "Logging access activity", "Patching the database software", "Operating system maintenance", "Creating access policies"],
        correctAnswer: 2,
        explanation: "AWS manages patching and OS maintenance for DynamoDB. (Correct answers: C, D)"
    },
    {
        question: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
        options: ["AWS Snowball Migration Service", "AWS Application Discovery Service", "AWS DMS", "AWS Migration Hub"],
        correctAnswer: 1,
        explanation: "AWS Application Discovery Service helps plan migration by discovering and collecting data about on-premises resources."
    },
    {
        question: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
        options: ["Amazon Machine Image", "AWS Cost Explorer", "AWS Cost & Usage Report", "Amazon CloudWatch"],
        correctAnswer: 2,
        explanation: "AWS Cost & Usage Report provides the most detailed and granular cost and usage data."
    },
    {
        question: "Which statement best describes the concept of an AWS region?",
        options: ["An AWS Region is a geographical location with a collection of Edge locations", "An AWS Region is a virtual network dedicated only to a single AWS customer", "An AWS Region is a geographical location with a collection of Availability Zones", "An AWS Region represents the country where the AWS infrastructure exist"],
        correctAnswer: 2,
        explanation: "An AWS Region is a geographical area containing multiple isolated Availability Zones."
    },
    {
        question: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
        options: ["SNS logs", "SQS logs", "CloudWatch Logs", "CloudTrail logs"],
        correctAnswer: 3,
        explanation: "CloudTrail logs record all API calls including S3 bucket deletions, showing who performed the action."
    },
    {
        question: "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
        options: ["Availability Zones", "Data sovereignty", "The number of reads and writes per second", "The nature of the queries", "Software bugs"],
        correctAnswer: 2,
        explanation: "Read/write throughput requirements and query patterns are key factors in database selection. (Correct answers: C, D)"
    },
    {
        question: "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
        options: ["Quickly identify resources that belong to a specific project", "Quickly identify software solutions on AWS", "Track API calls in your AWS account", "Quickly identify deleted resources and their metadata", "Track AWS spending across multiple resources"],
        correctAnswer: 0,
        explanation: "Tags help identify resources by project and track spending across resources. (Correct answers: A, E)"
    },
    {
        question: "What are AWS shared controls?",
        options: ["Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services", "Controls that a customer inherits from AWS", "Controls that apply to both the infrastructure layer and customer layers", "Controls that the customer and AWS collaborate together upon to secure the infrastructure"],
        correctAnswer: 3,
        explanation: "Shared controls are responsibilities where both AWS and customers collaborate, such as patch management."
    },
    {
        question: "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
        options: ["Build multi-region architectures to better serve global customers", "Apply security at all layers", "Implement strong Identity and Access controls", "Use serverless architectures", "Enable audit logging"],
        correctAnswer: 0,
        explanation: "Multi-region architectures and serverless designs improve performance efficiency. (Correct answers: A, D)"
    },
    {
        question: "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
        options: ["Protecting sensitive data", "Patching of the underlying infrastructure", "Setup and operation of managed databases", "Maintaining consistent hardware components", "Installing and configuring third-party software"],
        correctAnswer: 0,
        explanation: "Customers are responsible for data protection and software configuration on EC2. (Correct answers: A, E)"
    },
    {
        question: "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
        options: ["Free commercial software licenses", "Free technical support", "Elastic resources", "On-site visits for auditing", "Cost Savings"],
        correctAnswer: 2,
        explanation: "AWS provides elastic scalability and cost savings compared to on-premises infrastructure. (Correct answers: C, E)"
    },
    {
        question: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
        options: ["Amazon Inspector", "AWS Virtual Private Gateway", "AWS Batch", "Amazon ECS", "AWS Config"],
        correctAnswer: 0,
        explanation: "Amazon Inspector and AWS Config both assist with security analysis and compliance auditing. (Correct answers: A, E)"
    },
    {
        question: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
        options: ["Amazon EC2 is considered a Serverless Web Service", "Amazon EC2 eliminates the need to invest in hardware upfront", "Amazon EC2 can launch as many or as few virtual servers as needed", "Amazon EC2 offers scalable computing"],
        correctAnswer: 0,
        explanation: "EC2 is not serverless; it requires managing virtual server instances. Lambda is AWS's serverless compute service."
    },
    {
        question: "What is the AWS Compute service that executes code only when triggered by events?",
        options: ["AWS Lambda", "Amazon CloudWatch", "AWS Transit Gateway", "Amazon EC2"],
        correctAnswer: 0,
        explanation: "AWS Lambda is an event-driven serverless compute service."
    },
    {
        question: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
        options: ["Amazon EBS Snapshots", "Amazon VPC", "AWS Managed Servers", "Amazon EC2 Instances"],
        correctAnswer: 3,
        explanation: "Virtual servers in AWS are called Amazon EC2 Instances."
    },
    {
        question: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
        options: ["AWS Secrets Manager", "AWS WAF", "AWS CAF", "Amazon EFS"],
        correctAnswer: 2,
        explanation: "AWS CAF (Cloud Adoption Framework) provides guidance for successful cloud adoption."
    },
    {
        question: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
        options: ["AWS Cost Explorer", "AWS TCO Calculator", "AWS Budgets", "AWS Pricing Calculator"],
        correctAnswer: 1,
        explanation: "AWS TCO (Total Cost of Ownership) Calculator helps compare on-premises costs with AWS costs."
    },
    {
        question: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
        options: ["Using AWS Trusted Advisor to find underutilized resources", "Using AWS CloudTrail to record user activities", "Using AWS CloudFormation to manage infrastructure as code", "Deploying an application in multiple Availability Zones"],
        correctAnswer: 2,
        explanation: "CloudFormation enables Infrastructure as Code, a key practice for operational excellence."
    },
    {
        question: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
        options: ["AWS allows them to pay later when their business succeed", "AWS can build complete data centers faster than any other Cloud provider", "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers", "AWS removes the need to invest in operational expenditure", "Using AWS allows companies to replace large capital expenditure with low variable costs"],
        correctAnswer: 2,
        explanation: "AWS enables faster time-to-market and replaces CapEx with variable OpEx. (Correct answers: C, E)"
    },
    {
        question: "What are the benefits of using DynamoDB? (Choose TWO)",
        options: ["Automatically scales to meet required throughput capacity", "Provides resizable instances to match the current demand", "Supports both relational and non-relational data models", "Offers extremely low (single-digit millisecond) latency", "Supports the most popular NoSQL database engines such as CouchDB and MongoDB"],
        correctAnswer: 0,
        explanation: "DynamoDB automatically scales and provides single-digit millisecond latency. (Correct answers: A, D)"
    },
    {
        question: "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
        options: ["Versioning", "Deduplication", "Permissions", "Decryption", "Conversion"],
        correctAnswer: 0,
        explanation: "Versioning and Permissions both help protect data at rest in S3. (Correct answers: A, C)"
    },
    {
        question: "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
        options: ["AWS Partners", "AWS Artifact", "AWS Professional Services", "Amazon Athena", "Amazon PinPoint"],
        correctAnswer: 0,
        explanation: "AWS MAP leverages AWS Partners and Professional Services for enterprise migration. (Correct answers: A, C)"
    },
    {
        question: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
        options: ["Deleting unused EBS volumes after terminating an EC2 instance", "Deleting unused AutoScaling launch configuration", "Deleting unused Elastic Load Balancers", "Releasing unused Elastic IPs after terminating an EC2 instance"],
        correctAnswer: 1,
        explanation: "Auto Scaling launch configurations don't incur charges; the other items do when unused."
    },
    {
        question: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
        options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Consolidated Billing"],
        correctAnswer: 0,
        explanation: "AWS Cost Explorer provides visualization and analysis of historical AWS spending."
    },
    {
        question: "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
        options: ["Running penetration tests", "Reserving capacity", "Data center operations", "Auditing and regulatory compliance", "Infrastructure security"],
        correctAnswer: 2,
        explanation: "AWS manages data center operations and infrastructure security. (Correct answers: C, E)"
    },
    {
        question: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
        options: ["Amazon Simple Email Service (Amazon SES)", "Amazon Simple Storage Service (Amazon S3)", "Amazon Simple Notification Service (Amazon SNS)", "Amazon Simple Queue Service (Amazon SQS)"],
        correctAnswer: 2,
        explanation: "Amazon SNS supports sending SMS messages to over 200 countries worldwide."
    },
    {
        question: "Which of the following allows you to create new RDS instances? (Choose TWO)",
        options: ["AWS CodeDeploy", "AWS Quick Starts", "AWS CloudFormation", "AWS DMS", "AWS Management Console"],
        correctAnswer: 2,
        explanation: "CloudFormation and the Management Console both allow creating RDS instances. (Correct answers: C, E)"
    },
    {
        question: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
        options: ["Low monthly instance maintenance costs", "Low-cost instance tagging", "Per-second instance billing", "Low instance start-up fees"],
        correctAnswer: 2,
        explanation: "Per-second billing for EC2 instances helps reduce costs by charging only for actual usage time."
    },
    {
        question: "Which AWS Group assists customers in achieving their desired business outcomes?",
        options: ["AWS Security Team", "AWS Professional Services", "AWS Trusted Advisor", "AWS Concierge Support Team"],
        correctAnswer: 1,
        explanation: "AWS Professional Services helps customers achieve business outcomes through expert guidance."
    },
    {
        question: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
        options: ["AWS KMS", "AWS Service Control Policies (SCPs)", "Multi-Factor Authentication (MFA)", "Amazon Macie"],
        correctAnswer: 0,
        explanation: "AWS KMS (Key Management Service) manages encryption keys for customer data."
    },
    {
        question: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
        options: ["AWS Well-Architected Tool", "AWS Artifact", "AWS Glue", "Amazon Chime"],
        correctAnswer: 1,
        explanation: "AWS Artifact provides on-demand access to AWS compliance reports including SOC and PCI."
    }
    ],
    5: [
    {
        question: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
        options: ["Least Privilege", "Pilot Light", "Fault Tolerance", "Multi-threading"],
        correctAnswer: 2,
        explanation: "Fault Tolerance ensures systems continue operating properly in the event of component failures."
    },
    {
        question: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
        options: ["All up-front reservation", "All reserved instance payment options provide the same discount level", "Partial up-front reservation", "No up-front reservation"],
        correctAnswer: 0,
        explanation: "All up-front payment provides the largest discount for Reserved Instances."
    },
    {
        question: "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
        options: ["Access control", "Physical MFA devices", "Data encryption", "Unlimited storage", "Load balancing"],
        correctAnswer: 0,
        explanation: "Access control and Data encryption are key features for protecting data in the cloud. (Correct answers: A, C)"
    },
    {
        question: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
        options: ["3 hours for the Linux instance and 5 hours for the CentOS instance", "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance", "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance", "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance"],
        correctAnswer: 2,
        explanation: "Linux instances are billed per-second, while other instance types are billed per full hour. Each partial instance-hour consumed will be billed per-second for Linux instances."
    },
    {
        question: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
        options: ["AWS Trusted Advisor", "AWS Operations Support", "AWS Support API", "AWS Personal Health Dashboard"],
        correctAnswer: 2,
        explanation: "AWS Support API allows programmatic access to manage support cases."
    },
    {
        question: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
        options: ["AWS CLI", "AWS Security Groups", "AWS SDKs", "AWS Network Access Control Lists", "AWS CodeCommit"],
        correctAnswer: 0,
        explanation: "AWS CLI and AWS SDKs can be used to interact with IAM. (Correct answers: A, C)"
    },
    {
        question: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
        options: ["AWS Resource Groups", "IAM Policies", "IAM Roles", "IAM Users", "AWS Organizations"],
        correctAnswer: 2,
        explanation: "IAM Roles and IAM Users are IAM identity types. (Correct answers: C, D)"
    },
    {
        question: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
        options: ["Database Snapshots", "Multi-AZ Deployments", "Automated Backups", "Read Replicas"],
        correctAnswer: 3,
        explanation: "Read Replicas allow offloading read traffic from the primary database instance."
    },
    {
        question: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
        options: ["Using the AWS ACM service", "Using Security Bulletins", "Using the AWS Management Console", "Using Compliance Resources"],
        correctAnswer: 1,
        explanation: "AWS uses Security Bulletins to notify customers about security and privacy events."
    },
    {
        question: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
        options: ["IAM Users", "Key Pair", "IAM Roles", "IAM Groups"],
        correctAnswer: 2,
        explanation: "IAM Roles provide temporary security credentials for accessing AWS resources."
    },
    {
        question: "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
        options: ["AWS Global Accelerator", "AWS Application Load Balancer (ALB)", "Amazon CloudFront", "Transit VPC"],
        correctAnswer: 1,
        explanation: "Application Load Balancer distributes incoming application traffic across multiple targets."
    },
    {
        question: "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
        options: ["Use Software test automation tools", "Use AWS CodeDeploy to build and automate your AWS environment", "Use code to provision and operate your AWS infrastructure", "Migrate all of your applications to a dedicated host"],
        correctAnswer: 2,
        explanation: "Infrastructure as Code eliminates human error by using code to provision and manage AWS resources."
    },
    {
        question: "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
        options: ["Restrict any API call made through SDKs or CLI", "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department", "Require Multi-Factor Authentication (MFA) for all IAM User access", "Set up two login passwords"],
        correctAnswer: 2,
        explanation: "Multi-Factor Authentication (MFA) adds an extra layer of protection for AWS account access."
    },
    {
        question: "Which AWS Service offers volume discounts based on usage?",
        options: ["Amazon VPC", "Amazon S3", "Amazon Lightsail", "AWS Cost Explorer"],
        correctAnswer: 1,
        explanation: "Amazon S3 offers tiered pricing with volume discounts as usage increases."
    },
    {
        question: "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
        options: ["The AWS Region's security level", "Data sovereignty", "Cost", "The planned number of VPCs", "Geographic proximity to the company's location"],
        correctAnswer: 1,
        explanation: "Data sovereignty and cost are important factors in region selection. (Correct answers: B, C)"
    },
    {
        question: "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
        options: ["Amazon EFS", "Amazon Neptune", "Amazon ElastiCache", "DAX"],
        correctAnswer: 2,
        explanation: "Amazon ElastiCache provides in-memory caching to improve application performance."
    },
    {
        question: "What are the advantages of using Auto Scaling Groups for EC2 instances?",
        options: ["Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance", "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance", "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users", "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance"],
        correctAnswer: 1,
        explanation: "Auto Scaling Groups can scale instances across multiple AZs for high availability and fault tolerance."
    },
    {
        question: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
        options: ["AWS helps customers invest more in capital expenditures", "AWS automates all infrastructure operations, so customers save more on human resources costs", "AWS continues to lower the cost of cloud computing for its customers", "AWS secures AWS resources at no additional charge"],
        correctAnswer: 2,
        explanation: "AWS regularly reduces prices and introduces new cost-effective services."
    },
    {
        question: "Which of the following are examples of the customer's responsibility to implement \"security IN the cloud\"? (Choose TWO)",
        options: ["Building a schema for an application", "Replacing physical hardware", "Creating a new hypervisor", "Patch management of the underlying infrastructure", "File system encryption"],
        correctAnswer: 0,
        explanation: "Application schema design and file system encryption are customer responsibilities. (Correct answers: A, E)"
    },
    {
        question: "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
        options: ["AWS CloudHSM", "U2F Security Key", "AWS Access Keys", "AWS Key Pair"],
        correctAnswer: 1,
        explanation: "U2F Security Keys are physical MFA devices that can protect AWS resources."
    },
    {
        question: "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
        options: ["Amazon SNS", "AWS Elastic Beanstalk", "AWS Systems Manager", "AWS Trusted Advisor"],
        correctAnswer: 1,
        explanation: "AWS Elastic Beanstalk quickly deploys and manages applications without infrastructure management."
    },
    {
        question: "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
        options: ["The amount of time the instances will be running", "Number of security groups", "Allocated Elastic IP Addresses", "Number of Hosted Zones", "Number of instances"],
        correctAnswer: 1,
        explanation: "Security groups and Hosted Zones don't affect EC2 costs. (Correct answers: B, D)"
    },
    {
        question: "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
        options: ["AWS Data Pipeline", "AWS Storage Gateway", "Amazon Aurora", "Amazon EFS"],
        correctAnswer: 1,
        explanation: "AWS Storage Gateway connects on-premises environments with cloud storage."
    },
    {
        question: "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
        options: ["Amazon Simple Storage Service", "Amazon Elastic Block Store", "Amazon Elastic Container Service", "AWS Storage Gateway"],
        correctAnswer: 0,
        explanation: "Amazon S3 automatically scales and offers cost-effective object storage."
    },
    {
        question: "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
        options: ["EBS and S3 are accessible only to the root account owner", "The systems administrator must contact AWS Support first to activate his new IAM account", "There is not enough space in S3 to store the snapshots", "There is a non-explicit deny to all new users"],
        correctAnswer: 3,
        explanation: "New IAM users have no permissions by default (implicit deny). Permissions must be explicitly granted."
    },
    {
        question: "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
        options: ["AWS CloudTrail", "Amazon CloudFront", "AWS CloudFormation", "Amazon CloudWatch"],
        correctAnswer: 0,
        explanation: "AWS CloudTrail logs all API calls and provides an audit trail of AWS account activity."
    },
    {
        question: "Which of the below options is true of Amazon Cloud Directory?",
        options: ["Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions", "Amazon Cloud Directory enables the analysis of video and data streams in real time", "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials", "Amazon Cloud Directory allows for registration and management of domain names"],
        correctAnswer: 0,
        explanation: "Amazon Cloud Directory enables building flexible cloud-native directories for organizing hierarchies of data."
    },
    {
        question: "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
        options: ["12 hours", "15 minutes", "24 hours", "One hour"],
        correctAnswer: 3,
        explanation: "Production System Down cases have a 1-hour response time with Business or Enterprise Support."
    },
    {
        question: "Which of the below options is a best practice for making your application on AWS highly available?",
        options: ["Deploy the application to at least two Availability Zones", "Use Elastic Load Balancing (ELB) across multiple AWS Regions", "Deploy the application code on at least two servers in the same Availability Zone", "Rewrite the application code to handle all incoming requests"],
        correctAnswer: 0,
        explanation: "Deploying across multiple Availability Zones provides high availability and fault tolerance."
    },
    {
        question: "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
        options: ["Labor and IT costs", "Cooling and power consumption", "Amazon EBS computing power", "Software architecture", "Software compatibility"],
        correctAnswer: 0,
        explanation: "TCO analysis includes labor/IT costs and physical infrastructure costs like cooling and power. (Correct answers: A, B)"
    },
    {
        question: "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
        options: ["AWS Basic Support", "AWS Developer Support", "AWS Business Support", "AWS Enterprise Support"],
        correctAnswer: 3,
        explanation: "Enterprise Support provides 15-minute response time for business-critical system down issues."
    },
    {
        question: "Which of the following AWS offerings are serverless services? (Choose TWO)",
        options: ["Amazon EC2", "AWS Lambda", "Amazon DynamoDB", "Amazon EMR", "Amazon RDS"],
        correctAnswer: 1,
        explanation: "AWS Lambda and Amazon DynamoDB are serverless services. (Correct answers: B, C)"
    },
    {
        question: "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
        options: ["Amazon GuardDuty", "AWS ACM", "Amazon Detective", "AWS WAF"],
        correctAnswer: 1,
        explanation: "AWS Certificate Manager (ACM) provisions and manages SSL/TLS certificates."
    },
    {
        question: "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
        options: ["AWS Config", "AWS OpsWorks", "AutoScaling", "AWS CloudFormation"],
        correctAnswer: 1,
        explanation: "AWS OpsWorks provides managed instances of Chef and Puppet for configuration management."
    },
    {
        question: "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
        options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon Instance Store"],
        correctAnswer: 2,
        explanation: "Amazon S3 provides object storage with internet accessibility."
    },
    {
        question: "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
        options: ["AWS WAF", "Amazon CloudWatch", "AWS Cloud9", "AWS CloudTrail"],
        correctAnswer: 1,
        explanation: "Amazon CloudWatch monitors CloudFront metrics including HTTP/HTTPS requests."
    },
    {
        question: "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
        options: ["On-demand Instances", "Dedicated Hosts", "Spot Instances", "Reserved Instances"],
        correctAnswer: 3,
        explanation: "Reserved Instances offer significant discounts for steady-state workloads with predictable usage."
    },
    {
        question: "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
        options: ["Create an IAM role and attach a policy with Amazon DynamoDB access permissions", "Create an IAM role and attach a policy with Administrator access permissions", "Create an IAM user and attach a policy with Amazon DynamoDB access permissions", "Create an IAM user and attach a policy with Administrator access permissions"],
        correctAnswer: 2,
        explanation: "For long-term access, create an IAM user with specific permissions following least privilege principle."
    },
    {
        question: "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
        options: ["Generate new IAM access keys every time you delegate permissions", "Store the required AWS credentials directly within the application code", "Use temporary security credentials (IAM roles) instead of long-term access keys", "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources"],
        correctAnswer: 2,
        explanation: "IAM roles provide temporary credentials and are the best practice for EC2 applications."
    },
    {
        question: "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
        options: ["Use servers instead of managed services", "Use existing third-party software licenses on AWS", "Migrate production workloads to AWS edge locations instead of AWS Regions", "Use AWS Outposts to run all workloads in a cost-optimized environment"],
        correctAnswer: 1,
        explanation: "AWS License Manager and BYOL (Bring Your Own License) programs help customers save on licensing costs."
    },
    {
        question: "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
        options: ["Amazon SQS", "Virtual Private Gateway", "AWS Artifact", "Amazon CloudFront"],
        correctAnswer: 0,
        explanation: "Amazon SQS (Simple Queue Service) enables decoupling of application components."
    },
    {
        question: "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
        options: ["Amazon Connect", "AWS CLI", "AWS Identity and Access Management (IAM)", "Amazon SNS", "Amazon Virtual Private Cloud"],
        correctAnswer: 1,
        explanation: "AWS CLI and IAM can be used to enable Virtual MFA. (Correct answers: B, C)"
    },
    {
        question: "According to best practices, which of the below options is best suited for processing a large number of binary files?",
        options: ["Vertically scaling EC2 instances", "Running RDS instances in parallel", "Vertically scaling RDS instances", "Running EC2 instances in parallel"],
        correctAnswer: 3,
        explanation: "Horizontal scaling with parallel EC2 instances is best for processing large numbers of files."
    },
    {
        question: "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
        options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Cost & Usage Report"],
        correctAnswer: 1,
        explanation: "AWS Pricing Calculator helps estimate costs for AWS services before using them."
    },
    {
        question: "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
        options: ["Stop all running services and open an investigation", "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account", "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources", "Open an investigation and delete any potentially compromised IAM users", "Change your AWS root account password and the passwords of any IAM users"],
        correctAnswer: 3,
        explanation: "Investigate and remove compromised users, then change all passwords. (Correct answers: D, E)"
    },
    {
        question: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
        options: ["Elastic coupling", "Loosely coupling", "Scalable coupling", "Tightly coupling"],
        correctAnswer: 1,
        explanation: "Loose coupling minimizes dependencies between components for better resilience."
    },
    {
        question: "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
        options: ["Amazon Elastic File System", "Amazon Simple Storage Service", "Amazon Elastic Block Store", "AWS Storage Gateway"],
        correctAnswer: 0,
        explanation: "Amazon EFS provides a scalable NFS file system for concurrent access from multiple instances."
    },
    {
        question: "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
        options: ["Create private connection to your data center", "Achieve global high availability", "Automate the process of provisioning new compute resources", "Make synchronous replication of your data possible"],
        correctAnswer: 3,
        explanation: "Low-latency links between AZs enable synchronous replication for high availability."
    },
    {
        question: "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
        options: ["Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats", "Lambda natively supports a number of programming languages such as Node.js, Python, and Java", "Lambda is AWS' proprietary programming language for microservices", "Lambda doesn't support programming languages; it is a serverless compute service", "Lambda can support any programming language using an API"],
        correctAnswer: 1,
        explanation: "Lambda natively supports multiple languages and can support others via custom runtimes. (Correct answers: B, E)"
    },
    {
        question: "What are the capabilities of AWS X-Ray? (Choose TWO)",
        options: ["Automatically decouples application components", "Facilitates tracking of user requests to identify application issues", "Helps improve application performance", "Deploys applications to Amazon EC2 instances", "Deploys applications to on-premises servers"],
        correctAnswer: 1,
        explanation: "AWS X-Ray helps trace requests and analyze application performance. (Correct answers: B, C)"
    }
    ],
    6: [
    {
        question: "Which of the following is true regarding the AWS availability zones and edge locations?",
        options: ["Edge locations are located in separate Availability Zones worldwide to serve global customers", "An availability zone exists within an edge location to distribute content globally with low latency", "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations", "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide"],
        correctAnswer: 3,
        explanation: "Availability Zones are isolated locations within Regions, while edge locations are globally distributed for content delivery."
    },
    {
        question: "Which features are included in the AWS Business Support Plan? (Choose TWO)",
        options: ["24x7 access to customer service", "Access to Cloud Support Engineers via email only during business hours", "Access to the Infrastructure Event Management (IEM) feature for additional fee", "24x7 access to the TAM feature", "Partial access to the core Trusted Advisor checks"],
        correctAnswer: 0,
        explanation: "Business Support includes 24x7 customer service and IEM for an additional fee. (Correct answers: A, C)"
    },
    {
        question: "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
        options: ["Amazon GuardDuty", "Amazon Personalize", "Amazon Cognito", "AWS IAM"],
        correctAnswer: 2,
        explanation: "Amazon Cognito provides user identity and authentication with support for social identity providers."
    },
    {
        question: "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
        options: ["AWS CloudFormation", "AWS Config", "AWS CloudTrail", "AWS Auto Scaling"],
        correctAnswer: 0,
        explanation: "AWS CloudFormation enables Infrastructure as Code through reusable templates."
    },
    {
        question: "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
        options: ["Eliminates the need to monitor servers and applications", "Manages all the compliance and auditing tasks", "Provides custom hardware to meet any specification", "Eliminates the need to guess on infrastructure capacity needs", "Enables customers to trade their capital expenses for operational expenses"],
        correctAnswer: 3,
        explanation: "AWS eliminates capacity guessing and converts CapEx to OpEx. (Correct answers: D, E)"
    },
    {
        question: "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
        options: ["AWS Fargate", "Amazon Elastic Compute Cloud", "Amazon RDS", "AWS Database Migration service (DMS)", "AWS Lambda"],
        correctAnswer: 1,
        explanation: "EC2 and RDS both support running Microsoft SQL Server databases. (Correct answers: B, C)"
    },
    {
        question: "Which AWS Service can perform health checks on Amazon EC2 instances?",
        options: ["AWS CloudFormation", "Amazon Route 53", "Amazon Chime", "Amazon Aurora"],
        correctAnswer: 1,
        explanation: "Amazon Route 53 can perform health checks on EC2 instances and other endpoints."
    },
    {
        question: "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
        options: ["Amazon Comprehend", "AWS IAM", "Amazon Polly", "Amazon Rekognition"],
        correctAnswer: 3,
        explanation: "Amazon Rekognition provides image and video analysis including facial recognition."
    },
    {
        question: "Which of the following are examples of AWS-managed databases? (Choose TWO)",
        options: ["Amazon Neptune", "Amazon CloudSearch", "Microsoft SQL Server on Amazon EC2", "MySQL on Amazon EC2", "Amazon RDS for MySQL"],
        correctAnswer: 0,
        explanation: "Amazon Neptune and RDS for MySQL are fully managed database services. (Correct answers: A, E)"
    },
    {
        question: "A company's AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
        options: ["EC2 On-Demand Instances", "EC2 Reserved Instances - No Upfront", "EC2 Spot Instances", "EC2 Reserved Instances - All Upfront"],
        correctAnswer: 2,
        explanation: "Spot Instances offer the lowest cost for flexible, non-time-critical workloads."
    },
    {
        question: "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
        options: ["AWS account owner", "AWS technical account manager", "AWS security team", "AWS cloud support engineers"],
        correctAnswer: 0,
        explanation: "Only the AWS account owner (root account) can grant full administrative access."
    },
    {
        question: "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
        options: ["AWS File Transfer Acceleration", "AWS Server Migration Service", "AWS Database Migration Service", "AWS Application Discovery Service"],
        correctAnswer: 1,
        explanation: "AWS Server Migration Service (SMS) automates migration of on-premises workloads to AWS."
    },
    {
        question: "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
        options: ["It helps AWS customers deploy their applications without worrying about the underlying infrastructure", "It applies advanced IAM security features automatically", "It automates the provisioning and updating of your infrastructure in a safe and controlled manner", "It allows you to model your entire infrastructure in just a text file", "It compiles and builds application code in a timely manner"],
        correctAnswer: 2,
        explanation: "CloudFormation automates infrastructure provisioning and models infrastructure as code. (Correct answers: C, D)"
    },
    {
        question: "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
        options: ["On-premises", "Mixed", "Hybrid", "Cloud"],
        correctAnswer: 2,
        explanation: "Hybrid cloud deployment combines on-premises and cloud-based resources."
    },
    {
        question: "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
        options: ["CloudEndure Disaster Recovery", "CloudEndure Migration", "AWS Backup", "AWS Glue"],
        correctAnswer: 0,
        explanation: "CloudEndure Disaster Recovery enables fast recovery with minimal downtime and data loss."
    },
    {
        question: "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
        options: ["S3 Standard-IA", "S3 Intelligent-Tiering", "S3 Glacier Deep Archive", "S3 Standard"],
        correctAnswer: 3,
        explanation: "S3 Standard is ideal for frequently accessed data with stable access patterns."
    },
    {
        question: "You want to create a backup of your data in another geographical location. Where should you create this backup?",
        options: ["In another Edge location", "In another Region", "In another VPC", "In another Availability Zone"],
        correctAnswer: 1,
        explanation: "Creating backups in another Region provides geographical redundancy and disaster recovery."
    },
    {
        question: "Which statement is true in relation to the security of Amazon EC2?",
        options: ["You should use instance store volumes to store login data", "You should regularly patch the operating system and applications on your EC2 instances", "You should deploy critical components of your application in the Availability Zone that you trust", "You can track all API calls using Amazon Athena"],
        correctAnswer: 1,
        explanation: "Patching OS and applications is a customer responsibility under the shared responsibility model."
    },
    {
        question: "What does AWS Cost Explorer provide to help manage your AWS spend?",
        options: ["Cost comparisons between AWS Cloud environments and on-premises environments", "Accurate estimates of AWS service costs based on your expected usage", "Consolidated billing", "Highly accurate cost forecasts for up to 12 months ahead"],
        correctAnswer: 3,
        explanation: "AWS Cost Explorer provides cost forecasting for up to 12 months based on historical usage."
    },
    {
        question: "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
        options: ["RDS Single-AZ", "RDS Write Replica", "RDS Snapshots", "RDS Multi-AZ"],
        correctAnswer: 3,
        explanation: "RDS Multi-AZ provides automatic failover to a standby instance in another AZ."
    },
    {
        question: "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
        options: ["Deleting all EBS volumes attached to the instances", "You cannot minimize charges for on-demand instances", "Terminating the instances", "Stopping the instances"],
        correctAnswer: 3,
        explanation: "Stopping instances halts compute charges while preserving instance configuration and EBS volumes."
    },
    {
        question: "Which of the following strategies helps protect your AWS root account?",
        options: ["Delete root user access keys if you do not need them", "Apply MFA for the root account and use it for all of your work", "Access the root account only from your personal Mobile Phone", "Only share your AWS account password or access keys with trusted persons"],
        correctAnswer: 0,
        explanation: "Deleting root access keys reduces the risk of unauthorized access to the root account."
    },
    {
        question: "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
        options: ["The size of volumes provisioned per month", "The compute capacity you consume", "The amount of data you have stored in snapshots", "The compute time you consume", "The number of Snowball storage devices you request"],
        correctAnswer: 0,
        explanation: "EBS pricing is based on volume size and snapshot storage. (Correct answers: A, C)"
    },
    {
        question: "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
        options: ["Attach a separate IAM policy for each individual account", "Apply the Principle of Least Privilege", "For security purposes, you should not grant any permission to the DevOps team", "Create six different IAM passwords"],
        correctAnswer: 1,
        explanation: "The Principle of Least Privilege grants only the minimum permissions necessary."
    },
    {
        question: "Which of the following has the greatest impact on cost? (Choose TWO)",
        options: ["Compute charges", "The number of services used", "Data Transfer In charges", "Data Transfer Out charges", "The number of IAM roles provisioned"],
        correctAnswer: 0,
        explanation: "Compute and Data Transfer Out typically have the greatest cost impact. (Correct answers: A, D)"
    },
    {
        question: "Who from the following will get the largest discount?",
        options: ["A user who chooses to buy On-demand, Convertible, Partial upfront instances", "A user who chooses to buy Reserved, Convertible, All upfront instances", "A user who chooses to buy Reserved, Standard, No upfront instances", "A user who chooses to buy Reserved, Standard, All upfront instances"],
        correctAnswer: 3,
        explanation: "Reserved Standard instances with all upfront payment provide the largest discount."
    },
    {
        question: "Which of the following is an available option when purchasing Amazon EC2 instances?",
        options: ["The ability to bid to get the lowest possible prices", "The ability to register EC2 instances to get volume discounts on every hour the instances are running", "The ability to buy Dedicated Instances for up to 90% discount", "The ability to pay upfront to get lower hourly costs"],
        correctAnswer: 3,
        explanation: "Reserved Instances allow upfront payment for lower hourly costs."
    },
    {
        question: "What does the term \"Economies of scale\" mean?",
        options: ["It means that you save more when you consume more", "It means as more time passes using AWS, you pay more for its services", "It means that AWS will continuously lower costs as it grows", "It means that you have the ability to pay as you go"],
        correctAnswer: 2,
        explanation: "Economies of scale allow AWS to lower costs as their infrastructure and customer base grows."
    },
    {
        question: "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
        options: ["AWS Auto Scaling", "Amazon Elastic Compute Cloud", "Amazon Elastic File System", "Amazon ElastiCache"],
        correctAnswer: 0,
        explanation: "AWS Auto Scaling automatically adjusts capacity to maintain performance during traffic spikes."
    },
    {
        question: "Which of the below options is true of Amazon VPC?",
        options: ["Amazon VPC allows customers to control user interactions with all other AWS resources", "AWS Customers have complete control over their Amazon VPC virtual networking environment", "AWS is responsible for all the management and configuration details of Amazon VPC", "Amazon VPC helps customers to review their AWS architecture and adopt best practices"],
        correctAnswer: 1,
        explanation: "Customers have full control over their VPC networking environment including IP ranges, subnets, and routing."
    },
    {
        question: "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
        options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS TCO Calculator"],
        correctAnswer: 3,
        explanation: "AWS TCO Calculator compares total cost of ownership between on-premises and AWS."
    },
    {
        question: "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
        options: ["AWS Config", "Amazon Redshift", "Amazon MQ", "AWS Trusted Advisor", "Amazon Cognito"],
        correctAnswer: 0,
        explanation: "AWS Config and Trusted Advisor provide real-time auditing and compliance monitoring. (Correct answers: A, D)"
    },
    {
        question: "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
        options: ["AWS OpsWorks", "AWS CloudFormation", "AWS Quick Starts", "AWS CloudTrail"],
        correctAnswer: 0,
        explanation: "AWS OpsWorks provides managed instances of Chef and Puppet for configuration automation."
    },
    {
        question: "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
        options: ["Amazon Kinesis", "Amazon QuickSight", "AWS CodeDeploy", "Amazon Athena"],
        correctAnswer: 2,
        explanation: "AWS CodeDeploy automates application deployments to EC2, on-premises, and Lambda."
    },
    {
        question: "Select the services that are server-based: (Choose TWO)",
        options: ["Amazon RDS", "Amazon DynamoDB", "AWS Lambda", "AWS Fargate", "Amazon EMR"],
        correctAnswer: 0,
        explanation: "Amazon RDS and EMR are server-based services. (Correct answers: A, E)"
    },
    {
        question: "What best describes penetration testing?",
        options: ["Testing your application's response time from different locations", "Testing your network to find security vulnerabilities that an attacker could exploit", "Testing your instances to check for the unhealthy ones", "Testing your software for bugs and errors"],
        correctAnswer: 1,
        explanation: "Penetration testing identifies security vulnerabilities by simulating attacks."
    },
    {
        question: "Which of the following are use cases for Amazon EMR? (Choose TWO)",
        options: ["Enables you to backup extremely large amounts of data at very low costs", "Enables you to move Exabyte-scale data from on-premises datacenters into AWS", "Enables you to analyze and process extremely large amounts of data in a timely manner", "Enables you to easily run and scale Apache Spark, Hadoop, and other Big Data frameworks", "Enables you to easily run and manage Docker containers"],
        correctAnswer: 2,
        explanation: "EMR processes large data sets and runs big data frameworks like Spark and Hadoop. (Correct answers: C, D)"
    },
    {
        question: "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
        options: ["There is no chat feature in AWS support", "The chat feature is available for all plans for an additional fee, but you have to request it first", "At a minimum, upgrade to Business support plan", "Upgrade from the Basic Support plan to Developer Support"],
        correctAnswer: 2,
        explanation: "Chat support is available starting with the Business Support plan."
    },
    {
        question: "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn't have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
        options: ["AWS Fargate", "AWS Batch", "Amazon Personalize", "AWS Elastic Beanstalk"],
        correctAnswer: 3,
        explanation: "AWS Elastic Beanstalk simplifies deployment without requiring cloud infrastructure knowledge."
    },
    {
        question: "Which statement best describes the AWS Pay-As-You-Go pricing model?",
        options: ["With AWS, you replace low upfront expenses with large variable payments", "With AWS, you replace low upfront expenses with large fixed payments", "With AWS, you replace large upfront expenses with low fixed payments", "With AWS, you replace large capital expenses with low variable payments"],
        correctAnswer: 3,
        explanation: "AWS Pay-As-You-Go converts large upfront capital expenses into low variable operational costs."
    },
    {
        question: "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
        options: ["Database setup", "Network traffic protection", "Management of the operating system", "Access management", "Management of firewall rules"],
        correctAnswer: 0,
        explanation: "AWS manages database setup and OS maintenance for RDS. (Correct answers: A, C)"
    },
    {
        question: "Which of the following strategies help analyze costs in AWS?",
        options: ["Using tags to group resources", "Using AWS CloudFormation to automate the deployment of resources", "Deploying resources of the same type in different regions", "Configuring Amazon Inspector to automatically analyze costs and email reports"],
        correctAnswer: 0,
        explanation: "Tags enable cost allocation and analysis by grouping resources logically."
    },
    {
        question: "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
        options: ["AWS Direct Connect", "Amazon Comprehend", "AWS Snowmobile", "AWS VPN"],
        correctAnswer: 0,
        explanation: "AWS Direct Connect provides dedicated network connection from on-premises to AWS."
    },
    {
        question: "What is the main benefit of the AWS Storage Gateway service?",
        options: ["It automates the process of building, maintaining, and running ETL jobs", "It provides physical devices to migrate data from on premises to AWS", "It allows integration of on-premises IT environments with Cloud Storage", "It provides hardware-based key storage for regulatory compliance"],
        correctAnswer: 2,
        explanation: "AWS Storage Gateway bridges on-premises environments with AWS cloud storage."
    },
    {
        question: "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
        options: ["Amazon S3 Glacier Deep Archive", "Amazon S3 Standard-Infrequent Access", "Amazon S3 Glacier", "Instance Store"],
        correctAnswer: 1,
        explanation: "S3 Standard-IA offers immediate retrieval at lower cost than S3 Standard for infrequent access."
    },
    {
        question: "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
        options: ["AWS Global Accelerator", "AWS Data Pipeline", "AWS DAX Accelerator", "AWS Transfer Acceleration"],
        correctAnswer: 0,
        explanation: "AWS Global Accelerator routes traffic to optimal endpoints for best performance."
    },
    {
        question: "Why are Serverless Architectures more economical than Server-based Architectures?",
        options: ["Serverless Architectures use new powerful computing devices", "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed", "When you reserve serverless capacity, you will get large discounts compared to server reservation", "With Serverless Architectures you have the ability to scale automatically up or down as demand changes"],
        correctAnswer: 1,
        explanation: "Serverless only charges for actual execution time, not idle server time."
    },
    {
        question: "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
        options: ["Point-to-point connectivity between an on-premises data center and AWS", "Detects configuration changes in the AWS environment", "DNS configuration and management", "Manages global application traffic through a variety of routing types", "Provides infrastructure security optimization recommendations"],
        correctAnswer: 2,
        explanation: "Route 53 provides DNS management and traffic routing capabilities. (Correct answers: C, D)"
    },
    {
        question: "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
        options: ["AWS Snowmobile", "AWS Import/Export", "AWS DMS", "AWS Snowball"],
        correctAnswer: 3,
        explanation: "AWS Snowball is cost-effective for transferring large amounts of data (terabytes to petabytes)."
    },
    {
        question: "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
        options: ["Amazon Redshift", "Amazon Athena", "AWS Cloud9", "Amazon ElastiCache for Redis"],
        correctAnswer: 3,
        explanation: "ElastiCache for Redis provides in-memory data store with sub-millisecond latency."
    }
    ],
    7: [
    {
        question: "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
        options: ["Delete the encryption keys once your data is encrypted", "With AWS you do not need to worry about encryption", "Enable S3 Encryption", "Encrypt the data prior to uploading it", "Delete all IAM users that have access to S3"],
        correctAnswer: 2,
        explanation: "Enable S3 Encryption and encrypt data before upload are both valid security practices. (Correct answers: C, D)"
    },
    {
        question: "Which AWS service helps developers compile and test their code?",
        options: ["AWS CodeDeploy", "AWS CodeCommit", "CloudEndure", "AWS CodeBuild"],
        correctAnswer: 3,
        explanation: "AWS CodeBuild is a fully managed build service that compiles source code and runs tests."
    },
    {
        question: "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
        options: ["Using default encryption for any number of S3 buckets", "The number of EBS volumes attached to your instances", "The storage class used for the objects stored", "Creating and deleting S3 buckets", "The total size in gigabytes of all objects stored"],
        correctAnswer: 2,
        explanation: "S3 pricing is based on storage class and total size of stored objects. (Correct answers: C, E)"
    },
    {
        question: "What does the Amazon CloudFront service provide? (Choose TWO)",
        options: ["Tracks user activity and API usage", "Increases application availability by caching at the edge", "Enables faster disaster recovery", "Stores archived data at very low costs", "Delivers content to end users with low latency"],
        correctAnswer: 1,
        explanation: "CloudFront caches content at edge locations and delivers with low latency. (Correct answers: B, E)"
    },
    {
        question: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
        options: ["Amazon Lightsail", "Amazon Connect", "AWS Direct Connect", "AWS Elastic Beanstalk"],
        correctAnswer: 1,
        explanation: "Amazon Connect is a cloud-based contact center service for customer engagement."
    },
    {
        question: "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
        options: ["Using the AWS Cost & Usage Report", "Using the AWS Total Cost of Ownership (TCO) dashboard", "Using the AWS CloudWatch logs dashboard", "Using the Amazon VPC dashboard"],
        correctAnswer: 0,
        explanation: "AWS Cost & Usage Report provides detailed cost and usage information."
    },
    {
        question: "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
        options: ["Convertible", "Expedited", "Bulk", "Spot", "Standard"],
        correctAnswer: 0,
        explanation: "Convertible and Standard are the two types of Reserved Instances. (Correct answers: A, E)"
    },
    {
        question: "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
        options: ["AWS Artifact", "AWS Config", "Amazon CloudWatch", "AWS CloudTrail"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides on-demand access to AWS compliance reports and certifications."
    },
    {
        question: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
        options: ["AWS Resource Groups", "AWS Placement Groups", "AWS Management Console", "AWS Tag Editor"],
        correctAnswer: 0,
        explanation: "AWS Resource Groups allows you to organize and manage resources by custom criteria."
    },
    {
        question: "Which AWS service collects metrics from running EC2 instances?",
        options: ["Amazon Inspector", "Amazon CloudWatch", "AWS CloudFormation", "AWS CloudTrail"],
        correctAnswer: 1,
        explanation: "Amazon CloudWatch collects and monitors metrics from EC2 instances and other AWS resources."
    },
    {
        question: "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
        options: ["Amazon Detective", "AWS X-Ray", "AWS Security Hub", "AWS Shield"],
        correctAnswer: 1,
        explanation: "AWS X-Ray helps analyze and debug applications to identify performance bottlenecks."
    },
    {
        question: "Which of the following compute resources are serverless? (Choose TWO)",
        options: ["Amazon EC2", "AWS Fargate", "AWS Lambda", "Amazon ECS", "Amazon EMR"],
        correctAnswer: 1,
        explanation: "AWS Fargate and AWS Lambda are serverless compute services. (Correct answers: B, C)"
    },
    {
        question: "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
        options: ["Use EC2 Dedicated Hosts", "Use EC2 Reserved Instances", "Use EC2 Spot Instances", "Use EC2 On-demand Instances"],
        correctAnswer: 0,
        explanation: "EC2 Dedicated Hosts provide physical servers dedicated to a single customer for compliance."
    },
    {
        question: "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
        options: ["Tagging Enforcement", "Architecture Optimization", "Budgeting Processes", "Resource Controls"],
        correctAnswer: 1,
        explanation: "Architecture Optimization focuses on refining workloads to maximize efficiency and reduce costs."
    },
    {
        question: "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
        options: ["RedShift", "RDS", "CloudHSM", "DMS"],
        correctAnswer: 1,
        explanation: "Amazon RDS supports ACID transactions required for financial applications."
    },
    {
        question: "What can you use to assign permissions directly to an IAM user?",
        options: ["IAM Identity", "IAM Group", "IAM Role", "IAM Policy"],
        correctAnswer: 3,
        explanation: "IAM Policies define permissions and can be attached directly to IAM users."
    },
    {
        question: "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
        options: ["AWS allows customers to launch powerful EC2 instances to handle spikes in load", "AWS allows customers to pay upfront to get bigger discounts", "AWS allows customers to launch and terminate EC2 instances based on demand", "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs"],
        correctAnswer: 2,
        explanation: "AWS elasticity allows launching and terminating instances based on demand, avoiding over-provisioning."
    },
    {
        question: "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
        options: ["PostgreSQL", "Oracle", "Microsoft SQL Server", "Teradata"],
        correctAnswer: 3,
        explanation: "Teradata is not supported by Amazon RDS. RDS supports PostgreSQL, Oracle, SQL Server, MySQL, MariaDB, and Aurora."
    },
    {
        question: "Which of the following AWS services would help you migrate on-premise databases to AWS?",
        options: ["AWS DMS", "Amazon S3 Transfer Acceleration", "AWS Directory Service", "AWS Transit Gateway"],
        correctAnswer: 0,
        explanation: "AWS Database Migration Service (DMS) facilitates database migration to AWS."
    },
    {
        question: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
        options: ["Run WordPress on an Amazon Lightsail instance", "Install WordPress on an Amazon EC2 instance", "Use the Amazon S3 Web hosting feature", "Host the website directly on AWS Cloud Development Kit (AWS CDK)"],
        correctAnswer: 0,
        explanation: "Amazon Lightsail provides pre-configured WordPress instances for easy deployment."
    },
    {
        question: "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
        options: ["AWS KMS", "AWS Certificate Manager", "AWS CodeDeploy", "AWS CodeCommit", "CloudHSM"],
        correctAnswer: 0,
        explanation: "AWS KMS and CloudHSM both manage encryption keys in AWS. (Correct answers: A, E)"
    },
    {
        question: "Which of the following services allows you to install and run custom relational database software?",
        options: ["Amazon EC2", "Amazon Cognito", "Amazon RDS", "Amazon Inspector"],
        correctAnswer: 0,
        explanation: "Amazon EC2 allows full control to install and run custom database software."
    },
    {
        question: "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
        options: ["Auto Scaling", "ELB", "Amazon Route53", "Amazon Elastic Container Service"],
        correctAnswer: 0,
        explanation: "Auto Scaling dynamically adjusts capacity based on demand and load patterns."
    },
    {
        question: "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
        options: ["AWS IAM", "AWS Outposts", "AWS Federation", "Amazon Redshift"],
        correctAnswer: 0,
        explanation: "AWS IAM (Identity and Access Management) manages user identities and permissions in AWS."
    },
    {
        question: "What are some key design principles for designing public cloud systems? (Choose TWO)",
        options: ["Reserved capacity instead of on demand", "Loose coupling over tight coupling", "Servers instead of managed services", "Disposable resources instead of fixed servers", "Multi-AZ deployments instead of multi-region deployments"],
        correctAnswer: 1,
        explanation: "Loose coupling and disposable resources are key cloud design principles. (Correct answers: B, D)"
    },
    {
        question: "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
        options: ["AWS CloudTrail Trails", "IAM Credential Report", "AWS Artifact reports", "AWS Cost and Usage Report"],
        correctAnswer: 1,
        explanation: "IAM Credential Report provides a list of all users and credential status."
    },
    {
        question: "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
        options: ["AWS Shield", "AWS Certificate Manager", "AWS CloudHSM", "AWS WAF"],
        correctAnswer: 2,
        explanation: "AWS CloudHSM allows you to generate and manage your own encryption keys using dedicated hardware."
    },
    {
        question: "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
        options: ["There is no need to architect for these capabilities in AWS, as AWS is redundant by default", "Deploy the application in a single Availability Zone", "Deploy the application in multiple Availability Zones in a single AWS region", "Deploy the application in multiple Availability Zones in multiple AWS regions"],
        correctAnswer: 3,
        explanation: "Multi-region, multi-AZ deployment provides the highest level of redundancy and fault tolerance."
    },
    {
        question: "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
        options: ["Instance Store", "S3", "DynamoDB", "Amazon Route 53", "AWS VPN"],
        correctAnswer: 1,
        explanation: "S3 and DynamoDB automatically replicate data across multiple AZs. (Correct answers: B, C)"
    },
    {
        question: "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
        options: ["Number of Requests", "Traffic Distribution", "Number of Volumes", "Instance type", "Storage Class"],
        correctAnswer: 0,
        explanation: "CloudFront pricing is based on number of requests and traffic distribution. (Correct answers: A, B)"
    },
    {
        question: "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
        options: ["AWS Service Control Policies (SCPs)", "AWS Artifact", "AWS Budgets", "AWS Acceptable Use Policy"],
        correctAnswer: 3,
        explanation: "AWS Acceptable Use Policy outlines prohibited uses of AWS services."
    },
    {
        question: "Which of the following security resources are available to any user for free? (Choose TWO)",
        options: ["AWS Bulletins", "AWS TAM", "AWS Support API", "AWS Security Blog", "AWS Classroom Training"],
        correctAnswer: 0,
        explanation: "AWS Bulletins and AWS Security Blog are freely available to all users. (Correct answers: A, D)"
    },
    {
        question: "How can you protect data stored on Amazon S3 from accidental deletion?",
        options: ["By enabling S3 Versioning", "By configuring S3 Bucket Policies", "By configuring S3 Lifecycle Policies", "By disabling S3 Cross-Region Replication (CRR)"],
        correctAnswer: 0,
        explanation: "S3 Versioning preserves all versions of objects, protecting against accidental deletion."
    },
    {
        question: "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
        options: ["Securing regions and edge locations", "Performing auditing tasks", "Monitoring AWS resources usage", "Securing access to AWS resources"],
        correctAnswer: 0,
        explanation: "AWS is responsible for physical security of infrastructure including regions and edge locations."
    },
    {
        question: "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
        options: ["Business & Enterprise Support", "Basic & Developer Support", "Developer & Enterprise Support", "Developer & Business Support"],
        correctAnswer: 1,
        explanation: "Basic and Developer Support plans provide access to only seven core Trusted Advisor checks."
    },
    {
        question: "Which of the following is NOT a benefit of using AWS Lambda?",
        options: ["AWS Lambda runs code without provisioning or managing servers", "AWS Lambda provides resizable compute capacity in the cloud", "There is no charge when your AWS Lambda code is not running", "AWS Lambda can be called directly from any mobile app"],
        correctAnswer: 3,
        explanation: "Lambda cannot be called directly from mobile apps; it requires API Gateway or SDK integration. Lambda provides serverless compute, not resizable compute capacity."
    },
    {
        question: "How does AWS help customers achieve compliance in the cloud?",
        options: ["It's not possible to meet regulatory compliance requirements in the Cloud", "AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations", "AWS has many common assurance certifications such as ISO 9001 and HIPAA", "Many AWS services are assessed regularly to comply with local laws and regulations"],
        correctAnswer: 2,
        explanation: "AWS maintains various compliance certifications like ISO 9001 and HIPAA to help customers meet requirements."
    },
    {
        question: "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
        options: ["Your security team", "Your development team", "AWS", "Your internal DevOps team"],
        correctAnswer: 2,
        explanation: "AWS manages scaling for DynamoDB as it is a fully managed service."
    },
    {
        question: "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
        options: ["Amazon Elastic Transcoder", "Amazon Pinpoint", "Amazon S3", "Amazon Rekognition"],
        correctAnswer: 0,
        explanation: "Amazon Elastic Transcoder converts media files between different formats for playback on various devices."
    },
    {
        question: "What are the benefits of the AWS Organizations service? (Choose TWO)",
        options: ["Control access to AWS services", "Help organizations design and maintain an accelerated path to successful cloud adoption", "Manage your organization's payment methods", "Help organization achieve their desired business outcomes with AWS", "Consolidate billing across multiple AWS accounts"],
        correctAnswer: 0,
        explanation: "AWS Organizations controls access to services and consolidates billing. (Correct answers: A, E)"
    },
    {
        question: "Which AWS service allows you to build a data warehouse in the cloud?",
        options: ["AWS Shield", "Amazon Redshift", "Amazon RDS", "Amazon Comprehend"],
        correctAnswer: 1,
        explanation: "Amazon Redshift is a fully managed data warehouse service for analytics."
    },
    {
        question: "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
        options: ["AWS Application Discovery service", "Amazon DevPay", "AWS Marketplace", "Resource Groups"],
        correctAnswer: 2,
        explanation: "AWS Marketplace is a digital catalog of third-party software and services."
    },
    {
        question: "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
        options: ["AWS CodePipeline", "AWS CodeCommit", "AWS X-Ray", "Amazon Inspector"],
        correctAnswer: 1,
        explanation: "AWS CodeCommit is a secure Git-based repository service for version control."
    },
    {
        question: "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
        options: ["Amazon Cognito", "AWS Systems Manager", "AWS Cloud9", "Amazon Route 53"],
        correctAnswer: 3,
        explanation: "Amazon Route 53 provides latency-based routing to direct users to the nearest region."
    },
    {
        question: "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
        options: ["Federation", "Access keys", "IAM Permissions", "WAF rules"],
        correctAnswer: 0,
        explanation: "Federation allows users to authenticate using existing corporate identity providers."
    },
    {
        question: "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
        options: ["Awareness and Training", "Communications controls", "Data center security controls", "Environmental controls", "Resource Configuration Management"],
        correctAnswer: 2,
        explanation: "Customers inherit physical security controls like data center and environmental controls. (Correct answers: C, D)"
    },
    {
        question: "What can you access by visiting the URL: http://status.aws.amazon.com?",
        options: ["AWS Billing Dashboard", "AWS Cost Dashboard", "AWS Service Health Dashboard", "AWS Security Dashboard"],
        correctAnswer: 2,
        explanation: "status.aws.amazon.com provides the AWS Service Health Dashboard showing service status."
    },
    {
        question: "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
        options: ["Store media assets in the region closest to your end users", "Store media assets on an additional EBS volume and increase the capacity of your server", "Replicate media assets to at least two availability zones", "Reduce the size of media assets using the Amazon Elastic Transcoder", "Store media assets in S3 and use CloudFront to distribute these assets"],
        correctAnswer: 0,
        explanation: "Storing assets close to users and using CloudFront reduces latency. (Correct answers: A, E)"
    },
    {
        question: "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
        options: ["Use manual monitoring techniques to protect your AWS resources", "Use IAM roles to grant temporary access instead of long-term credentials", "Scale horizontally to protect from failures", "Enable real-time traceability", "Never store sensitive data in the cloud"],
        correctAnswer: 1,
        explanation: "Using IAM roles for temporary access and enabling traceability are security design principles. (Correct answers: B, D)"
    },
    {
        question: "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
        options: ["Use the AWS Pricing Calculator service to monitor the costs incurred by each department", "Use Amazon Aurora to forecast AWS spending based on usage", "Apply cost allocation tags to segment AWS costs by different projects and departments", "Configure AWS Price List API to receive billing updates for each department automatically"],
        correctAnswer: 2,
        explanation: "Cost allocation tags enable categorizing and tracking costs by department or project."
    }
    ],
    8: [
    {
        question: "What is the main benefit of attaching security groups to an Amazon RDS instance?",
        options: ["Manages user access and encryption keys", "Controls what IP address ranges can connect to your database instance", "Deploys SSL/TLS certificates for use with your database instance", "Distributes incoming traffic across multiple targets"],
        correctAnswer: 1,
        explanation: "Security groups act as virtual firewalls controlling IP address ranges that can connect to RDS instances."
    },
    {
        question: "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
        options: ["EC2 launch type", "Fargate launch type", "Lightsail launch type", "Lambda launch type"],
        correctAnswer: 0,
        explanation: "EC2 launch type provides full control over the underlying infrastructure, while Fargate is serverless."
    },
    {
        question: "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
        options: ["Try to remove unnecessary AWS accounts", "Add the accounts to an AWS Organization and use Consolidated Billing", "Track the AWS charges that are incurred by the member accounts", "Enable AWS tiered-pricing before provisioning resources"],
        correctAnswer: 1,
        explanation: "AWS Organizations with Consolidated Billing combines usage across accounts for volume discounts."
    },
    {
        question: "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
        options: ["Network ACLs and Traffic Manager", "Network ACLs and Subnets", "Security Groups and Internet Gateways", "Security Groups and Network ACLs"],
        correctAnswer: 3,
        explanation: "Security Groups and Network ACLs both control inbound and outbound traffic in a VPC."
    },
    {
        question: "What does the AWS \"Business\" support plan provide? (Choose TWO)",
        options: ["Access to the full set of Trusted Advisor checks", "Support Concierge Service", "Less than 15 minutes response-time support if your business critical system goes down", "AWS Support API", "Proactive Technical Account Management"],
        correctAnswer: 0,
        explanation: "Business Support includes full Trusted Advisor checks and AWS Support API. (Correct answers: A, D)"
    },
    {
        question: "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
        options: ["Amazon Simple Storage Service", "AWS Elastic Beanstalk", "AWS CodeCommit", "Amazon Elastic File System"],
        correctAnswer: 1,
        explanation: "AWS Elastic Beanstalk automates application deployment, scaling, and management."
    },
    {
        question: "Which statement is true in relation to security in AWS?",
        options: ["AWS manages everything related to EC2 operating systems", "AWS customers are responsible for patching any database software running on Amazon EC2", "Server side encryption is the responsibility of AWS", "AWS is responsible for the security of your application"],
        correctAnswer: 1,
        explanation: "Under the shared responsibility model, customers manage OS and database software on EC2."
    },
    {
        question: "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
        options: ["Improves Fault-Tolerance", "Provides your business with a seamless remote accessibility", "Prevents unauthorized users from getting into your network", "Provides automatic data backups", "Can be scaled manually in a shorter period of time"],
        correctAnswer: 0,
        explanation: "EC2 improves fault tolerance and can be scaled quickly. (Correct answers: A, E)"
    },
    {
        question: "Which statement is true regarding AWS pricing? (Choose TWO)",
        options: ["With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee", "You have no responsibility for third-party software license costs", "You only pay for the individual services that you need with no long-term contracts", "For some services, you have to pay a startup fee in order to get the service running", "There are no reservations on AWS, you only pay for what you use"],
        correctAnswer: 0,
        explanation: "AWS offers pay-as-you-go with no upfront fees and no long-term contracts. (Correct answers: A, C)"
    },
    {
        question: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
        options: ["AWS Control Tower", "Amazon Macie", "AWS Systems Manager Patch Manager", "AWS Security Hub"],
        correctAnswer: 0,
        explanation: "AWS Control Tower automates setup of a well-architected multi-account environment."
    },
    {
        question: "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
        options: ["Use CloudFront to monitor the CPU usage", "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value", "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%", "Use SNS to monitor the utilization of the server"],
        correctAnswer: 2,
        explanation: "CloudWatch Alarms can monitor metrics and trigger notifications when thresholds are exceeded."
    },
    {
        question: "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
        options: ["Amazon EBS", "Amazon RDS", "You can't run a database inside an Amazon EC2 instance", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Amazon EBS provides persistent block storage for databases on EC2 instances."
    },
    {
        question: "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
        options: ["Amazon CloudWatch", "Amazon CloudSearch", "Amazon Elastic MapReduce", "Amazon CloudHSM"],
        correctAnswer: 0,
        explanation: "Amazon CloudWatch monitors applications and infrastructure metrics."
    },
    {
        question: "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
        options: ["Storage consumed", "Number of requests to your functions", "Number of volumes", "Placement groups", "Compute time consumed"],
        correctAnswer: 1,
        explanation: "Lambda pricing is based on number of requests and compute time (GB-seconds). (Correct answers: B, E)"
    },
    {
        question: "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
        options: ["An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it", "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it", "IAM users are more cost effective than IAM roles", "A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it", "An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it"],
        correctAnswer: 0,
        explanation: "Users have permanent credentials for one person; roles provide temporary credentials for anyone. (Correct answers: A, B)"
    },
    {
        question: "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
        options: ["Deleting unused buckets", "Using reservations", "Deleting unnecessary snapshots", "Changing the type of the volume", "Distributing requests to multiple volumes"],
        correctAnswer: 2,
        explanation: "Deleting snapshots and using cheaper volume types reduce EBS costs. (Correct answers: C, D)"
    },
    {
        question: "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
        options: ["Notifies AWS customers about abuse events once they are reported", "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise", "Helps AWS customers identify the root cause of potential security issues", "Checks security groups for rules that allow unrestricted access to AWS resources"],
        correctAnswer: 1,
        explanation: "GuardDuty provides intelligent threat detection using machine learning to monitor for malicious activity."
    },
    {
        question: "Which database service should you use if your application and data schema require \"joins\" or complex transactions?",
        options: ["Amazon RDS", "AWS Outposts", "Amazon DocumentDB", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Amazon RDS supports relational databases with joins and ACID transactions."
    },
    {
        question: "Which of the following makes it easier for you to categorize, manage and filter your resources?",
        options: ["Amazon CloudWatch", "AWS Service Catalog", "AWS Directory Service", "AWS Tagging"],
        correctAnswer: 3,
        explanation: "AWS Tags enable categorization, management, and filtering of resources."
    },
    {
        question: "What should you consider when storing data in Amazon Glacier?",
        options: ["Amazon Glacier only accepts data in a compressed format", "Glacier can only be used to store frequently accessed data and data archives", "Amazon Glacier does not provide immediate retrieval of data", "Attach Glacier to an EC2 Instance to be able to store data"],
        correctAnswer: 2,
        explanation: "Glacier is archival storage with retrieval times ranging from minutes to hours."
    },
    {
        question: "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
        options: ["Amazon EC2", "AWS Batch", "Lambda@Edge", "AWS Fargate"],
        correctAnswer: 1,
        explanation: "AWS Batch efficiently runs batch computing workloads at any scale."
    },
    {
        question: "How can you increase your application's fault-tolerance while it is being hosted in AWS?",
        options: ["Deploy your application across multiple EC2 instances", "Deploy your application across multiple Availability Zones", "Host your application on one powerful EC2 instance type instead of multiple smaller instances", "Deploy the underlying application resources across multiple subnets"],
        correctAnswer: 1,
        explanation: "Multi-AZ deployment provides fault tolerance against AZ failures."
    },
    {
        question: "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
        options: ["Developer", "Premium", "Enterprise", "Standard", "Business"],
        correctAnswer: 2,
        explanation: "Enterprise and Business Support provide 24/7 access to Cloud Support Engineers. (Correct answers: C, E)"
    },
    {
        question: "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
        options: ["IAM group", "IAM user", "IAM role", "AWS account root user", "TAM"],
        correctAnswer: 1,
        explanation: "IAM users and root users use access keys for programmatic access. (Correct answers: B, D)"
    },
    {
        question: "Which of the following is a benefit of the \"Loose Coupling\" architecture principle?",
        options: ["It eliminates the need for change management", "It allows for Cross-Region Replication", "It helps AWS customers reduce Privileged Access to AWS resources", "It allows individual application components or services to be modified without affecting other components"],
        correctAnswer: 3,
        explanation: "Loose coupling enables independent modification of components without impacting others."
    },
    {
        question: "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
        options: ["Amazon Elastic Block Store", "AWS Storage Gateway", "Amazon Elastic File System", "S3"],
        correctAnswer: 2,
        explanation: "Amazon EFS provides shared file storage with high throughput to multiple EC2 instances."
    },
    {
        question: "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
        options: ["On-premises", "IaaS", "PaaS", "Cloud"],
        correctAnswer: 3,
        explanation: "Cloud deployment eliminates the need for physical data center management."
    },
    {
        question: "What are the benefits of the AWS Marketplace service? (Choose TWO)",
        options: ["Protects customers by performing periodic security checks on listed products", "Per-second billing", "Provides cheaper options for purchasing Amazon EC2 on-demand instances", "Provides flexible pricing options that suit most customer needs", "Provides software solutions that run on AWS or any other Cloud vendor"],
        correctAnswer: 3,
        explanation: "AWS Marketplace offers flexible pricing and software that runs on AWS. (Correct answers: D, E)"
    },
    {
        question: "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
        options: ["Elasticity", "Durability", "Traceability", "Accessibility"],
        correctAnswer: 1,
        explanation: "Automatic replication within an AZ improves durability and protects against hardware failures."
    },
    {
        question: "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can't afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
        options: ["Savings Plans", "Spot Instances", "Reserved Instances", "On-Demand Instances"],
        correctAnswer: 3,
        explanation: "On-Demand instances provide guaranteed capacity for short-term spikes without commitment."
    },
    {
        question: "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
        options: ["Amazon EFS", "AWS Secrets Manager", "AWS Systems Manager", "Amazon CloudFront"],
        correctAnswer: 3,
        explanation: "CloudFront integrates with Shield and WAF for comprehensive DDoS protection."
    },
    {
        question: "Which of the following services is used when encrypting EBS volumes?",
        options: ["AWS WAF", "AWS KMS", "Amazon Macie", "Amazon GuardDuty"],
        correctAnswer: 1,
        explanation: "AWS KMS (Key Management Service) manages encryption keys for EBS volumes."
    },
    {
        question: "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
        options: ["Download all the attached policies in a safe place", "Delete all IAM accounts and recreate them", "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired", "Rotate all access keys", "Change the email address and password of the root user account and enable MFA"],
        correctAnswer: 3,
        explanation: "Rotate all access keys and secure the root account immediately. (Correct answers: D, E)"
    },
    {
        question: "What is the Amazon ElastiCache service used for? (Choose TWO)",
        options: ["Provide an in-memory data storage service", "Reduce delivery costs using Edge Locations", "Improve web application performance", "Provide a Chef-compatible cache to speed up application response", "Distribute requests to multiple instances"],
        correctAnswer: 0,
        explanation: "ElastiCache provides in-memory caching to improve application performance. (Correct answers: A, C)"
    },
    {
        question: "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
        options: ["Deploy your resources across multiple Availability Zones", "Use Amazon EC2 Auto Scaling", "Deploy your resources in another region", "Use Elastic Load Balancing", "Use Serverless Computing whenever possible"],
        correctAnswer: 1,
        explanation: "Auto Scaling and serverless computing leverage elasticity for cost savings. (Correct answers: B, E)"
    },
    {
        question: "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
        options: ["They provide free capacity when testing your new applications", "They are cheaper than all other EC2 options", "They remove the need to buy \"safety net\" capacity to handle periodic traffic spikes", "They only require 1-2 days for setup and configuration", "You can increase or decrease your compute capacity depending on the demands of your application"],
        correctAnswer: 2,
        explanation: "On-Demand instances eliminate over-provisioning and allow flexible capacity adjustment. (Correct answers: C, E)"
    },
    {
        question: "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
        options: ["It is a data center designed to be completely isolated from other data centers in the same region", "It is a collection of data centers distributed in multiple countries", "It is a logically isolated network of the AWS Cloud", "It is a distinct location within a region that is insulated from failures in other Availability Zones"],
        correctAnswer: 3,
        explanation: "Availability Zones are isolated locations within a region designed for fault tolerance."
    },
    {
        question: "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
        options: ["Regions", "Transportation devices", "Support plans", "Edge locations"],
        correctAnswer: 0,
        explanation: "Deploying across multiple Regions provides geographic disaster recovery capability."
    },
    {
        question: "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company's responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
        options: ["Start the migration process immediately as all AWS services are PCI compliant", "Ensure that AWS services are configured properly to meet all PCI DSS standards", "Restrict any access to cardholder data and create a policy that addresses information security for all personnel", "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements", "Ensure that all PCI DSS physical security requirements are met"],
        correctAnswer: 1,
        explanation: "Customers must configure services properly and implement access controls for PCI compliance. (Correct answers: B, C)"
    },
    {
        question: "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
        options: ["100 PetaBytes", "Virtually unlimited storage", "5 TeraBytes", "10 Exabytes"],
        correctAnswer: 1,
        explanation: "Amazon S3 provides virtually unlimited storage capacity per account."
    },
    {
        question: "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
        options: ["Operational Excellence", "Security", "Performance Efficiency", "Reliability"],
        correctAnswer: 2,
        explanation: "Performance Efficiency pillar focuses on selecting appropriate resources for workload requirements."
    },
    {
        question: "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
        options: ["Amazon Route 53", "Amazon Connect", "Amazon CloudFront", "Amazon EC2"],
        correctAnswer: 2,
        explanation: "Amazon CloudFront is a CDN that delivers content globally with low latency."
    },
    {
        question: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        options: ["Conduct penetration testing using Amazon Inspector, and then notify AWS support", "Request and wait for approval from the customer's internal security team, and then conduct testing", "Notify AWS support, and then conduct testing immediately", "Request and wait for approval from AWS support, and then conduct testing"],
        correctAnswer: 3,
        explanation: "Customers must request and receive approval from AWS before conducting penetration testing."
    },
    {
        question: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage report", "AWS Billing dashboard"],
        correctAnswer: 2,
        explanation: "AWS Cost and Usage Report provides the most detailed and granular billing data."
    },
    {
        question: "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
        options: ["AWS Regions", "Availability Zones", "Edge locations", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "Availability Zones consist of one or more data centers with redundant infrastructure."
    },
    {
        question: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        options: ["A minimum of one", "A minimum of two", "A minimum of three", "A minimum of four or more"],
        correctAnswer: 1,
        explanation: "Provisioning across at least two AZs provides high availability and fault tolerance."
    },
    {
        question: "The AWS Cloud's multiple Regions are an example of:",
        options: ["Agility", "Global infrastructure", "Elasticity", "Pay-as-you-go pricing"],
        correctAnswer: 1,
        explanation: "Multiple AWS Regions demonstrate AWS's global infrastructure footprint."
    },
    {
        question: "Which AWS service can be used to manually launch instances based on resource requirements?",
        options: ["Amazon EBS", "Amazon S3", "Amazon EC2", "Amazon ECS"],
        correctAnswer: 2,
        explanation: "Amazon EC2 allows manual launching of virtual server instances."
    },
    {
        question: "Which is a recommended pattern for designing a highly available architecture on AWS?",
        options: ["Ensure that components have low-latency network connectivity", "Run enough Amazon EC2 instances to operate at peak load", "Ensure that the application is designed to accommodate failure of any single component", "Use a monolithic application that handles all operations"],
        correctAnswer: 2,
        explanation: "Designing for failure of any single component ensures high availability."
    },
    {
        question: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        options: ["High availability", "Shared security model", "Elasticity", "Pay-as-you-go pricing", "Reliability"],
        correctAnswer: 2,
        explanation: "Elasticity and pay-as-you-go pricing enable cost-effective handling of dynamic demand. (Correct answers: C, D)"
    }
    ],
    9: [
    {
        question: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        options: ["AWS Well-Architected Framework documentation", "Amazon CloudFront", "AWS CodeCommit", "AWS Quick Start reference deployments"],
        correctAnswer: 3,
        explanation: "AWS Quick Start provides automated reference deployments for popular IT solutions."
    },
    {
        question: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        options: ["It simplifies relational database administration tasks", "It provides 99.99999999999% reliability and durability", "It automatically scales databases for loads", "It enables users to dynamically adjust CPU and RAM resources"],
        correctAnswer: 0,
        explanation: "Amazon RDS automates time-consuming database administration tasks like backups and patching."
    },
    {
        question: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        options: ["Amazon EC2", "Amazon Route 53", "Amazon ElastiCache", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Amazon EC2 allows full control to install and manage custom relational databases."
    },
    {
        question: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
        options: ["Launch the instances across multiple Availability Zones in a single AWS Region", "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone", "Launch the instances in multiple AWS Regions but in the same Availability Zone", "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones"],
        correctAnswer: 0,
        explanation: "Deploying across multiple AZs in a region provides high availability and fault tolerance."
    },
    {
        question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        options: ["A public and private key-pair", "Amazon Inspector", "AWS Identity and Access Management (IAM) policies", "Security Groups"],
        correctAnswer: 2,
        explanation: "IAM policies control access permissions to S3 buckets and objects."
    },
    {
        question: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        options: ["AWS VPN", "Amazon Redshift", "API Gateway", "Amazon Direct Connect"],
        correctAnswer: 0,
        explanation: "AWS VPN and Direct Connect both enable connectivity between VPC and on-premises. (Correct answers: A, D)"
    },
    {
        question: "Which AWS service or feature can be used to monitor CPU usage?",
        options: ["AWS CloudTrail", "VPC Flow Logs", "Amazon CloudWatch", "AWS Config"],
        correctAnswer: 2,
        explanation: "Amazon CloudWatch collects and monitors metrics including CPU usage."
    },
    {
        question: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        options: ["Granting access to individuals and services", "Encrypting data in transit", "Updating Amazon EC2 host firmware", "Updating operating systems"],
        correctAnswer: 2,
        explanation: "AWS manages the underlying infrastructure including EC2 host firmware updates."
    },
    {
        question: "Which of the following security-related actions are available at no cost?",
        options: ["Calling AWS Support", "Contacting AWS Professional Services to request a workshop", "Accessing forums, blogs, and whitepapers", "Attending AWS classes at a local university"],
        correctAnswer: 2,
        explanation: "AWS forums, blogs, and whitepapers are freely available resources."
    },
    {
        question: "Which storage service can be used as a low-cost option for hosting static websites?",
        options: ["Amazon Glacier", "Amazon DynamoDB", "Amazon Elastic File System (Amazon EFS)", "Amazon Simple Storage Service (Amazon S3)"],
        correctAnswer: 3,
        explanation: "Amazon S3 provides cost-effective static website hosting capabilities."
    },
    {
        question: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
        options: ["Application security", "Edge location management", "Patch management", "Client-side data"],
        correctAnswer: 1,
        explanation: "AWS is solely responsible for managing the physical infrastructure including edge locations."
    },
    {
        question: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
        options: ["Multiple Availability Zones", "Performance efficiency", "Security", "Encryption usage", "High availability"],
        correctAnswer: 1,
        explanation: "Performance Efficiency and Security are two of the five Well-Architected Framework pillars. (Correct answers: B, C)"
    },
    {
        question: "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
        options: ["AWS Trusted Advisor", "Amazon Inspector", "Amazon CloudWatch", "AWS CloudTrail"],
        correctAnswer: 0,
        explanation: "AWS Trusted Advisor checks for security groups with unrestricted access."
    },
    {
        question: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
        options: ["Use manual monitoring", "Use fixed servers", "Implement loose coupling", "Rely on individual components", "Design for scalability"],
        correctAnswer: 2,
        explanation: "Loose coupling and scalability are key principles for cloud architecture. (Correct answers: C, E)"
    },
    {
        question: "When architecting cloud applications, which of the following are a key design principle?",
        options: ["Use the largest instance possible", "Provision capacity for peak load", "Use the Scrum development process", "Implement elasticity"],
        correctAnswer: 3,
        explanation: "Elasticity allows applications to scale resources based on actual demand."
    },
    {
        question: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
        options: ["Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor", "Enable automate patching for the instances using the Amazon RDS console", "In AWS Config, configure a rule for the instances and the required patch level", "Use AWS Systems Manager to automate database patching according to a schedule"],
        correctAnswer: 3,
        explanation: "AWS Systems Manager automates patch management at scale across EC2 instances."
    },
    {
        question: "Which mechanism allows developers to access AWS services from application code?",
        options: ["AWS Software Development Kit", "AWS Management Console", "AWS CodePipeline", "AWS Config"],
        correctAnswer: 0,
        explanation: "AWS SDKs provide programmatic access to AWS services from application code."
    },
    {
        question: "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
        options: ["Shared responsibility security model", "Single tenancy", "Elastic computing", "Encryption"],
        correctAnswer: 2,
        explanation: "Elastic computing reduces TCO by allowing resources to scale with demand, eliminating over-provisioning."
    },
    {
        question: "Which of the following is a benefit of using the AWS Cloud?",
        options: ["Permissive security removes the administrative burden", "Ability to focus on revenue-generating activities", "Control over cloud network hardware", "Choice of specific cloud hardware vendors"],
        correctAnswer: 1,
        explanation: "AWS handles infrastructure management, allowing companies to focus on business value."
    },
    {
        question: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
        options: ["Fault Tolerance", "Instance Usage", "Infrastructure", "Performance", "Storage Capacity"],
        correctAnswer: 0,
        explanation: "Fault Tolerance and Performance are two of the five Trusted Advisor categories. (Correct answers: A, D)"
    },
    {
        question: "What is Amazon CloudWatch?",
        options: ["A code repository with customizable build and team commit features", "A metrics repository with customizable notification thresholds and channels", "A security configuration repository with threat analytics", "A rule repository of a web application firewall with automated vulnerability prevention features"],
        correctAnswer: 1,
        explanation: "CloudWatch is a monitoring service that collects metrics and allows customizable alarms."
    },
    {
        question: "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO)",
        options: ["Patching operating system components for Amazon Relational Database Server (Amazon RDS)", "Encrypting data on the client-side", "Training the data center staff", "Configuring Network Access Control Lists (ACL)", "Maintaining environmental controls within a data center"],
        correctAnswer: 1,
        explanation: "Customers are responsible for client-side encryption and network ACL configuration. (Correct answers: B, D)"
    },
    {
        question: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        options: ["Physical controls", "Patch management", "Zone security", "Data center auditing"],
        correctAnswer: 1,
        explanation: "Patch management is shared: AWS patches infrastructure, customers patch their applications and OS."
    },
    {
        question: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
        options: ["AWS Billing and Cost Management", "Consolidated billing", "Amazon CloudWatch", "Amazon QuickSight"],
        correctAnswer: 0,
        explanation: "AWS Billing and Cost Management provides billing, usage monitoring, and budgeting tools."
    },
    {
        question: "How do customers benefit from Amazon's massive economies of scale?",
        options: ["Periodic price reductions as the result of Amazon's operational efficiencies", "New Amazon EC2 instance types providing the latest hardware", "The ability to scale up and down when needed", "Increased reliability in the underlying hardware of Amazon EC2 instances"],
        correctAnswer: 0,
        explanation: "AWS passes savings from economies of scale to customers through periodic price reductions."
    },
    {
        question: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
        options: ["Service control policies (SCPs)", "Consolidated billing", "All Upfront Reserved Instances", "AWS Cost Explorer"],
        correctAnswer: 1,
        explanation: "Consolidated billing combines usage across accounts to reach volume discount tiers."
    },
    {
        question: "Which AWS services provide a way to extend an on-premises architecture to the AWS cloud? (Select TWO)",
        options: ["Amazon EBS", "Amazon Connect", "AWS Storage Gateway", "Amazon CloudFront", "AWS Direct Connect"],
        correctAnswer: 2,
        explanation: "Storage Gateway and Direct Connect extend on-premises architecture to AWS. (Correct answers: C, E)"
    },
    {
        question: "Which of the following services will automatically scale with an expected increase in web traffic?",
        options: ["AWS CodePipeline", "Elastic Load Balancing", "Amazon EBS", "AWS Direct Connect"],
        correctAnswer: 1,
        explanation: "Elastic Load Balancing automatically distributes traffic across multiple targets as load increases."
    },
    {
        question: "Which service provides a virtually unlimited amount of online highly durable object storage?",
        options: ["Amazon Redshift", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Container Service (Amazon ECS)", "Amazon S3"],
        correctAnswer: 3,
        explanation: "Amazon S3 provides virtually unlimited, highly durable object storage."
    },
    {
        question: "Which AWS feature should a customer leverage to achieve high availability of an application?",
        options: ["AWS Direct Connect", "Availability Zones", "Data centers", "Amazon Virtual Private Cloud (Amazon VPC)"],
        correctAnswer: 1,
        explanation: "Deploying across multiple Availability Zones ensures high availability."
    },
    {
        question: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
        options: ["AWS WAF", "AWS Trusted Advisor", "AWS Direct Connect", "AWS Organizations", "Network ACLs"],
        correctAnswer: 0,
        explanation: "AWS WAF and Network ACLs can block requests from specific networks. (Correct answers: A, E)"
    },
    {
        question: "Which of the following is a cloud architectural design principle?",
        options: ["Scale up not out", "Loosely couple components", "Build monolithic systems", "Use commercial database software"],
        correctAnswer: 1,
        explanation: "Loose coupling is a fundamental cloud architecture design principle."
    },
    {
        question: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Health"],
        correctAnswer: 1,
        explanation: "AWS CloudTrail logs all account activity for auditing and compliance."
    },
    {
        question: "Where can AWS compliance and certification reports be downloaded?",
        options: ["AWS Artifact", "AWS Concierge", "AWS Certificate Manager", "AWS Trusted Advisor"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides on-demand access to compliance and certification reports."
    },
    {
        question: "The financial benefits of using AWS are: (Select TWO)",
        options: ["Reduced Total Cost of Ownership (TCO)", "Increased capital expenditure (capex)", "Reduced operational expenditure (opex)", "Deferred payment plans for startups", "Business credit lines for startups"],
        correctAnswer: 0,
        explanation: "AWS reduces TCO and operational expenditure through pay-as-you-go pricing. (Correct answers: A, C)"
    },
    {
        question: "Which AWS service can serve a static website?",
        options: ["Amazon S3", "Amazon Route 53", "Amazon QuickSight", "AWS X-Ray"],
        correctAnswer: 0,
        explanation: "Amazon S3 can host and serve static websites directly."
    },
    {
        question: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
        options: ["Companies can deploy applications in multiple AWS Regions to reduce latency", "Amazon Translate automatically translates third-party website interfaces into multiple languages", "Amazon CloudFront has multiple edge locations around the world to reduce latency", "Amazon Comprehend allows users to build applications that can respond to user requests in many languages", "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency"],
        correctAnswer: 0,
        explanation: "Multi-region deployment and CloudFront edge locations reduce global latency. (Correct answers: A, C)"
    },
    {
        question: "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
        options: ["Resource groups", "Availability Zones", "Security groups", "Regions", "Amazon Machine Images (AMIs)"],
        correctAnswer: 1,
        explanation: "Availability Zones and Regions are core components of AWS global infrastructure. (Correct answers: B, D)"
    },
    {
        question: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        options: ["Physical access controls", "Data encryption", "Secure disposal of storage devices", "Environmental risk management"],
        correctAnswer: 1,
        explanation: "Customers are responsible for encrypting their data in AWS."
    },
    {
        question: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        options: ["Use AWS Budgets on each account to pay only to budget", "Contact AWS Support for a monthly bill", "Create an AWS Organization from the payer account and invite the other accounts to join", "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report"],
        correctAnswer: 2,
        explanation: "AWS Organizations enables consolidated billing across multiple accounts."
    },
    {
        question: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        options: ["Project management", "Antivirus software licensing", "Data center security", "Software development"],
        correctAnswer: 2,
        explanation: "TCO comparisons include data center costs like security, power, and cooling."
    },
    {
        question: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        options: ["They require the customer to monitor and replace failing instances", "They have better performance than customer-managed services", "They simplify patching and updating underlying OSs", "They do not require the customer to optimize instance type or size selections"],
        correctAnswer: 2,
        explanation: "AWS managed services handle patching and OS updates automatically."
    },
    {
        question: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
        options: ["Amazon Route 53", "Virtual Private Gateway", "Classic Load Balancer", "Auto Scaling", "Amazon CloudWatch default metrics"],
        correctAnswer: 0,
        explanation: "Route 53 and Virtual Private Gateway support hybrid architectures. (Correct answers: A, B)"
    },
    {
        question: "Which statement best describes Elastic Load Balancing?",
        options: ["It translates a domain name into an IP address using DNS", "It distributes incoming application traffic across one or more Amazon EC2 instances", "It collects metrics on connected Amazon EC2 instances", "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic"],
        correctAnswer: 1,
        explanation: "Elastic Load Balancing distributes incoming traffic across multiple targets."
    },
    {
        question: "Which of the following is a fast and reliable NoSQL database service?",
        options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
        correctAnswer: 2,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database with consistent performance."
    },
    {
        question: "Which AWS service would you use to obtain compliance reports and certificates?",
        options: ["AWS Artifact", "AWS Lambda", "Amazon Inspector", "AWS Certificate Manager"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides access to compliance reports and certifications."
    },
    {
        question: "Which AWS services are defined as global instead of regional? (Select TWO)",
        options: ["Amazon Route 53", "Amazon EC2", "Amazon S3", "Amazon CloudFront", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Route 53 and CloudFront are global services. (Correct answers: A, D)"
    },
    {
        question: "How would an AWS customer easily apply common access controls to a large set of users?",
        options: ["Apply an IAM policy to an IAM group", "Apply an IAM policy to an IAM role", "Apply the same IAM policy to all IAM users with access to the same workload", "Apply an IAM policy to an Amazon Cognito user pool"],
        correctAnswer: 0,
        explanation: "IAM groups allow applying policies to multiple users simultaneously."
    },
    {
        question: "Which of the following is an important architectural design principle when designing cloud applications?",
        options: ["Use multiple Availability Zones", "Use tightly coupled components", "Use open source software", "Provision extra capacity"],
        correctAnswer: 0,
        explanation: "Using multiple Availability Zones ensures high availability and fault tolerance."
    },
    {
        question: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        options: ["AWS Server Migration Service", "AWS Organizations", "AWS Budgets", "AWS Trusted Advisor"],
        correctAnswer: 1,
        explanation: "AWS Organizations with consolidated billing combines usage for volume discounts."
    }
    ],
    10: [
    {
        question: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
        options: ["AWS Concierge", "AWS CloudFormation", "Amazon Simple Storage Service (Amazon S3)", "Amazon EC2 Auto Scaling", "AWS Management Console"],
        correctAnswer: 1,
        explanation: "CloudFormation and Management Console both allow launching RDS clusters. (Correct answers: B, E)"
    },
    {
        question: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        options: ["One-year, No Upfront, Standard RI pricing", "One-year, All Upfront, Convertible RI pricing", "Three-year, All Upfront, Standard RI pricing", "Three-year, No Upfront, Convertible RI pricing"],
        correctAnswer: 2,
        explanation: "Three-year, All Upfront, Standard RIs provide the maximum savings compared to On-Demand."
    },
    {
        question: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
        options: ["Summaries by Amazon Simple Notification Service (Amazon SNS)", "Free Amazon Elasticsearch Service analytics", "Provided at no charge", "Real-time monitoring", "Adjustable retention"],
        correctAnswer: 3,
        explanation: "CloudWatch Logs provides real-time monitoring and adjustable retention periods. (Correct answers: D, E)"
    },
    {
        question: "Which of the following is an AWS-managed compute service?",
        options: ["Amazon SWF", "Amazon EC2", "AWS Lambda", "Amazon Aurora"],
        correctAnswer: 2,
        explanation: "AWS Lambda is a fully managed serverless compute service."
    },
    {
        question: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Lambda", "Amazon DynamoDB", "AWS CodeCommit"],
        correctAnswer: 1,
        explanation: "AWS Lambda enables serverless architectures, eliminating physical compute footprint."
    },
    {
        question: "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
        options: ["Patching underlying infrastructure", "Physical security", "Patching Amazon EC2 instances", "Patching network infrastructure"],
        correctAnswer: 2,
        explanation: "Customers are responsible for patching guest OS and applications on EC2 instances."
    },
    {
        question: "According to the AWS shared responsibility model who is responsible for configuration management?",
        options: ["It is solely the responsibility of the customer", "It is solely the responsibility of AWS", "It is shared between AWS and the customer", "It is not part of the AWS shared responsibility model"],
        correctAnswer: 2,
        explanation: "Configuration management is a shared control between AWS and customers."
    },
    {
        question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        options: ["Amazon GuardDuty", "Amazon Macie", "Amazon Inspector", "AWS Shield"],
        correctAnswer: 1,
        explanation: "Amazon Macie uses machine learning to discover and classify sensitive data."
    },
    {
        question: "Which of the following BEST describe the AWS pricing model? (Select TWO)",
        options: ["Fixed-term", "Pay-as-you-go", "Colocation", "Planned", "Variable cost"],
        correctAnswer: 1,
        explanation: "AWS uses pay-as-you-go pricing with variable costs based on usage. (Correct answers: B, E)"
    },
    {
        question: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
        options: ["Ensuring that application data is encrypted at rest", "Ensuring that AWS NTP servers are set to the correct time", "Ensuring that users have received security training in the use of AWS services", "Ensuring that access to data centers is restricted", "Ensuring that hardware is disposed of properly"],
        correctAnswer: 0,
        explanation: "Customers manage data encryption and user security training. (Correct answers: A, C)"
    },
    {
        question: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        options: ["Create one global AWS account and move all AWS resources to that account", "Sign up for three years of Reserved Instance pricing up front", "Use the consolidated billing feature from AWS Organizations", "Sign up for the AWS Enterprise support plan to get volume discounts"],
        correctAnswer: 2,
        explanation: "Consolidated billing through AWS Organizations combines usage for volume discounts without moving resources."
    },
    {
        question: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
        options: ["A Partial Upfront Reserved Instances for a 1-year term", "All Upfront Reserved instances for a 1 year term", "All Upfront Reserved Instances for a 3 year term", "No Upfront Reserved Instances for a 3 year term"],
        correctAnswer: 2,
        explanation: "Three-year All Upfront Reserved Instances provide the maximum discount."
    },
    {
        question: "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
        options: ["Amazon Glacier", "Amazon RDS", "AWS Snowball", "Amazon Redshift", "Amazon EFS"],
        correctAnswer: 1,
        explanation: "Amazon RDS and EFS are suitable for frequently changing data. (Correct answers: B, E)"
    },
    {
        question: "Which AWS service allows users to identify the changes made to a resource over time?",
        options: ["Amazon Inspector", "AWS Config", "AWS Service Catalog", "AWS IAM"],
        correctAnswer: 1,
        explanation: "AWS Config tracks resource configuration changes over time."
    },
    {
        question: "According to best practices, how should an application be designed to run in the AWS Cloud?",
        options: ["Use tightly coupled components", "Use loosely coupled components", "Use infrequently coupled components", "Use frequently coupled components"],
        correctAnswer: 1,
        explanation: "Loosely coupled components improve scalability and fault tolerance."
    },
    {
        question: "Which benefits are included with the AWS Business Support plan? (Select TWO)",
        options: ["24/7 assistance by way of live chat or a telephone call", "Support from a dedicated AWS Technical Account Manager", "An unlimited number of cases and contacts", "15-minute response time for production system interruption cases", "Annual operational reviews with AWS Solutions Architects"],
        correctAnswer: 0,
        explanation: "Business Support includes 24/7 phone/chat support and unlimited cases. (Correct answers: A, C)"
    },
    {
        question: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        options: ["Amazon Route 53", "Amazon Neptune", "Amazon SageMaker", "Amazon Lightsail"],
        correctAnswer: 0,
        explanation: "Amazon Route 53 is AWS's managed DNS service."
    },
    {
        question: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
        options: ["Dedicated Hosts", "Dedicated Instances", "Spot Instances", "Reserved Instances"],
        correctAnswer: 0,
        explanation: "Dedicated Hosts provide physical servers for compliance and licensing requirements."
    },
    {
        question: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        options: ["Dedicated RIs", "Scheduled RIs", "Convertible RIs", "Standard RIs"],
        correctAnswer: 2,
        explanation: "Convertible RIs allow changing instance attributes while maintaining equal or greater value."
    },
    {
        question: "Which service is best for storing common database query results, which helps to alleviate database access load?",
        options: ["Amazon Machine Learning", "Amazon SQS", "Amazon ElastiCache", "Amazon EC2 Instance Store"],
        correctAnswer: 2,
        explanation: "Amazon ElastiCache provides in-memory caching for database query results."
    },
    {
        question: "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
        options: ["For non-production applications", "For stateful workloads", "For applications that cannot have interruptions", "For fault-tolerant flexible applications", "For sensitive database applications"],
        correctAnswer: 0,
        explanation: "Spot Instances are suitable for non-production and fault-tolerant applications. (Correct answers: A, D)"
    },
    {
        question: "Which AWS tools assist with estimating costs? (Select THREE)",
        options: ["Detailed billing report", "Cost allocation tags", "AWS Simple Monthly Calculator", "AWS Total Cost of Ownership (TCO) Calculator", "Cost Estimator"],
        correctAnswer: 1,
        explanation: "Cost allocation tags, Simple Monthly Calculator, and TCO Calculator help estimate costs. (Correct answers: B, C, D)"
    },
    {
        question: "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
        options: ["Elastic Load Balancer", "Amazon EC2 Auto Scaling", "Amazon Route 53", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "EC2 Auto Scaling automatically adjusts instance count based on demand."
    },
    {
        question: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 0,
        explanation: "Enterprise Support includes Infrastructure Event Management at no additional cost."
    },
    {
        question: "Access keys in AWS Identity and Access Management (IAM) are used to:",
        options: ["Log in to the AWS Management Console", "Make programmatic calls to AWS from AWS APIs", "Log in to Amazon EC2 instances", "Authenticate to AWS CodeCommit repositories"],
        correctAnswer: 1,
        explanation: "IAM access keys enable programmatic access to AWS APIs and CLI."
    },
    {
        question: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
        options: ["AWS Glue", "AWS Data Pipeline", "Amazon CloudSearch", "Amazon Athena"],
        correctAnswer: 3,
        explanation: "Amazon Athena allows SQL queries directly on S3 data without loading."
    },
    {
        question: "How does AWS shorten the time to provision IT resources?",
        options: ["It supplies an online IT ticketing platform for resource requests", "It supports automatic code validation services", "It provides the ability to programmatically provision existing resources", "It automates the resource request process from a company's IT vendor list"],
        correctAnswer: 2,
        explanation: "AWS enables programmatic provisioning through APIs, CLI, and Infrastructure as Code."
    },
    {
        question: "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
        options: ["Amazon CloudFront", "AWS Cloud9", "AWS CloudTrail", "AWS CloudHSM", "Amazon CloudWatch"],
        correctAnswer: 2,
        explanation: "CloudTrail logs account activity and CloudWatch monitors resources. (Correct answers: C, E)"
    },
    {
        question: "Which of the following are characteristics of Amazon S3? (Select TWO)",
        options: ["A global file system", "An object store", "A local file store", "A network file system", "A durable storage system"],
        correctAnswer: 1,
        explanation: "S3 is an object store with high durability (99.999999999%). (Correct answers: B, E)"
    },
    {
        question: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
        options: ["AWS Budgets", "Cost Explorer", "AWS Total Cost of Ownership (TCO) Calculator", "AWS Well-Architected Tool"],
        correctAnswer: 2,
        explanation: "TCO Calculator compares on-premises costs with AWS cloud costs."
    },
    {
        question: "Which of the following services is in the category of AWS serverless platform?",
        options: ["Amazon EMR", "Elastic Load Balancing", "AWS Lambda", "AWS Mobile Hub"],
        correctAnswer: 2,
        explanation: "AWS Lambda is a core serverless compute platform service."
    },
    {
        question: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        options: ["Cost allocation tags", "Consolidated billing", "AWS Budgets", "AWS Marketplace"],
        correctAnswer: 0,
        explanation: "Cost allocation tags enable detailed tracking and categorization of spending."
    },
    {
        question: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        options: ["AWS Cost Explorer", "AWS Trusted Advisor", "Consolidated billing", "Detailed billing"],
        correctAnswer: 1,
        explanation: "AWS Trusted Advisor provides recommendations for cost optimization and performance."
    },
    {
        question: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        options: ["Cloud-native", "Partner network", "Hybrid architecture", "Infrastructure as a service"],
        correctAnswer: 2,
        explanation: "Hybrid architecture combines cloud and on-premises resources."
    },
    {
        question: "What technology enables compute capacity to adjust as loads change?",
        options: ["Load balancing", "Automatic failover", "Round robin", "Auto Scaling"],
        correctAnswer: 3,
        explanation: "Auto Scaling automatically adjusts compute capacity based on demand."
    },
    {
        question: "Which AWS service is a managed NoSQL database?",
        options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora", "Amazon RDS for MariaDB"],
        correctAnswer: 1,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service."
    },
    {
        question: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        options: ["Data centers contain regions", "Regions contain Availability Zones", "Availability Zones contain edge locations", "Edge locations contain regions"],
        correctAnswer: 1,
        explanation: "AWS Regions contain multiple isolated Availability Zones."
    },
    {
        question: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        options: ["Using many instances in parallel", "Using a single large instance during off-peak hours", "Using dedicated hardware", "Using a large GPU instance type"],
        correctAnswer: 0,
        explanation: "Parallel processing across multiple instances follows horizontal scaling best practices."
    },
    {
        question: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        options: ["Amazon EC2", "Amazon Relational Database Service (Amazon RDS)", "Amazon Aurora", "Amazon Redshift", "Amazon S3"],
        correctAnswer: 0,
        explanation: "EC2 and RDS both support Microsoft SQL Server. (Correct answers: A, B)"
    },
    {
        question: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        options: ["API keys", "Access keys", "User names/Passwords", "SSH keys"],
        correctAnswer: 1,
        explanation: "Access keys (Access Key ID and Secret Access Key) enable AWS CLI access."
    },
    {
        question: "The user is fully responsible for which action when running workloads on AWS?",
        options: ["Patching the infrastructure components", "Maintaining the underlying infrastructure components", "Maintaining physical and environmental controls", "Implementing controls to route application traffic"],
        correctAnswer: 3,
        explanation: "Users are responsible for application-level traffic routing and security controls."
    },
    {
        question: "Which AWS support plan includes a dedicated Technical Account Manager?",
        options: ["Developer", "Enterprise", "Business", "Basic"],
        correctAnswer: 1,
        explanation: "Enterprise Support includes a dedicated Technical Account Manager (TAM)."
    },
    {
        question: "What time-savings advantage is offered with the use of Amazon Rekognition?",
        options: ["Amazon Rekognition provides automatic watermarking of images", "Amazon Rekognition provides automatic detection of objects appearing in pictures", "Amazon Rekognition provides the ability to resize millions of images automatically", "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs"],
        correctAnswer: 1,
        explanation: "Rekognition uses ML to automatically detect and analyze objects in images and videos."
    },
    {
        question: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
        options: ["Amazon AutoScaling", "Amazon Redshift", "AWS CloudTrail", "AWS Lambda"],
        correctAnswer: 0,
        explanation: "Auto Scaling eliminates manual capacity planning by automatically adjusting resources."
    },
    {
        question: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        options: ["AWS manages the data stored in Amazon RDS tables", "AWS manages the maintenance of the operating system", "AWS automatically scales up instance types on demand", "AWS manages the database type"],
        correctAnswer: 1,
        explanation: "RDS is a managed service where AWS handles OS maintenance, patching, and backups."
    },
    {
        question: "A company's web application currently has tight dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        options: ["Implementing elasticity enabling the application to scale up or scale down as demand changes", "Enabling several EC2 instances to run in parallel to achieve better performance", "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail", "Doubling EC2 computing resources to increase system fault tolerance"],
        correctAnswer: 2,
        explanation: "Decoupling components reduces dependencies and improves fault tolerance."
    },
    {
        question: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        options: ["AWS Partner Network Technology Partners", "AWS Marketplace", "AWS Partner Network Consulting Partners", "AWS Service Catalog"],
        correctAnswer: 2,
        explanation: "APN Consulting Partners provide expertise to design and build AWS workloads."
    },
    {
        question: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        options: ["Amazon Glacier", "AWS Storage Gateway", "Amazon S3", "Amazon EBS"],
        correctAnswer: 2,
        explanation: "Amazon S3 provides object storage with versioning and lifecycle management."
    },
    {
        question: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        options: ["Implement automation", "Design for agility", "Design for failure", "Implement elasticity"],
        correctAnswer: 2,
        explanation: "Multi-AZ deployment follows the design for failure principle for high availability."
    },
    {
        question: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        options: ["AWS IAM", "AWS Organizations", "AWS Schema Conversion Tool", "AWS Config"],
        correctAnswer: 1,
        explanation: "AWS Organizations centrally manages and governs multiple AWS accounts."
    }
    ],
    12: [
    {
        question: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        options: ["Availability Zone", "Edge location", "Region", "Private networking"],
        correctAnswer: 0,
        explanation: "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity."
    },
    {
        question: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        options: ["The ability to bid for a lower hourly cost", "Paying a daily rate regardless of time used", "Paying only for time used", "Pre-paying for instances and paying a lower hourly rate"],
        correctAnswer: 2,
        explanation: "On-Demand instances allow you to pay for compute capacity by the hour or second with no long-term commitments."
    },
    {
        question: "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
        options: ["AWS Trusted Advisor", "AWS Professional Services", "AWS Systems Manager", "AWS Partner Network (APN)", "AWS Secrets Manager"],
        correctAnswer: 1,
        explanation: "AWS Professional Services and APN partners provide expertise for cloud migration assessments. (Correct answers: B, D)"
    },
    {
        question: "A characteristic of edge locations is that they:",
        options: ["Host Amazon EC2 instances closer to users", "Help lower latency and improve performance for users", "Cache frequently changing data without reaching the origin server", "Refresh data changes daily"],
        correctAnswer: 1,
        explanation: "Edge locations cache content closer to users, reducing latency and improving performance."
    },
    {
        question: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
        options: ["Command line interface", "On-premises", "Software Development Kits", "Software-as-a-service", "Hybrid"],
        correctAnswer: 0,
        explanation: "AWS CLI and SDKs are primary methods for programmatic interaction with AWS services. (Correct answers: A, C)"
    },
    {
        question: "What is a value proposition of the AWS Cloud?",
        options: ["AWS is responsible for security in the AWS Cloud", "No long-term contract is required", "Provision new servers in days", "AWS manages user applications in the AWS Cloud"],
        correctAnswer: 1,
        explanation: "AWS offers pay-as-you-go pricing with no long-term contracts or upfront commitments."
    },
    {
        question: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        options: ["Amazon EC2 Spot Instances", "Amazon EC2 Dedicated Instances", "Amazon EC2 On-Demand Instances", "Amazon EC2 Reserved Instances"],
        correctAnswer: 3,
        explanation: "Reserved Instances provide significant discounts for predictable, long-term workloads."
    },
    {
        question: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
        options: ["AWS Shield", "AWS Config", "AWS IAM", "Amazon Inspector"],
        correctAnswer: 1,
        explanation: "AWS Config tracks resource configurations and changes over time for compliance and auditing."
    },
    {
        question: "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
        options: ["Fault tolerance", "Global reach", "Pay-as-you-go pricing", "High availability"],
        correctAnswer: 1,
        explanation: "AWS's global infrastructure with Regions worldwide enables low latency for international users."
    },
    {
        question: "How can one AWS account use Reserved Instances from another AWS account?",
        options: ["By using Amazon EC2 Dedicated Instances", "By using AWS Organizations consolidated billing", "By using the AWS Cost Explorer tool", "By using AWS Budgets"],
        correctAnswer: 1,
        explanation: "Consolidated billing through AWS Organizations allows sharing of Reserved Instance benefits across accounts."
    },
    {
        question: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
        options: ["AWS automatically distributes the data globally for higher durability", "AWS will take care of operating the application", "AWS makes it easy to architect for high availability", "AWS can easily accommodate application demand changes", "AWS takes care of application security patching"],
        correctAnswer: 2,
        explanation: "AWS provides tools for high availability and elastic scaling for demand changes. (Correct answers: C, D)"
    },
    {
        question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
        correctAnswer: 1,
        explanation: "With EC2, customers are responsible for guest OS, applications, and security patching."
    },
    {
        question: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
        options: ["Implementing Amazon Rekognition", "Using AWS Shield-protected resources", "Blocking access with Security Groups", "Using Multi-Factor Authentication (MFA)", "Enforcing password strength and expiration"],
        correctAnswer: 3,
        explanation: "IAM supports MFA and password policies for enhanced security. (Correct answers: D, E)"
    },
    {
        question: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        options: ["Amazon Glacier", "AWS Snowball", "AWS Storage Gateway", "Amazon Elastic Block Storage (Amazon EBS)"],
        correctAnswer: 2,
        explanation: "AWS Storage Gateway connects on-premises environments to AWS cloud storage."
    },
    {
        question: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        options: ["AWS Marketplace", "Amazon Lumberyard", "AWS Artifact", "Amazon CloudSearch"],
        correctAnswer: 0,
        explanation: "AWS Marketplace is a digital catalog of third-party software and services."
    },
    {
        question: "Which of the following is a component of the AWS Global Infrastructure?",
        options: ["Amazon Alexa", "AWS Regions", "Amazon Lightsail", "AWS Organizations"],
        correctAnswer: 1,
        explanation: "AWS Regions are a core component of the AWS Global Infrastructure."
    },
    {
        question: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Convertible Reserved Instances"],
        correctAnswer: 2,
        explanation: "Spot Instances pricing fluctuates based on supply and demand in the AWS EC2 capacity pool."
    },
    {
        question: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Select TWO)",
        options: ["Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated", "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC", "Use Amazon Athena to query data from the on-premises database servers", "Connect the company's on-premises data center to AWS using AWS Direct Connect", "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers"],
        correctAnswer: 1,
        explanation: "VPN and Direct Connect both provide secure connectivity between on-premises and AWS VPC. (Correct answers: B, D)"
    },
    {
        question: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
        options: ["Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0", "Run AWS Trusted Advisor and review the findings", "Open the AWS IAM console and check the inbound rule filters for open access", "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access"],
        correctAnswer: 1,
        explanation: "AWS Trusted Advisor automatically checks security groups for unrestricted access on common ports."
    },
    {
        question: "Which of the following security-related services does AWS offer? (Select TWO)",
        options: ["Multi-factor authentication physical tokens", "AWS Trusted Advisor security checks", "Data encryption", "Automated penetration testing", "Amazon S3 copyrighted content detection"],
        correctAnswer: 1,
        explanation: "AWS provides Trusted Advisor security checks and data encryption capabilities. (Correct answers: B, C)"
    },
    {
        question: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
        options: ["AWS WAF", "Amazon DynamoDB", "Amazon EC2", "Amazon CloudFront", "Amazon Inspector"],
        correctAnswer: 0,
        explanation: "AWS WAF and CloudFront provide DDoS protection through AWS Shield integration. (Correct answers: A, D)"
    },
    {
        question: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        options: ["Amazon Elastic Block Store (Amazon EBS)", "Amazon Machine Image", "Amazon EC2 Systems Manager", "Amazon AppStream 2.0"],
        correctAnswer: 1,
        explanation: "Amazon Machine Images (AMIs) contain pre-configured OS and application settings for EC2 instances."
    },
    {
        question: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        options: ["Think parallel", "Implement elasticity", "Decouple your components", "Design for failure"],
        correctAnswer: 1,
        explanation: "Elasticity enables systems to scale up or down to maintain performance as demand changes."
    },
    {
        question: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
        options: ["Easy and fast deployment of applications in multiple Regions around the world", "Security of the AWS Cloud", "Elasticity of the AWS Cloud", "Lower variable costs due to massive economies of scale"],
        correctAnswer: 2,
        explanation: "Elasticity allows automatic scaling based on actual demand, eliminating capacity planning guesswork."
    },
    {
        question: "What can users access from AWS Artifact?",
        options: ["AWS security and compliance documents", "A download of configuration management details for all AWS resources", "Training materials for AWS services", "A security assessment of the applications deployed in the AWS Cloud"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports."
    },
    {
        question: "Compared with costs in traditional and virtualized data centers, AWS has:",
        options: ["Greater variable costs and greater upfront costs", "Fixed usage costs and lower upfront costs", "Lower variable costs and greater upfront costs", "Lower variable costs and lower upfront costs"],
        correctAnswer: 3,
        explanation: "AWS offers pay-as-you-go pricing with no upfront costs and economies of scale reduce variable costs."
    },
    {
        question: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
        options: ["AWS Lambda", "Amazon DynamoDB Accelerator", "Amazon Route 53", "Amazon CloudFront"],
        correctAnswer: 3,
        explanation: "CloudFront CDN caches static content at edge locations for low latency delivery."
    },
    {
        question: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
        options: ["They automatically add more instances across multiple AWS Regions based on global demand of the application", "They automatically add or replace instances across multiple Availability Zones when the application needs it", "They enable the application's static content to reside closer to end users", "They are able to distribute incoming requests across a tier of web server instances"],
        correctAnswer: 1,
        explanation: "Auto Scaling groups maintain instance count across multiple AZs for high availability."
    },
    {
        question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        options: ["A public and private key-pair", "Amazon Inspector", "AWS Identity and Access Management (IAM) policies", "Security Groups"],
        correctAnswer: 2,
        explanation: "IAM policies control access permissions to S3 buckets and objects."
    },
    {
        question: "How should a customer forecast the future costs for running a new web application?",
        options: ["Amazon Aurora Backtrack", "Amazon CloudWatch Billing Alarms", "AWS Simple Monthly Calculator", "AWS Cost and Usage report"],
        correctAnswer: 2,
        explanation: "AWS Simple Monthly Calculator helps estimate future costs for planned AWS usage."
    },
    {
        question: "Where are AWS compliance documents, such as an SOC 1 report, located?",
        options: ["Amazon Inspector", "AWS CloudTrail", "AWS Artifact", "AWS Certificate Manager"],
        correctAnswer: 2,
        explanation: "AWS Artifact provides access to compliance reports and security documents like SOC reports."
    },
    {
        question: "Which of the following tasks is the responsibility of AWS?",
        options: ["Encrypting client-side data", "Configuring AWS Identity and Access Management (IAM) roles", "Securing the Amazon EC2 hypervisor", "Setting user password policies"],
        correctAnswer: 2,
        explanation: "AWS is responsible for securing the underlying infrastructure including the hypervisor."
    },
    {
        question: "Under the shared responsibility model which of the following areas are the customer's responsibility? (Select TWO)",
        options: ["Firmware upgrades of network infrastructure", "Patching of operating systems", "Patching of the underlying hypervisor", "Physical security of data centers", "Configuration of the security group"],
        correctAnswer: 1,
        explanation: "Customers are responsible for guest OS patching and security group configuration. (Correct answers: B, E)"
    },
    {
        question: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
        options: ["Amazon Simple Storage Service (Amazon S3)", "Amazon DynamoDB", "Amazon Kinesis", "Amazon Redshift"],
        correctAnswer: 3,
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service."
    },
    {
        question: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
        options: ["Amazon EBS", "AWS Direct Connect", "Amazon CloudFront", "AWS Storage Gateway", "Amazon Connect"],
        correctAnswer: 1,
        explanation: "Direct Connect and Storage Gateway enable hybrid cloud architectures. (Correct answers: B, D)"
    },
    {
        question: "What are the advantages of the AWS Cloud? (Select TWO)",
        options: ["Fixed rate monthly cost", "No need to guess capacity requirements", "Increased speed to market", "Increased upfront capital expenditure", "Physical access to cloud data centers"],
        correctAnswer: 1,
        explanation: "AWS eliminates capacity planning and accelerates deployment speed. (Correct answers: B, C)"
    },
    {
        question: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
        options: ["Users do not have to wait for infrastructure provisioning", "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure", "AWS takes over application configuration management on behalf of users", "Users do not need to address security and compliance issues"],
        correctAnswer: 0,
        explanation: "AWS's on-demand provisioning eliminates waiting time for infrastructure resources."
    },
    {
        question: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
        options: ["AWS Elastic Beanstalk", "AWS OpsWorks", "AWS CodeDeploy", "AWS Batch", "AWS X-Ray"],
        correctAnswer: 1,
        explanation: "OpsWorks and CodeDeploy support hybrid deployments to on-premises servers. (Correct answers: B, C)"
    },
    {
        question: "What is an example of agility in the AWS Cloud?",
        options: ["Access to multiple instance types", "Access to managed services", "Using Consolidated Billing to produce one bill", "Decreased acquisition time for new compute resources"],
        correctAnswer: 3,
        explanation: "Agility in AWS means rapidly acquiring resources within minutes instead of weeks."
    },
    {
        question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        options: ["Amazon Inspector", "AWS Web Application Firewall (AWS WAF)", "Elastic Load Balancing (ELB)", "AWS Shield"],
        correctAnswer: 3,
        explanation: "AWS Shield provides managed DDoS protection with automatic inline mitigation."
    },
    {
        question: "Which of the following are advantages of AWS consolidated billing? (Choose TWO)",
        options: ["The ability to receive one bill for multiple accounts", "Service limits increasing by default in all accounts", "A fixed discount on the monthly bill", "Potential volume discounts, as usage in all accounts is combined", "The automatic extension of the master account's AWS support plan to all accounts"],
        correctAnswer: 0,
        explanation: "Consolidated billing provides a single bill and volume discounts across accounts. (Correct answers: A, D)"
    },
    {
        question: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store", "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"],
        correctAnswer: 3,
        explanation: "EC2 with EBS allows stopping instances while persisting data, ideal for scheduled shutdowns."
    }
    ],
    13: [
    {
        question: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        options: ["Cost allocation tags", "Consolidated billing", "AWS Budgets", "AWS Marketplace"],
        correctAnswer: 0,
        explanation: "Cost allocation tags enable detailed tracking and categorization of AWS spending by project, department, or other custom dimensions."
    },
    {
        question: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        options: ["Amazon Glacier", "AWS Storage Gateway", "Amazon S3", "Amazon EBS"],
        correctAnswer: 2,
        explanation: "Amazon S3 provides object storage with versioning, lifecycle policies, and immediate access to data."
    },
    {
        question: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        options: ["AWS Enterprise Support", "AWS Solutions Architects", "AWS Professional Services", "AWS Account Managers"],
        correctAnswer: 2,
        explanation: "AWS Professional Services helps customers achieve specific outcomes through paid consulting engagements."
    },
    {
        question: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        options: ["AWS Partner Network Technology Partners", "AWS Marketplace", "AWS Partner Network Consulting Partners", "AWS Service Catalog"],
        correctAnswer: 2,
        explanation: "APN Consulting Partners provide professional services to help design, architect, build, migrate, and manage workloads on AWS."
    },
    {
        question: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        options: ["Implement automation", "Design for agility", "Design for failure", "Implement elasticity"],
        correctAnswer: 2,
        explanation: "Multi-AZ deployment follows the design for failure principle, ensuring high availability when components fail."
    },
    {
        question: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        options: ["Amazon EC2", "Amazon Relational Database Service (Amazon RDS)", "Amazon Aurora", "Amazon Redshift", "Amazon S3"],
        correctAnswer: 0,
        explanation: "Both EC2 and RDS support Microsoft SQL Server databases. (Correct answers: A, B)"
    },
    {
        question: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        options: ["AWS Cost Explorer", "AWS Trusted Advisor", "Consolidated billing", "Detailed billing"],
        correctAnswer: 1,
        explanation: "AWS Trusted Advisor provides recommendations for cost optimization, performance, security, and fault tolerance."
    },
    {
        question: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        options: ["Spot Instances", "Reserved Instances", "Dedicated Hosts", "On-Demand Instances"],
        correctAnswer: 2,
        explanation: "Dedicated Hosts allow you to use existing per-socket, per-core, or per-VM software licenses."
    },
    {
        question: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        options: ["High availability", "Shared security model", "Elasticity", "Pay-as-you-go pricing", "Reliability"],
        correctAnswer: 2,
        explanation: "Elasticity and pay-as-you-go pricing allow scaling resources with demand while only paying for what you use. (Correct answers: C, D)"
    },
    {
        question: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Health"],
        correctAnswer: 1,
        explanation: "AWS CloudTrail logs all API calls and user actions for auditing and compliance purposes."
    },
    {
        question: "Which of the following are characteristics of Amazon S3? (Select TWO)",
        options: ["A global file system", "An object store", "A local file store", "A network file system", "A durable storage system"],
        correctAnswer: 1,
        explanation: "S3 is an object store with 99.999999999% durability. (Correct answers: B, E)"
    },
    {
        question: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
        options: ["Amazon Route 53", "Virtual Private Gateway", "Classic Load Balancer", "Auto Scaling", "Amazon CloudWatch default metrics"],
        correctAnswer: 0,
        explanation: "Route 53 and Virtual Private Gateway enable hybrid cloud connectivity. CloudWatch can also monitor on-premises resources with the agent. (Correct answers: A, B)"
    },
    {
        question: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        options: ["Project management", "Antivirus software licensing", "Data center security", "Software development"],
        correctAnswer: 2,
        explanation: "Data center security costs (physical security, staffing) are included in on-premises TCO comparisons."
    },
    {
        question: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store", "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"],
        correctAnswer: 3,
        explanation: "EC2 with EBS allows stopping instances while preserving data, ideal for scheduled shutdowns."
    },
    {
        question: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        options: ["Data centers contain regions", "Regions contain Availability Zones", "Availability Zones contain edge locations", "Edge locations contain regions"],
        correctAnswer: 1,
        explanation: "AWS Regions contain multiple isolated Availability Zones for high availability."
    },
    {
        question: "Which AWS tools assist with estimating costs? (Select THREE)",
        options: ["Detailed billing report", "Cost allocation tags", "AWS Simple Monthly Calculator", "AWS Total Cost of Ownership (TCO) Calculator", "Cost Eliminator"],
        correctAnswer: 1,
        explanation: "Cost allocation tags, Simple Monthly Calculator, and TCO Calculator help estimate and track AWS costs. (Correct answers: B, C, D)"
    },
    {
        question: "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
        options: ["The ability to receive one bill for multiple accounts", "Service limits increasing by default in all accounts", "A fixed discount on the monthly bill", "Potential volume discounts, as usage in all accounts is combined", "The automatic extension of the master account's AWS support plan to all accounts"],
        correctAnswer: 0,
        explanation: "Consolidated billing provides a single bill and volume discounts from combined usage. (Correct answers: A, D)"
    },
    {
        question: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        options: ["One-year, No Upfront, Standard RI pricing", "One-year, All Upfront, Convertible RI pricing", "Three-year, All Upfront, Standard RI pricing", "Three-year, No Upfront, Convertible RI pricing"],
        correctAnswer: 2,
        explanation: "Three-year, All Upfront, Standard RIs provide the maximum discount compared to On-Demand."
    },
    {
        question: "Compared with costs in traditional and virtualized data centers, AWS has:",
        options: ["Greater variable costs and greater upfront costs", "Fixed usage costs and lower upfront costs", "Lower variable costs and greater upfront costs", "Lower variable costs and lower upfront costs"],
        correctAnswer: 3,
        explanation: "AWS offers lower variable costs through economies of scale and minimal upfront costs with pay-as-you-go pricing."
    },
    {
        question: "A characteristic of edge locations is that they:",
        options: ["Host Amazon EC2 instances closer to users", "Help lower latency and improve performance for users", "Cache frequently changing data without reaching the origin server", "Refresh data changes daily"],
        correctAnswer: 1,
        explanation: "Edge locations cache content closer to end users, reducing latency and improving performance."
    },
    {
        question: "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
        options: ["A public and private key-pair", "Amazon Inspector", "AWS Identity and Access Management (IAM) policies", "Security Groups"],
        correctAnswer: 2,
        explanation: "IAM policies control access to S3 buckets and objects at a granular level."
    },
    {
        question: "Which of the following security-related actions are available at no cost?",
        options: ["Calling AWS Support", "Contacting AWS Professional Services to request a workshop", "Accessing forums, blogs, and whitepapers", "Attending AWS classes at a local university"],
        correctAnswer: 2,
        explanation: "AWS forums, blogs, whitepapers, and documentation are freely available resources."
    },
    {
        question: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        options: ["Dedicated RIs", "Scheduled RIs", "Convertible RIs", "Standard RIs"],
        correctAnswer: 2,
        explanation: "Convertible RIs allow changing instance family, OS, tenancy, and payment option during the term."
    },
    {
        question: "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
        options: ["Shared responsibility security model", "Single tenancy", "Elastic computing", "Encryption"],
        correctAnswer: 2,
        explanation: "Elastic computing reduces TCO by allowing resources to scale with demand, avoiding over-provisioning."
    },
    {
        question: "Which of the following services will automatically scale with an expected increase in web traffic?",
        options: ["AWS CodePipeline", "Elastic Load Balancing", "Amazon EBS", "AWS Direct Connect"],
        correctAnswer: 1,
        explanation: "Elastic Load Balancing automatically distributes traffic across multiple targets and scales with demand."
    },
    {
        question: "Where are AWS compliance documents, such as an SOC 1 report, located?",
        options: ["Amazon Inspector", "AWS CloudTrail", "AWS Artifact", "AWS Certificate Manager"],
        correctAnswer: 2,
        explanation: "AWS Artifact provides on-demand access to compliance reports and security documents."
    },
    {
        question: "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO)",
        options: ["Patching operating system components for Amazon Relational Database Server (Amazon RDS)", "Encrypting data on the client-side", "Training the data center staff", "Configuring Network Access Control Lists (ACL)", "Maintaining environmental controls within a data center"],
        correctAnswer: 1,
        explanation: "Customers are responsible for client-side encryption and network ACL configuration. (Correct answers: B, D)"
    },
    {
        question: "Which is a recommended pattern for designing a highly available architecture on AWS?",
        options: ["Ensure that components have low-latency network connectivity", "Run enough Amazon EC2 instances to operate at peak load", "Ensure that the application is designed to accommodate failure of any single component", "Use a monolithic application that handles all operations"],
        correctAnswer: 2,
        explanation: "Designing for failure means building redundancy so no single component failure affects availability."
    },
    {
        question: "According to best practices, how should an application be designed to run in the AWS Cloud?",
        options: ["Use tightly coupled components", "Use loosely coupled components", "Use infrequently coupled components", "Use frequently coupled components"],
        correctAnswer: 1,
        explanation: "Loosely coupled components reduce dependencies and improve scalability and fault tolerance."
    },
    {
        question: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
        options: ["Implementing Amazon Rekognition", "Using AWS Shield-protected resources", "Blocking access with Security Groups", "Using Multi-Factor Authentication (MFA)", "Enforcing password strength and expiration"],
        correctAnswer: 3,
        explanation: "IAM supports MFA and password policies to enhance user security. (Correct answers: D, E)"
    },
    {
        question: "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
        options: ["Amazon Glacier", "Amazon RDS", "AWS Snowball", "Amazon Redshift", "Amazon EFS"],
        correctAnswer: 1,
        explanation: "Amazon RDS and EFS are designed for frequently changing data with read/write operations. (Correct answers: B, E)"
    },
    {
        question: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        options: ["It simplifies relational database administration tasks", "It provides 99.99999999999% reliability and durability", "It automatically scales databases for loads", "It enables users to dynamically adjust CPU and RAM resources"],
        correctAnswer: 0,
        explanation: "RDS is a managed service that automates time-consuming database administration tasks like backups, patching, and updates."
    },
    {
        question: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        options: ["Amazon Aurora", "Amazon Redshift", "Amazon DynamoDB", "Amazon ElastiCache"],
        correctAnswer: 0,
        explanation: "Amazon Aurora is a MySQL-compatible database that automatically scales storage and supports read replicas."
    },
    {
        question: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        options: ["Availability Zone", "Edge location", "Region", "Private networking"],
        correctAnswer: 0,
        explanation: "An Availability Zone consists of one or more data centers with redundant power, networking, and connectivity."
    },
    {
        question: "Which of the following is a shared control between the customer and AWS?",
        options: ["Providing a key for Amazon S3 client-side encryption", "Configuration of an Amazon EC2 instance", "Environmental controls of physical AWS data centers", "Awareness and training"],
        correctAnswer: 3,
        explanation: "Awareness and training is a shared control where AWS trains AWS employees and customers train their staff."
    },
    {
        question: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        options: ["A minimum of one", "A minimum of two", "A minimum of three", "A minimum of four or more"],
        correctAnswer: 1,
        explanation: "Deploying across at least two Availability Zones provides high availability and fault tolerance."
    },
    {
        question: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        options: ["It allows the business to eliminate IT bills", "It allows the business to put a server in each customer's data center", "It allows the business to focus on business activities", "It allows the business to leave servers unpatched"],
        correctAnswer: 2,
        explanation: "AWS manages infrastructure, allowing businesses to focus on core business activities rather than hardware management."
    },
    {
        question: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EC2 Instance Store"],
        correctAnswer: 0,
        explanation: "Amazon S3 provides low-cost, durable storage with immediate retrieval access for backups."
    },
    {
        question: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        options: ["API keys", "Access keys", "User names/Passwords", "SSH keys"],
        correctAnswer: 1,
        explanation: "Access keys (Access Key ID and Secret Access Key) enable programmatic access via CLI and APIs."
    },
    {
        question: "Which of the following is a fast and reliable NoSQL database service?",
        options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
        correctAnswer: 2,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database with single-digit millisecond performance."
    },
    {
        question: "What is an example of agility in the AWS Cloud?",
        options: ["Access to multiple instance types", "Access to managed services", "Using Consolidated Billing to produce one bill", "Decreased acquisition time for new compute resources"],
        correctAnswer: 3,
        explanation: "Agility means rapidly provisioning resources in minutes instead of weeks, accelerating innovation."
    },
    {
        question: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        options: ["AWS IAM", "AWS Organizations", "AWS Schema Conversion Tool", "AWS Config"],
        correctAnswer: 1,
        explanation: "AWS Organizations enables central governance and management of multiple AWS accounts."
    },
    {
        question: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        options: ["Using many instances in parallel", "Using a single large instance during off-peak hours", "Using dedicated hardware", "Using a large GPU instance type"],
        correctAnswer: 0,
        explanation: "Parallel processing across multiple instances follows AWS best practices for scalability and performance."
    },
    {
        question: "For which auditing process does AWS have sole responsibility?",
        options: ["AWS IAM policies", "Physical security", "Amazon S3 bucket policies", "AWS CloudTrail Logs"],
        correctAnswer: 1,
        explanation: "AWS is solely responsible for physical security audits of data centers and infrastructure."
    },
    {
        question: "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
        options: ["Fault tolerance", "Global reach", "Pay-as-you-go pricing", "High availability"],
        correctAnswer: 1,
        explanation: "AWS's global infrastructure with Regions and edge locations worldwide enables low latency for international users."
    },
    {
        question: "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
        options: ["Patching underlying infrastructure", "Physical security", "Patching Amazon EC2 instances", "Patching network infrastructure"],
        correctAnswer: 2,
        explanation: "Customers are responsible for patching guest operating systems and applications on EC2 instances."
    },
    {
        question: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        options: ["Create one global AWS account and move all AWS resources to that account", "Sign up for three years of Reserved Instance pricing up front", "Use the consolidated billing feature from AWS Organizations", "Sign up for the AWS Enterprise support plan to get volume discounts"],
        correctAnswer: 2,
        explanation: "Consolidated billing combines usage across accounts for volume discounts without moving resources."
    },
    {
        question: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
        options: ["Summaries by Amazon Simple Notification Service (Amazon SNS)", "Free Amazon Elasticsearch Service analytics", "Provided at no charge", "Real-time monitoring", "Adjustable retention"],
        correctAnswer: 3,
        explanation: "CloudWatch Logs provides real-time monitoring and configurable retention periods. (Correct answers: D, E)"
    },
    {
        question: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        options: ["Amazon Route 53", "Amazon Neptune", "Amazon SageMaker", "Amazon Lightsail"],
        correctAnswer: 0,
        explanation: "Amazon Route 53 is AWS's scalable and highly available DNS web service."
    },
    {
        question: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO)",
        options: ["Reduced latency to users", "The application's presentation in the local language", "Data sovereignty compliance", "Cooling costs in hotter climates", "Proximity to the customer's office for on-site visits"],
        correctAnswer: 0,
        explanation: "Latency to users and data sovereignty/compliance requirements are key factors in Region selection. (Correct answers: A, C)"
    }
    ],
    14: [
    {
        question: "Which storage service can be used as a low-cost option for hosting static websites?",
        options: ["Amazon Glacier", "Amazon DynamoDB", "Amazon Elastic File System (Amazon EFS)", "Amazon Simple Storage Service (Amazon S3)"],
        correctAnswer: 3,
        explanation: "Amazon S3 can host static websites with low cost and high availability."
    },
    {
        question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        options: ["Reserved Instances", "On-Demand", "Dedicated Hosts", "Spot Instances"],
        correctAnswer: 3,
        explanation: "Spot Instances can provide up to 90% discount compared to On-Demand pricing by using spare EC2 capacity."
    },
    {
        question: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        options: ["Physical access controls", "Data encryption", "Secure disposal of storage devices", "Environmental risk management"],
        correctAnswer: 1,
        explanation: "Customers are responsible for data encryption both at rest and in transit."
    },
    {
        question: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        options: ["Amazon EC2", "Amazon Route 53", "Amazon ElastiCache", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Amazon EC2 allows full control to install and manage custom database software."
    },
    {
        question: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
        options: ["Amazon Simple Storage Service (Amazon S3)", "Amazon DynamoDB", "Amazon Kinesis", "Amazon Redshift"],
        correctAnswer: 3,
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service optimized for analytics."
    },
    {
        question: "Which statement best describes Elastic Load Balancing?",
        options: ["It translates a domain name into an IP address using DNS", "It distributes incoming application traffic across one or more Amazon EC2 instances", "It collects metrics on connected Amazon EC2 instances", "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic"],
        correctAnswer: 1,
        explanation: "Elastic Load Balancing automatically distributes incoming traffic across multiple targets for high availability."
    },
    {
        question: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
        options: ["Command line interface", "On-premises", "Software Development Kits", "Software-as-a-service", "Hybrid"],
        correctAnswer: 0,
        explanation: "AWS CLI and SDKs are primary programmatic interfaces for AWS services. (Correct answers: A, C)"
    },
    {
        question: "The AWS Cloud's multiple Regions are an example of:",
        options: ["Agility", "Global infrastructure", "Elasticity", "Pay-as-you-go pricing"],
        correctAnswer: 1,
        explanation: "Multiple AWS Regions worldwide form part of AWS's global infrastructure for low latency and compliance."
    },
    {
        question: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
        options: ["AWS Storage Gateway", "Amazon S3", "Amazon Elastic File System (EFS)", "Amazon Glacier", "Amazon CloudFront"],
        correctAnswer: 1,
        explanation: "S3 stores video content and CloudFront CDN delivers it with low latency globally. (Correct answers: B, E)"
    },
    {
        question: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        options: ["Cloud-native", "Partner network", "Hybrid architecture", "Infrastructure as a service"],
        correctAnswer: 2,
        explanation: "Hybrid architecture combines cloud resources with on-premises infrastructure."
    },
    {
        question: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        options: ["They require the customer to monitor and replace failing instances", "They have better performance than customer-managed services", "They simplify patching and updating underlying OSs", "They do not require the customer to optimize instance type or size selections"],
        correctAnswer: 2,
        explanation: "AWS Managed Services handles OS patching, backups, and updates automatically."
    },
    {
        question: "Which service provides a virtually unlimited amount of online highly durable object storage?",
        options: ["Amazon Redshift", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Container Service (Amazon ECS)", "Amazon S3"],
        correctAnswer: 3,
        explanation: "Amazon S3 provides unlimited object storage with 99.999999999% durability."
    },
    {
        question: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        options: ["IAM group", "IAM user", "IAM role", "IAM policy"],
        correctAnswer: 1,
        explanation: "IAM users have access keys (Access Key ID and Secret Access Key) for programmatic access via CLI."
    },
    {
        question: "Which of the following security-related services does AWS offer? (Select TWO)",
        options: ["Multi-factor authentication physical tokens", "AWS Trusted Advisor security checks", "Data encryption", "Automated penetration testing", "Amazon S3 copyrighted content detection"],
        correctAnswer: 1,
        explanation: "AWS provides Trusted Advisor security checks and data encryption services. (Correct answers: B, C)"
    },
    {
        question: "Which AWS managed service is used to host databases?",
        options: ["AWS Batch", "AWS Artifact", "AWS Data Pipeline", "Amazon RDS"],
        correctAnswer: 3,
        explanation: "Amazon RDS is a managed relational database service that handles setup, operation, and scaling."
    },
    {
        question: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EFS"],
        correctAnswer: 3,
        explanation: "Amazon EFS provides scalable, elastic NFS file storage for Linux workloads."
    },
    {
        question: "When architecting cloud applications, which of the following are a key design principle?",
        options: ["Use the largest instance possible", "Provision capacity for peak load", "Use the Scrum development process", "Implement elasticity"],
        correctAnswer: 3,
        explanation: "Elasticity enables applications to scale dynamically based on demand rather than provisioning for peak load."
    },
    {
        question: "Which AWS service should be used for long-term, low-cost storage of data backups?",
        options: ["Amazon RDS", "Amazon Glacier", "AWS Snowball", "AWS EBS"],
        correctAnswer: 1,
        explanation: "Amazon Glacier (S3 Glacier) provides extremely low-cost archival storage for long-term backups."
    },
    {
        question: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        options: ["Granting access to individuals and services", "Encrypting data in transit", "Updating Amazon EC2 host firmware", "Updating operating systems"],
        correctAnswer: 2,
        explanation: "AWS is responsible for maintaining the underlying infrastructure including host firmware updates."
    },
    {
        question: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        options: ["AWS Marketplace", "Amazon Lumberyard", "AWS Artifact", "Amazon CloudSearch"],
        correctAnswer: 0,
        explanation: "AWS Marketplace is a digital catalog of third-party software that runs on AWS."
    },
    {
        question: "Which of the following is a benefit of using the AWS Cloud?",
        options: ["Permissive security removes the administrative burden", "Ability to focus on revenue-generating activities", "Control over cloud network hardware", "Choice of specific cloud hardware vendors"],
        correctAnswer: 1,
        explanation: "AWS manages infrastructure, freeing businesses to focus on revenue-generating activities and innovation."
    },
    {
        question: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        options: ["Dedicated Hosts", "Reserved Instances", "On-Demand Instances", "No Upfront Reserved Instances"],
        correctAnswer: 0,
        explanation: "Dedicated Hosts provide physical server isolation for compliance and licensing requirements."
    },
    {
        question: "Which AWS service provides the ability to manage infrastructure as code?",
        options: ["AWS CodePipeline", "AWS CodeDeploy", "AWS Direct Connect", "AWS CloudFormation"],
        correctAnswer: 3,
        explanation: "AWS CloudFormation enables infrastructure as code using JSON or YAML templates."
    },
    {
        question: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        options: ["AWS Config", "AWS Trusted Advisor", "Amazon CloudWatch", "Amazon Inspector"],
        correctAnswer: 0,
        explanation: "AWS Config tracks resource configurations and changes for compliance auditing and change management."
    },
    {
        question: "What is Amazon CloudWatch?",
        options: ["A code repository with customizable build and team commit features", "A metrics repository with customizable notification thresholds and channels", "A security configuration repository with threat analytics", "A rule repository of a web application firewall with automated vulnerability prevention features"],
        correctAnswer: 1,
        explanation: "CloudWatch is a monitoring service that collects metrics and provides customizable alarms and notifications."
    },
    {
        question: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        options: ["AWS Server Migration Service", "AWS Organizations", "AWS Budgets", "AWS Trusted Advisor"],
        correctAnswer: 1,
        explanation: "AWS Organizations with consolidated billing combines usage across accounts for volume discounts."
    },
    {
        question: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
        options: ["AWS Elastic Beanstalk", "AWS OpsWorks", "AWS CodeDeploy", "AWS Batch", "AWS X-Ray"],
        correctAnswer: 1,
        explanation: "OpsWorks and CodeDeploy support hybrid deployments to on-premises servers. (Correct answers: B, C)"
    },
    {
        question: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Convertible Reserved Instances"],
        correctAnswer: 2,
        explanation: "Spot Instance pricing fluctuates based on supply and demand of spare EC2 capacity."
    },
    {
        question: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
        options: ["Use manual monitoring", "Use fixed servers", "Implement loose coupling", "Rely on individual components", "Design for scalability"],
        correctAnswer: 2,
        explanation: "Loose coupling and scalability are key principles for modernizing monolithic applications. (Correct answers: C, E)"
    },
    {
        question: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 1,
        explanation: "Business Support provides 1-hour response time for production system down cases."
    },
    {
        question: "Where can AWS compliance and certification reports be downloaded?",
        options: ["AWS Artifact", "AWS Concierge", "AWS Certificate Manager", "AWS Trusted Advisor"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides on-demand access to compliance reports and certifications."
    },
    {
        question: "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
        options: ["AWS Service Health Dashboard", "AWS X-Ray", "AWS Personal Health Dashboard", "Amazon CloudWatch"],
        correctAnswer: 2,
        explanation: "AWS Personal Health Dashboard provides personalized alerts and guidance for your AWS resources."
    },
    {
        question: "Which of the following is an advantage of consolidated billing on AWS?",
        options: ["Volume pricing qualification", "Shared access permissions", "Multiple bills per account", "Eliminates the need for tagging"],
        correctAnswer: 0,
        explanation: "Consolidated billing combines usage across accounts to qualify for volume pricing discounts."
    },
    {
        question: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        options: ["Conduct penetration testing using Amazon Inspector, and then notify AWS support", "Request and wait for approval from the customer's internal security team, and then conduct testing", "Notify AWS support, and then conduct testing immediately", "Request and wait for approval from AWS support, and then conduct testing"],
        correctAnswer: 3,
        explanation: "Customers must request and receive approval from AWS before conducting penetration testing on AWS resources."
    },
    {
        question: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        options: ["Amazon Elastic Block Store (Amazon EBS)", "Amazon Machine Image", "Amazon EC2 Systems Manager", "Amazon AppStream 2.0"],
        correctAnswer: 1,
        explanation: "Amazon Machine Images (AMIs) contain pre-configured templates for launching EC2 instances."
    },
    {
        question: "How would an AWS customer easily apply common access controls to a large set of users?",
        options: ["Apply an IAM policy to an IAM group", "Apply an IAM policy to an IAM role", "Apply the same IAM policy to all IAM users with access to the same workload", "Apply an IAM policy to an Amazon Cognito user pool"],
        correctAnswer: 0,
        explanation: "IAM groups allow applying common policies to multiple users efficiently."
    },
    {
        question: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage report", "AWS Billing dashboard"],
        correctAnswer: 2,
        explanation: "AWS Cost and Usage Report provides the most detailed and granular billing data."
    },
    {
        question: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
        options: ["AWS Concierge", "AWS CloudFormation", "Amazon Simple Storage Service (Amazon S3)", "Amazon EC2 Auto Scaling", "AWS Management Console"],
        correctAnswer: 1,
        explanation: "CloudFormation and Management Console can both launch RDS clusters. (Correct answers: B, E)"
    },
    {
        question: "Which of the following is an AWS Cloud architecture design principle?",
        options: ["Implement single points of failure", "Implement loose coupling", "Implement monolithic design", "Implement vertical scaling"],
        correctAnswer: 1,
        explanation: "Loose coupling reduces dependencies between components for improved scalability and resilience."
    },
    {
        question: "Which of the following security measures protect access to an AWS account? (Select TWO)",
        options: ["Enable AWS CloudTrail", "Grant least privilege access to IAM users", "Create one IAM user and share with many developers and users", "Enable Amazon CloudFront", "Activate multi-factor authentication (MFA) for privileged users"],
        correctAnswer: 1,
        explanation: "Least privilege access and MFA are critical account security measures. (Correct answers: B, E)"
    },
    {
        question: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        options: ["Amazon Glacier", "AWS Snowball", "AWS Storage Gateway", "Amazon Elastic Block Storage (Amazon EBS)"],
        correctAnswer: 2,
        explanation: "AWS Storage Gateway connects on-premises environments to AWS cloud storage seamlessly."
    },
    {
        question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
        correctAnswer: 1,
        explanation: "With EC2, customers manage the guest OS, security patching, and instance networking configuration."
    },
    {
        question: "Which of the following is an important architectural design principle when designing cloud applications?",
        options: ["Use multiple Availability Zones", "Use tightly coupled components", "Use open source software", "Provision extra capacity"],
        correctAnswer: 0,
        explanation: "Multi-AZ deployment improves fault tolerance and high availability."
    },
    {
        question: "Which AWS support plan includes a dedicated Technical Account Manager?",
        options: ["Developer", "Enterprise", "Business", "Basic"],
        correctAnswer: 1,
        explanation: "Enterprise Support includes a dedicated Technical Account Manager (TAM)."
    },
    {
        question: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        options: ["AWS manages the data stored in Amazon RDS tables", "AWS manages the maintenance of the operating system", "AWS automatically scales up instance types on demand", "AWS manages the database type"],
        correctAnswer: 1,
        explanation: "RDS is a managed service where AWS handles OS maintenance, patching, and backups."
    },
    {
        question: "Which service is best for storing common database query results, which helps to alleviate database access load?",
        options: ["Amazon Machine Learning", "Amazon SQS", "Amazon ElastiCache", "Amazon EC2 Instance Store"],
        correctAnswer: 2,
        explanation: "Amazon ElastiCache provides in-memory caching for database query results to reduce database load."
    },
    {
        question: "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
        options: ["Patching operating system software", "Encrypting data", "Enforcing multi-factor authentication", "Auditing physical data center assets"],
        correctAnswer: 3,
        explanation: "AWS is solely responsible for physical security and auditing of data center assets."
    },
    {
        question: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
        options: ["AWS Trusted Advisor", "AWS Online Tech Talks", "AWS Blog", "AWS Forums", "AWS Classroom Training"],
        correctAnswer: 1,
        explanation: "AWS Online Tech Talks and Classroom Training offer instructor-led learning. (Correct answers: B, E)"
    },
    {
        question: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
        options: ["Amazon CloudFront distributions", "Amazon Route 53", "Security Groups", "Subnets", "Elastic Load Balancing"],
        correctAnswer: 2,
        explanation: "Security Groups and Subnets are configured through the VPC Dashboard. (Correct answers: C, D)"
    },
    {
        question: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        options: ["Use AWS Budgets on each account to pay only to budget", "Contact AWS Support for a monthly bill", "Create an AWS Organization from the payer account and invite the other accounts to join", "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report"],
        correctAnswer: 2,
        explanation: "AWS Organizations enables consolidated billing by inviting member accounts to join under a payer account."
    }
    ],
    15: [
    {
        question: "How do customers benefit from Amazon's massive economies of scale?",
        options: ["Periodic price reductions as the result of Amazon's operational efficiencies", "New Amazon EC2 instance types providing the latest hardware", "The ability to scale up and down when needed", "Increased reliability in the underlying hardware of Amazon EC2 instances"],
        correctAnswer: 0,
        explanation: "Amazon passes on cost savings from economies of scale to customers through periodic price reductions."
    },
    {
        question: "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
        options: ["Amazon CloudFront", "AWS Cloud9", "AWS CloudTrail", "AWS CloudHSM", "Amazon CloudWatch"],
        correctAnswer: 2,
        explanation: "CloudTrail logs account activity and CloudWatch monitors resource metrics. (Correct answers: C, E)"
    },
    {
        question: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
        options: ["Patching databases software", "Testing application releases", "Backing up databases", "Creating database schema", "Running penetration tests"],
        correctAnswer: 0,
        explanation: "AWS managed services handle database patching and backups automatically. (Correct answers: A, C)"
    },
    {
        question: "In which scenario should Amazon EC2 Spot Instances be used?",
        options: ["A company wants to move its main website to AWS from an on-premises web server", "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime", "A company's heavily used legacy database is currently running on-premises", "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances"],
        correctAnswer: 3,
        explanation: "Spot Instances are ideal for interruptible, fault-tolerant workloads that can handle interruptions."
    },
    {
        question: "Which AWS feature should a customer leverage to achieve high availability of an application?",
        options: ["AWS Direct Connect", "Availability Zones", "Data centers", "Amazon Virtual Private Cloud (Amazon VPC)"],
        correctAnswer: 1,
        explanation: "Deploying across multiple Availability Zones provides high availability and fault tolerance."
    },
    {
        question: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 0,
        explanation: "Enterprise Support includes Infrastructure Event Management at no additional cost."
    },
    {
        question: "Which AWS service can serve a static website?",
        options: ["Amazon S3", "Amazon Route 53", "Amazon QuickSight", "AWS X-Ray"],
        correctAnswer: 0,
        explanation: "Amazon S3 can host static websites with HTML, CSS, and client-side JavaScript."
    },
    {
        question: "How does AWS shorten the time to provision IT resources?",
        options: ["It supplies an online IT ticketing platform for resource requests", "It supports automatic code validation services", "It provides the ability to programmatically provision existing resources", "It automates the resource request process from a company's IT vendor list"],
        correctAnswer: 2,
        explanation: "AWS enables programmatic provisioning through APIs, CLI, and Infrastructure as Code."
    },
    {
        question: "What can AWS edge locations be used for? (Select TWO)",
        options: ["Hosting applications", "Delivering content closer to users", "Running NoSQL database caching services", "Reducing traffic on the server by caching responses", "Sending notification messages to end users"],
        correctAnswer: 1,
        explanation: "Edge locations deliver content with low latency and cache responses. (Correct answers: B, D)"
    },
    {
        question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        options: ["A public and private key-pair", "Amazon Inspector", "AWS Identity and Access Management (IAM) policies", "Security Groups"],
        correctAnswer: 2,
        explanation: "IAM policies control granular access to S3 buckets and objects."
    },
    {
        question: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        options: ["Think parallel", "Implement elasticity", "Decouple your components", "Design for failure"],
        correctAnswer: 1,
        explanation: "Elasticity enables systems to scale dynamically while maintaining performance."
    },
    {
        question: "Which of the following tasks is the responsibility of AWS?",
        options: ["Encrypting client-side data", "Configuring AWS Identity and Access Management (IAM) roles", "Securing the Amazon EC2 hypervisor", "Setting user password policies"],
        correctAnswer: 2,
        explanation: "AWS is responsible for securing the hypervisor layer and underlying infrastructure."
    },
    {
        question: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        options: ["The ability to bid for a lower hourly cost", "Paying a daily rate regardless of time used", "Paying only for time used", "Pre-paying for instances and paying a lower hourly rate"],
        correctAnswer: 2,
        explanation: "On-Demand pricing allows paying for compute capacity by the hour/second with no long-term commitments."
    },
    {
        question: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        options: ["AWS Well-Architected Framework documentation", "Amazon CloudFront", "AWS CodeCommit", "AWS Quick Start reference deployments"],
        correctAnswer: 3,
        explanation: "AWS Quick Starts provide automated reference deployments for popular IT solutions following best practices."
    },
    {
        question: "Which of the following services is in the category of AWS serverless platform?",
        options: ["Amazon EMR", "Elastic Load Balancing", "AWS Lambda", "AWS Mobile Hub"],
        correctAnswer: 2,
        explanation: "AWS Lambda is a core serverless compute service that runs code without provisioning servers."
    },
    {
        question: "Which services are parts of the AWS serverless platform?",
        options: ["Amazon EC2, Amazon S3, Amazon Athena", "Amazon Kinesis, Amazon SQS, Amazon EMR", "AWS Step Functions, Amazon DynamoDB, Amazon SNS", "Amazon Athena, Amazon Cognito, Amazon EC2"],
        correctAnswer: 2,
        explanation: "Step Functions, DynamoDB, and SNS are fully managed serverless services."
    },
    {
        question: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        options: ["Physical controls", "Patch management", "Zone security", "Data center auditing"],
        correctAnswer: 1,
        explanation: "Patch management is shared: AWS patches infrastructure, customers patch guest OS and applications."
    },
    {
        question: "What can AWS edge locations be used for? (Select TWO)",
        options: ["Hosting applications", "Delivering content closer to users", "Running NoSQL database caching services", "Reducing traffic on the server by caching responses", "Sending notification messages to end users"],
        correctAnswer: 1,
        explanation: "Edge locations cache and deliver content with low latency globally. (Correct answers: B, D)"
    },
    {
        question: "What technology enables compute capacity to adjust as loads change?",
        options: ["Load balancing", "Automatic failover", "Round robin", "Auto Scaling"],
        correctAnswer: 3,
        explanation: "Auto Scaling automatically adjusts compute capacity to maintain performance at the lowest cost."
    },
    {
        question: "Which AWS services are defined as global instead of regional? (Select TWO)",
        options: ["Amazon Route 53", "Amazon EC2", "Amazon S3", "Amazon CloudFront", "Amazon DynamoDB"],
        correctAnswer: 0,
        explanation: "Route 53 and CloudFront are global services not tied to specific regions. (Correct answers: A, D)"
    },
    {
        question: "Which AWS service would you use to obtain compliance reports and certificates?",
        options: ["AWS Artifact", "AWS Lambda", "Amazon Inspector", "AWS Certificate Manager"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides on-demand access to compliance reports and security certifications."
    },
    {
        question: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
        options: ["Ensuring that application data is encrypted at rest", "Ensuring that AWS NTP servers are set to the correct time", "Ensuring that users have received security training in the use of AWS services", "Ensuring that access to data centers is restricted", "Ensuring that hardware is disposed of properly"],
        correctAnswer: 0,
        explanation: "Customers are responsible for data encryption and user security training. (Correct answers: A, C)"
    },
    {
        question: "Which AWS service can be used to manually launch instances based on resource requirements?",
        options: ["Amazon EBS", "Amazon S3", "Amazon EC2", "Amazon ECS"],
        correctAnswer: 2,
        explanation: "Amazon EC2 allows launching virtual server instances with customizable configurations."
    },
    {
        question: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        options: ["Amazon EC2 Spot Instances", "Amazon EC2 Dedicated Instances", "Amazon EC2 On-Demand Instances", "Amazon EC2 Reserved Instances"],
        correctAnswer: 3,
        explanation: "Reserved Instances provide significant discounts for predictable, long-term workloads."
    },
    {
        question: "The financial benefits of using AWS are: (Select TWO)",
        options: ["Reduced Total Cost of Ownership (TCO)", "Increased capital expenditure (capex)", "Reduced operational expenditure (opex)", "Deferred payment plans for startups", "Business credit lines for startups"],
        correctAnswer: 0,
        explanation: "AWS reduces both TCO and operational expenses through pay-as-you-go pricing. (Correct answers: A, C)"
    },
    {
        question: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
        options: ["Patching of the guest operating system", "Security awareness and training", "Physical and environmental controls", "Development of an IAM password policy"],
        correctAnswer: 2,
        explanation: "AWS is solely responsible for physical security and environmental controls of data centers."
    },
    {
        question: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        options: ["AWS VPN", "Amazon Redshift", "API Gateway", "Amazon Direct Connect"],
        correctAnswer: 0,
        explanation: "AWS VPN and Direct Connect both enable secure connectivity between VPC and on-premises networks. (Correct answers: A, D)"
    },
    {
        question: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Lambda", "Amazon DynamoDB", "AWS CodeCommit"],
        correctAnswer: 1,
        explanation: "AWS Lambda enables serverless computing, eliminating the need for server management."
    },
    {
        question: "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
        options: ["AWS Personal Health Dashboard", "AWS Service Health Dashboard", "AWS Trusted Advisor", "AWS Infrastructure Event Management"],
        correctAnswer: 0,
        explanation: "Personal Health Dashboard provides personalized alerts for events affecting your specific resources."
    },
    {
        question: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
        options: ["Fault Tolerance", "Instance Usage", "Infrastructure", "Performance", "Storage Capacity"],
        correctAnswer: 0,
        explanation: "Trusted Advisor provides recommendations in five categories including Fault Tolerance and Performance. (Correct answers: A, D)"
    },
    {
        question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
        correctAnswer: 1,
        explanation: "With EC2, customers are responsible for guest OS patching, configuration, and networking."
    },
    {
        question: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        options: ["Moving from variable operational expense (opex) to upfront capital expense (capex)", "Moving from upfront capital expense (capex) to variable capital expense (capex)", "Moving from upfront capital expense (capex) to variable operational expense (opex)", "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"],
        correctAnswer: 2,
        explanation: "Cloud migration shifts spending from upfront capital expenses to variable operational expenses."
    },
    {
        question: "How should a customer forecast the future costs for running a new web application?",
        options: ["Amazon Aurora Backtrack", "Amazon CloudWatch Billing Alarms", "AWS Simple Monthly Calculator", "AWS Cost and Usage report"],
        correctAnswer: 2,
        explanation: "AWS Simple Monthly Calculator (now AWS Pricing Calculator) helps estimate future costs for planned workloads."
    },
    {
        question: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 1,
        explanation: "Business Support is the minimum plan that includes 24/7 phone support."
    },
    {
        question: "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
        options: ["Application security", "Edge location management", "Patch management", "Client-side data"],
        correctAnswer: 1,
        explanation: "AWS is solely responsible for managing edge locations and global infrastructure."
    },
    {
        question: "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
        options: ["Multi-factor authentication", "Groups", "Password policies", "Access keys"],
        correctAnswer: 1,
        explanation: "IAM groups allow applying common permissions to multiple users efficiently."
    },
    {
        question: "Which of the following are benefits of the AWS Cloud? (Choose TWO)",
        options: ["Unlimited uptime", "Elasticity", "Agility", "Colocation", "Capital expenses"],
        correctAnswer: 1,
        explanation: "Elasticity and agility are key cloud benefits enabling rapid scaling and deployment. (Correct answers: B, C)"
    },
    {
        question: "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
        options: ["Amazon Connect", "AWS Directory Service", "Amazon Pinpoint", "Amazon Rekognition"],
        correctAnswer: 1,
        explanation: "AWS Directory Service enables single sign-on to the AWS Management Console."
    },
    {
        question: "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
        options: ["AWS Direct Connects", "Amazon VPCs", "Edge locations", "Availability Zones"],
        correctAnswer: 3,
        explanation: "Availability Zones are isolated locations within a Region connected by low-latency links."
    },
    {
        question: "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose TWO)",
        options: ["It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks", "AWS is responsible for the maintenance of common compliance framework documentation", "It assures customers that AWS is maintaining physical security and data protection", "It ensures the use of compliance frameworks that are being used by other cloud providers", "It will adopt new compliance frameworks as they become relevant to customer workloads"],
        correctAnswer: 0,
        explanation: "AWS maintains compliance documentation and assures physical security. (Correct answers: A, B - Note: Based on the reference, A and B are most accurate)"
    },
    {
        question: "Which of the following services provides on-demand access to AWS compliance reports?",
        options: ["AWS IAM", "AWS Artifact", "Amazon GuardDuty", "AWS KMS"],
        correctAnswer: 1,
        explanation: "AWS Artifact provides on-demand access to AWS compliance and security reports."
    },
    {
        question: "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
        options: ["Security management of data center", "Patch management", "Configuration management", "User and access management"],
        correctAnswer: 0,
        explanation: "Customers fully inherit physical data center security controls from AWS."
    },
    {
        question: "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose TWO)",
        options: ["Software development", "Project management", "Storage hardware", "Physical servers", "Antivirus software license"],
        correctAnswer: 2,
        explanation: "On-premises TCO includes storage hardware and physical server costs. (Correct answers: C, D)"
    },
    {
        question: "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose TWO)",
        options: ["Maintaining the underlying Amazon EC2 hardware", "Managing the VPC network access control lists", "Encrypting data in transit and at rest", "Replacing failed hard disk drives", "Deploying hardware in different Availability Zones"],
        correctAnswer: 1,
        explanation: "Customers manage VPC network ACLs and data encryption. (Correct answers: B, C)"
    },
    {
        question: "Which scenarios represent the concept of elasticity on AWS? (Choose TWO)",
        options: ["Scaling the number of Amazon EC2 instances based on traffic", "Resizing Amazon RDS instances as business needs change", "Automatically directing traffic to less-utilized Amazon EC2 instances", "Using AWS compliance documents to accelerate the compliance process", "Having the ability to create and govern environments using code"],
        correctAnswer: 0,
        explanation: "Elasticity includes scaling EC2 instances and resizing RDS based on demand. (Correct answers: A, B)"
    },
    {
        question: "When is it beneficial for a company to use a Spot Instance?",
        options: ["When there is flexibility in when an application needs to run", "When there are mission-critical workloads", "When dedicated capacity is needed", "When an instance should not be stopped"],
        correctAnswer: 0,
        explanation: "Spot Instances are ideal for flexible, interruptible workloads at significant cost savings."
    },
    {
        question: "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose TWO)",
        options: ["Amazon EC2 instance availability", "Power consumption of the data center", "Labor costs to replace old servers", "Application developer time", "Database engine capacity"],
        correctAnswer: 1,
        explanation: "TCO analysis includes power consumption and labor costs for hardware maintenance. (Correct answers: B, C)"
    },
    {
        question: "How does AWS charge for AWS Lambda?",
        options: ["Users bid on the maximum price they are willing to pay per hour", "Users choose a 1-, 3- or 5-year upfront payment term", "Users pay for the required permanent storage on a file system or in a database", "Users pay based on the number of requests and consumed compute resources"],
        correctAnswer: 3,
        explanation: "Lambda charges based on number of requests and compute duration (GB-seconds)."
    },
    {
        question: "What function do security groups serve related to Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
        options: ["Act as a virtual firewall for the Amazon EC2 instance", "Secure AWS user accounts with AWS Identity and Access Management (IAM) policies", "Provide DDoS protection with AWS Shield", "Use Amazon CloudFront to protect the Amazon EC2 instance"],
        correctAnswer: 0,
        explanation: "Security groups act as virtual firewalls controlling inbound and outbound traffic to EC2 instances."
    },
    {
        question: "Which disaster recovery scenario offers the lowest probability of down time?",
        options: ["Backup and restore", "Pilot light", "Warm standby", "Multi-site active-active"],
        correctAnswer: 3,
        explanation: "Multi-site active-active runs duplicate environments simultaneously for near-zero downtime during disasters."
    }
    ],
    16: [
    {
        question: "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
        options: ["Cost Explorer", "AWS Total Cost of Ownership (TCO) Calculator", "AWS Simple Monthly Calculator", "AWS Trusted Advisor"],
        correctAnswer: 1,
        explanation: "AWS TCO Calculator helps estimate cost savings when migrating from on-premises to AWS."
    },
    {
        question: "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
        options: ["AWS Cost Explorer between AWS accounts", "Linked accounts and consolidated billing", "Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report", "Amazon EC2 Instance Usage Report between AWS accounts"],
        correctAnswer: 1,
        explanation: "Consolidated billing through AWS Organizations allows sharing Reserved Instance benefits across linked accounts."
    },
    {
        question: "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
        options: ["AWS Cost and Usage Reports", "AWS Organizations", "AWS Cost Explorer", "AWS Budgets"],
        correctAnswer: 1,
        explanation: "AWS Organizations provides consolidated billing for multiple AWS accounts under a single payer account."
    },
    {
        question: "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
        options: ["Amazon CloudFront", "AWS Direct Connect", "Amazon Route 53 global DNS", "Amazon Simple Storage Service (Amazon S3) transfer acceleration"],
        correctAnswer: 0,
        explanation: "CloudFront CDN caches content at edge locations worldwide for low-latency global access."
    },
    {
        question: "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
        options: ["On-premises", "Hybrid", "Cloud", "Platform as a service"],
        correctAnswer: 2,
        explanation: "Cloud deployment enables trading capital expenses (hardware) for operational expenses (pay-as-you-go)."
    },
    {
        question: "How is asset management on AWS easier than asset management in a physical data center?",
        options: ["AWS provides a Configuration Management Database that users can maintain", "AWS performs infrastructure discovery scans on the customer's behalf", "Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket", "Users can gather asset metadata reliably with a few API calls"],
        correctAnswer: 1,
        explanation: "AWS manages infrastructure assets centrally and performs automated discovery scans and tracking."
    },
    {
        question: "What feature of Amazon RDS helps to create globally redundant databases?",
        options: ["Snapshots", "Automatic patching and updating", "Cross-Region read replicas", "Provisioned IOPS"],
        correctAnswer: 2,
        explanation: "Cross-Region read replicas enable globally distributed, redundant database deployments."
    },
    {
        question: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
        options: ["Restricted access", "As-needed access", "Least privilege access", "Token access"],
        correctAnswer: 2,
        explanation: "Least privilege access means granting only the minimum permissions required to perform a task."
    },
    {
        question: "Which methods can be used to identify AWS costs by departments? (Choose TWO)",
        options: ["Enable multi-factor authentication for the AWS account root user", "Create separate accounts for each department", "Use Reserved Instances whenever possible", "Use tags to associate each instance with a particular department", "Pay bills using purchase orders"],
        correctAnswer: 1,
        explanation: "Separate accounts or cost allocation tags enable tracking costs by department. (Correct answers: B, D)"
    },
    {
        question: "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
        options: ["Securing the hardware, software, facilities, and networks that run all products and services", "Providing certificates, reports, and other documentation directly to AWS customers under NDA", "Configuring the operating system, network, and firewall", "Obtaining industry certifications and independent third-party attestations"],
        correctAnswer: 2,
        explanation: "Customers are responsible for guest OS configuration, network setup, and firewall management."
    },
    {
        question: "Which managed AWS service provides real-time guidance on AWS security best practices?",
        options: ["AWS X-Ray", "AWS Trusted Advisor", "Amazon CloudWatch", "AWS Systems Manager"],
        correctAnswer: 1,
        explanation: "AWS Trusted Advisor provides real-time recommendations including security best practices."
    },
    {
        question: "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
        options: ["Resource groups", "Lifecycle policies", "Application Load Balancer", "Amazon EC2 Auto Scaling"],
        correctAnswer: 3,
        explanation: "EC2 Auto Scaling automatically adjusts instance count based on demand for elasticity."
    },
    {
        question: "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose TWO)",
        options: ["Visualization management", "Hardware management", "Encryption management", "Facilities management", "Firewall management"],
        correctAnswer: 2,
        explanation: "Customers manage encryption and firewall configuration for their resources. (Correct answers: C, E)"
    },
    {
        question: "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
        options: ["AWS Direct Connect", "AWS Snowball", "AWS Storage Gateway", "AWS Snowball Edge"],
        correctAnswer: 2,
        explanation: "AWS Storage Gateway bridges on-premises environments with AWS cloud storage using standard protocols."
    },
    {
        question: "What is a responsibility of AWS in the shared responsibility model?",
        options: ["Updating the network ACLs to block traffic to vulnerable ports", "Patching operating systems running on Amazon EC2 instances", "Updating the firmware on the underlying EC2 hosts", "Updating the security group rules to block traffic to the vulnerable ports"],
        correctAnswer: 2,
        explanation: "AWS is responsible for updating firmware on underlying infrastructure including EC2 hosts."
    },
    {
        question: "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
        options: ["Implement loose coupling", "Design for failure", "Automate everything that can be automated", "Use services, not servers"],
        correctAnswer: 1,
        explanation: "Multi-AZ RDS deployments implement the design for failure principle for high availability."
    },
    {
        question: "What does it mean to grant least privilege to AWS IAM users?",
        options: ["It is granting permissions to a single user only", "It is granting permissions using AWS IAM policies only", "It is granting AdministratorAccess policy permissions to trustworthy users", "It is granting only the permissions required to perform a given task"],
        correctAnswer: 3,
        explanation: "Least privilege means granting only the minimum permissions needed to complete a specific task."
    },
    {
        question: "What is a benefit of loose coupling as a principle of cloud architecture design?",
        options: ["It facilitates low-latency request handling", "It allows applications to have dependent workflows", "It prevents cascading failures between different components", "It allows companies to focus on their physical data center operations"],
        correctAnswer: 2,
        explanation: "Loose coupling prevents failures in one component from cascading to other components."
    },
    {
        question: "A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet. Which service will facilitate private hybrid connectivity?",
        options: ["Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway", "AWS Direct Connect", "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration", "AWS Web Application Firewall (AWS WAF)"],
        correctAnswer: 1,
        explanation: "AWS Direct Connect provides dedicated private network connectivity between on-premises and AWS."
    },
    {
        question: "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        options: ["Implementing elasticity, enabling the application to scale up or scale down as demand changes", "Enabling several EC2 instances to run in parallel to achieve better performance", "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail", "Doubling EC2 computing resources to increase system fault tolerance"],
        correctAnswer: 2,
        explanation: "Decoupling components through isolation prevents single component failures from affecting the entire application."
    },
    {
        question: "How can a customer increase security to AWS account logons? (Choose TWO)",
        options: ["Configure AWS Certificate Manager", "Enable Multi-Factor Authentication (MFA)", "Use Amazon Cognito to manage access", "Configure a strong password policy", "Enable AWS Organizations"],
        correctAnswer: 1,
        explanation: "MFA and strong password policies enhance account logon security. (Correct answers: B, D)"
    },
    {
        question: "What AWS service would be used to centrally manage AWS access across multiple accounts?",
        options: ["AWS Service Catalog", "AWS Config", "AWS Trusted Advisor", "AWS Organizations"],
        correctAnswer: 3,
        explanation: "AWS Organizations centrally manages access policies and permissions across multiple AWS accounts."
    },
    {
        question: "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
        options: ["AWS Cost and Usage reports", "AWS Budgets", "AWS Cost Explorer", "AWS Trusted Advisor"],
        correctAnswer: 1,
        explanation: "AWS Budgets allows setting custom cost and usage budgets with alert notifications."
    },
    {
        question: "What can users access from AWS Artifact?",
        options: ["AWS security and compliance documents", "A download of configuration management details for all AWS resources", "Training materials for AWS services", "A security assessment of the applications deployed in the AWS Cloud"],
        correctAnswer: 0,
        explanation: "AWS Artifact provides access to AWS security and compliance reports and certifications."
    },
    {
        question: "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
        options: ["Enterprise", "Business", "Developer", "Basic"],
        correctAnswer: 0,
        explanation: "Enterprise Support is the only plan that includes a designated Technical Account Manager (TAM)."
    },
    {
        question: "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
        options: ["Deployment to a single Availability Zone", "Ability to recover from failure", "Design for cost optimization", "Perform operations as code"],
        correctAnswer: 1,
        explanation: "The reliability pillar includes the ability to recover from infrastructure or service failures."
    },
    {
        question: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
        options: ["Amazon EBS", "Amazon EC2 instance store", "Amazon EFS", "Amazon S3"],
        correctAnswer: 1,
        explanation: "EC2 instance store provides ephemeral storage that is lost when instances are stopped or terminated."
    },
    {
        question: "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
        options: ["Users do not have to guess about future capacity needs", "Users can utilize existing hardware contracts for purchases", "Users can fix costs no matter what their traffic is", "Users can avoid audits by using reports from AWS"],
        correctAnswer: 0,
        explanation: "AWS eliminates capacity planning guesswork through on-demand scaling."
    },
    {
        question: "Which of the following is an AWS-managed compute service?",
        options: ["Amazon SWF", "Amazon EC2", "AWS Lambda", "Amazon Aurora"],
        correctAnswer: 2,
        explanation: "AWS Lambda is a fully managed serverless compute service."
    },
    {
        question: "Which of the following is an important architectural principle when designing cloud applications?",
        options: ["Store data and backups in the same region", "Design tightly coupled system components", "Avoid multi-threading", "Design for failure"],
        correctAnswer: 3,
        explanation: "Designing for failure means anticipating and planning for component failures to maintain availability."
    },
    {
        question: "Which mechanism allows developers to access AWS services from application code?",
        options: ["AWS Software Development Kit", "AWS Management Console", "AWS CodePipeline", "AWS Config"],
        correctAnswer: 0,
        explanation: "AWS SDKs provide programmatic access to AWS services from application code."
    },
    {
        question: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
        options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Instances"],
        correctAnswer: 0,
        explanation: "On-Demand is most cost-effective for short-duration, infrequent workloads without long-term commitment."
    },
    {
        question: "Which of the following services is a MySQL-compatible database that automatically grows storage as needed?",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon Relational Database Service (Amazon RDS) for MySQL", "Amazon Lightsail", "Amazon Aurora"],
        correctAnswer: 3,
        explanation: "Amazon Aurora automatically grows storage in 10GB increments up to 64TB without manual provisioning."
    },
    {
        question: "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
        options: ["Amazon VPC endpoints", "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink", "Amazon VPC peering", "AWS Direct Connect"],
        correctAnswer: 2,
        explanation: "VPC peering enables private connectivity between two VPCs using AWS network infrastructure."
    },
    {
        question: "Which service's PRIMARY purpose is software version control?",
        options: ["Amazon CodeStar", "AWS Command Line Interface (AWS CLI)", "Amazon Cognito", "AWS CodeCommit"],
        correctAnswer: 3,
        explanation: "AWS CodeCommit is a fully managed source control service for Git-based repositories."
    },
    {
        question: "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?",
        options: ["AWS Simple Monthly Calculator", "AWS Total Cost of Ownership (TCO) Calculator", "AWS Billing and Cost Management console", "Cost Explorer"],
        correctAnswer: 1,
        explanation: "TCO Calculator compares on-premises costs with AWS cloud costs for migration analysis."
    },
    {
        question: "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
        options: ["AWS Batch", "AWS Snowball", "AWS Migration Hub", "AWS Snowmobile"],
        correctAnswer: 3,
        explanation: "AWS Snowmobile is an exabyte-scale data transfer service using a shipping container (up to 100PB)."
    },
    {
        question: "Which of the following BEST describe the AWS pricing model? (Choose TWO)",
        options: ["Fixed-term", "Pay-as-you-go", "Colocation", "Planned", "Variable cost"],
        correctAnswer: 1,
        explanation: "AWS uses pay-as-you-go pricing with variable costs based on actual usage. (Correct answers: B, E)"
    },
    {
        question: "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose TWO)",
        options: ["Public load balancers with AWS Application Auto Scaling capabilities", "F5 Big-IP and Citrix NetScaler load balancers", "Classic Load Balancers", "Cross-zone load balancers with public and private IPs", "Application Load Balancers"],
        correctAnswer: 2,
        explanation: "ELB supports Classic, Application, and Network Load Balancers. (Correct answers: C, E)"
    },
    {
        question: "Why should a company choose AWS instead of a traditional data center?",
        options: ["AWS provides users with full control over the underlying resources", "AWS does not require long-term contracts and provides a pay-as-you-go model", "AWS offers edge locations in every country, supporting global reach", "AWS has no limits on the number of resources that can be created"],
        correctAnswer: 1,
        explanation: "AWS offers pay-as-you-go pricing without long-term contracts or complex licensing."
    },
    {
        question: "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
        options: ["AWS CloudTrail across multiple Availability Zones", "Amazon CloudFront to edge locations", "AWS CloudFormation in multiple regions", "A virtual private gateway over AWS Direct Connect"],
        correctAnswer: 1,
        explanation: "CloudFront caches content at edge locations worldwide for the fastest global access."
    },
    {
        question: "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
        options: ["AWS Config", "AWS Certificate Manager", "Amazon Inspector", "AWS Artifact"],
        correctAnswer: 3,
        explanation: "AWS Artifact provides on-demand access to AWS compliance reports and security documentation."
    },
    {
        question: "Which of the following AWS services can be used to run a self-managed database?",
        options: ["Amazon Route 53", "AWS X-Ray", "AWS Snowmobile", "Amazon Elastic Compute Cloud (Amazon EC2)"],
        correctAnswer: 3,
        explanation: "EC2 allows full control to install and manage custom database software."
    },
    {
        question: "What exclusive benefit is provided to users with Enterprise Support?",
        options: ["Access to a Technical Project Manager", "Access to a Technical Account Manager", "Access to a Cloud Support Engineer", "Access to a Solutions Architect"],
        correctAnswer: 1,
        explanation: "Enterprise Support uniquely includes a designated Technical Account Manager (TAM)."
    },
    {
        question: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        options: ["Deploy applications across multiple Availability Zones within an AWS Region", "Use a hybrid cloud computing deployment model within the geographic area", "Deploy applications across multiple AWS Regions", "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions"],
        correctAnswer: 2,
        explanation: "Multi-Region deployment protects against regional disasters affecting entire geographic areas."
    },
    {
        question: "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
        options: ["It provides on-demand resources for peak usage", "It automates the provisioning of individual developer environments", "It automates customer relationship management", "It implements a fixed monthly computing budget"],
        correctAnswer: 0,
        explanation: "On-demand resources allow scaling for peak usage while paying only for what's consumed."
    },
    {
        question: "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
        options: ["Elasticity", "Reliability", "Performance", "Agility"],
        correctAnswer: 3,
        explanation: "Agility enables rapid development, deployment, and iterative changes to meet evolving requirements."
    },
    {
        question: "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
        options: ["Business and Developer Support", "Business and Basic Support", "Enterprise and Developer Support", "Enterprise and Business Support"],
        correctAnswer: 3,
        explanation: "Only Enterprise and Business Support plans include the full set of Trusted Advisor checks."
    },
    {
        question: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose TWO)",
        options: ["AWS WAF", "Amazon DynamoDB", "Amazon EC2", "Amazon CloudFront", "Amazon Inspector"],
        correctAnswer: 0,
        explanation: "AWS WAF and CloudFront include DDoS protection through AWS Shield integration. (Correct answers: A, D)"
    },
    {
        question: "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose THREE)",
        options: ["Compute costs", "Facilities costs", "Storage costs", "Data transfer costs", "Network infrastructure costs", "Hardware lifecycle costs"],
        correctAnswer: 0,
        explanation: "AWS TCO includes compute, storage, and data transfer costs. (Correct answers: A, C, D)"
    }
],
    17: [
        {
            question: "What time-savings advantage is offered with the use of Amazon Rekognition?",
            options: ["Amazon Rekognition provides automatic watermarking of images", "Amazon Rekognition provides automatic detection of objects appearing in pictures", "Amazon Rekognition provides the ability to resize millions of images automatically", "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs"],
            correctAnswer: 1,
            explanation: "Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. It also allows you to search and compare faces. Rekognition Image is based on the same proven, highly scalable, deep learning technology developed by Amazon's computer vision scientists to analyze billions of images daily for Prime Photos."
        },
        {
            question: "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
            options: ["Data center security", "Business analysis", "Project management", "Operating system administration"],
            correctAnswer: 0,
            explanation: "When comparing AWS with on-premises TCO, data center security costs are included as part of the physical infrastructure costs that AWS manages."
        },
        {
            question: "According to the AWS shared responsibility model, what is AWS responsible for?",
            options: ["Configuring Amazon VPC", "Managing application code", "Maintaining application traffic", "Managing the network infrastructure"],
            correctAnswer: 3,
            explanation: "AWS is responsible for managing the network infrastructure, including the physical network components, routers, switches, and other hardware that make up the AWS global infrastructure."
        },
        {
            question: "Which service should be used to estimate the costs of running a new project on AWS?",
            options: ["AWS TCO Calculator", "AWS Simple Monthly Calculator", "AWS Cost Explorer API", "AWS Budgets"],
            correctAnswer: 2,
            explanation: "To forecast your costs, use the AWS Cost Explorer. Use cost allocation tags to divide your resources into groups, and then estimate the costs for each group."
        },
        {
            question: "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
            options: ["AWS Organizations", "AWS Trusted Advisor", "AWS Usage Report", "Amazon EC2 dashboard"],
            correctAnswer: 1,
            explanation: "AWS Trusted Advisor checks security groups for rules that allow unrestricted access to specific ports, helping identify potential security risks."
        },
        {
            question: "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
            options: ["AWS Config", "Amazon CloudWatch", "AWS X-Ray", "AWS CloudTrail"],
            correctAnswer: 1,
            explanation: "You can monitor your estimated AWS charges by using Amazon CloudWatch. When you enable the monitoring of estimated charges for your AWS account, the estimated charges are calculated and sent several times daily to CloudWatch as metric data. Billing metric data is stored in the US East (N. Virginia) Region and represents worldwide charges."
        },
        {
            question: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
            options: ["Partial Upfront Reserved Instances for a 1-year term", "All Upfront Reserved Instances for a 1-year term", "All Upfront Reserved Instances for a 3-year term", "No Upfront Reserved Instances for a 3-year term"],
            correctAnswer: 2,
            explanation: "All Upfront Reserved Instances for a 3-year term offer the most significant discount compared to On-Demand Instances, as you commit to the longest term and pay everything upfront."
        },
        {
            question: "Which of the following is the responsibility of AWS?",
            options: ["Setting up AWS Identity and Access Management (IAM) users and groups", "Physically destroying storage media at end of life", "Patching guest operating systems", "Configuring security settings on Amazon EC2 instances"],
            correctAnswer: 1,
            explanation: "Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly. When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88. Media that stored customer data is not removed from AWS control until it has been securely decommissioned."
        },
        {
            question: "Which of the following is an advantage of using AWS?",
            options: ["AWS audits user data", "Data is automatically secure", "There is no guessing on capacity needs", "AWS manages compliance needs"],
            correctAnswer: 2,
            explanation: "AWS allows you to access as much or as little capacity as you need, and scale up or down as required with only a few minutes' notice, eliminating the need to guess capacity requirements."
        },
        {
            question: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
            options: ["AWS Lambda", "Amazon DynamoDB Accelerator", "Amazon Route 53", "Amazon CloudFront"],
            correctAnswer: 3,
            explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."
        },
        {
            question: "Which services manage and automate application deployments on AWS? (Choose TWO)",
            options: ["AWS Elastic Beanstalk", "AWS CodeCommit", "AWS Data Pipeline", "AWS CloudFormation", "AWS Config"],
            correctAnswer: 0,
            explanation: "AWS Elastic Beanstalk automates deploying code and provisioning infrastructure, while CloudFormation uses templates to deploy code and infrastructure. (Correct answers: A, D)"
        },
        {
            question: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
            options: ["AWS Budgets", "Cost Explorer", "AWS Total Cost of Ownership (TCO) Calculator", "AWS Well-Architected Tool"],
            correctAnswer: 2,
            explanation: "The TCO Calculator provides directional guidance on possible realized savings when deploying AWS. This tool is built on an underlying calculation model that generates a fair assessment of value that a customer may achieve given the data provided by the user."
        },
        {
            question: "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose TWO)",
            options: ["Design for automated failure recovery", "Use multiple Availability Zones", "Manage changes via documented processes", "Test for moderate demand to ensure reliability", "Backup recovery to an on-premises environment"],
            correctAnswer: 0,
            explanation: "Designing for automated failure recovery and using multiple Availability Zones are key principles for reliability in AWS architectures. (Correct answers: A, B)"
        },
        {
            question: "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose TWO)",
            options: ["Rotate passwords and access keys", "Remove MFA tokens", "Move resources to a different AWS Region", "Delete AWS CloudTrail Resources", "Contact AWS Support"],
            correctAnswer: 0,
            explanation: "When an AWS account is compromised, you should rotate passwords and access keys, and contact AWS Support for assistance. (Correct answers: A, E)"
        },
        {
            question: "What is an example of high availability in the AWS Cloud?",
            options: ["Consulting AWS technical support at any time day or night", "Ensuring an application remains accessible, even if a resource fails", "Making any AWS service available for use by paying on demand", "Deploying in any part of the world using AWS Regions"],
            correctAnswer: 1,
            explanation: "High availability means ensuring an application remains accessible and operational even if a resource or component fails, through redundancy and failover mechanisms."
        },
        {
            question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
            options: ["Amazon Inspector", "AWS Web Application Firewall (AWS WAF)", "Elastic Load Balancing (ELB)", "AWS Shield"],
            correctAnswer: 3,
            explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency."
        },
        {
            question: "A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?",
            options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Cost and Usage report", "Amazon Simple Notification Service (Amazon SNS)"],
            correctAnswer: 1,
            explanation: "Amazon CloudWatch monitors EC2 instances and provides metrics including CPU usage. With basic monitoring you get data every 5 minutes, and with detailed monitoring you get data every minute."
        },
        {
            question: "What is an AWS Identity and Access Management (IAM) role?",
            options: ["A user associated with an AWS resource", "A group associated with an AWS resource", "An entity that defines a set of permissions for use with an AWS resource", "An authentication credential associated with a multi-factor authentication (MFA) token"],
            correctAnswer: 2,
            explanation: "An IAM role is an entity that defines a set of permissions for making AWS service requests. Roles can be assumed by users, applications, or services to gain temporary access to AWS resources."
        },
        {
            question: "What are the advantages of Reserved Instances? (Choose TWO)",
            options: ["They provide a discount over on-demand pricing", "They provide access to additional instance types", "They provide additional networking capability", "Customers can upgrade instances as new types become available", "Customers can reserve capacity in an Availability Zone"],
            correctAnswer: 0,
            explanation: "Reserved Instances provide a significant discount over On-Demand pricing and allow customers to reserve capacity in a specific Availability Zone. (Correct answers: A, E)"
        },
        {
            question: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
            options: ["They automatically add more instances across multiple AWS Regions based on global demand of the application", "They automatically add or replace instances across multiple Availability Zones when the application needs it", "They enable the application's static content to reside closer to end users", "They are able to distribute incoming requests across a tier of web server instances"],
            correctAnswer: 1,
            explanation: "Auto Scaling groups automatically add or replace instances across multiple Availability Zones based on demand. When an unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all designated Availability Zones."
        },
        {
            question: "How can one AWS account use Reserved Instances from another AWS account?",
            options: ["By using Amazon EC2 Dedicated Instances", "By using AWS Organizations consolidated billing", "By using the AWS Cost Explorer tool", "By using AWS Budgets"],
            correctAnswer: 1,
            explanation: "With AWS Organizations consolidated billing, the account that originally purchased the Reserved Instance receives the discount first. If the purchasing account doesn't have any instances that match the terms, the discount is assigned to any matching usage on another account in the organization."
        },
        {
            question: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
            options: ["3 hours, 5 minutes", "3 hours, 5 minutes, and 6 seconds", "3 hours, 6 minutes", "4 hours"],
            correctAnswer: 1,
            explanation: "Amazon Linux EC2 instances are billed per second with a minimum of 60 seconds. Therefore, the customer will be billed for exactly 3 hours, 5 minutes, and 6 seconds."
        },
        {
            question: "Which of the following AWS services provide compute resources? (Choose TWO)",
            options: ["AWS Lambda", "Amazon Elastic Container Service (Amazon ECS)", "AWS CodeDeploy", "Amazon Glacier", "AWS Organizations"],
            correctAnswer: 0,
            explanation: "AWS Lambda and Amazon ECS both provide compute resources. Lambda provides serverless compute, while ECS provides container orchestration. (Correct answers: A, B)"
        },
        {
            question: "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
            options: ["Amazon GameLift", "AWS CloudFormation", "AWS Data Pipeline", "AWS Glue"],
            correctAnswer: 1,
            explanation: "AWS CloudFormation provides a common language for you to model and provision AWS and third-party application resources in your cloud environment. CloudFormation allows you to use programming languages or a simple text file to model and provision resources in an automated and secure manner."
        },
        {
            question: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose TWO)",
            options: ["Amazon EBS", "AWS Direct Connect", "Amazon CloudFront", "AWS Storage Gateway", "Amazon Connect"],
            correctAnswer: 1,
            explanation: "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, and AWS Storage Gateway provides hybrid cloud storage between on-premises environments and AWS. (Correct answers: B, D)"
        },
        {
            question: "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
            options: ["AWS CloudHSM", "AWS Direct Connect", "AWS VPN", "Amazon Connect"],
            correctAnswer: 1,
            explanation: "AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations. Using industry standard 802.1q VLANs, this dedicated connection can be partitioned into multiple virtual interfaces."
        },
        {
            question: "Which services use AWS edge locations? (Choose TWO)",
            options: ["Amazon CloudFront", "AWS Shield", "Amazon EC2", "Amazon RDS", "Amazon ElastiCache"],
            correctAnswer: 0,
            explanation: "Amazon CloudFront and AWS Shield both use AWS edge locations to deliver content and provide DDoS protection closer to end users. (Correct answers: A, B)"
        },
        {
            question: "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
            options: ["Amazon VPC", "AWS Direct Connect", "AWS Directory Service", "Amazon API Gateway"],
            correctAnswer: 0,
            explanation: "Amazon Virtual Private Cloud (Amazon VPC) is a logically isolated, private section of the AWS Cloud to launch resources in a virtual data center. VPC allows you to leverage multiple Availability Zones within a region for hybrid architectures."
        },
        {
            question: "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
            options: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage report", "AWS Total Cost of Ownership (TCO) Calculator"],
            correctAnswer: 3,
            explanation: "The AWS Total Cost of Ownership (TCO) Calculator helps you compare the costs of running infrastructure in a traditional hosting environment versus on AWS."
        },
        {
            question: "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose TWO)",
            options: ["Users pay for software by the hour or month depending on licensing", "AWS Marketplace enables the user to launch applications with 1-Click", "AWS Marketplace data encryption is managed by a third-party vendor", "AWS Marketplace eliminates the need to upgrade to newer software versions", "Users can deploy third-party software without testing"],
            correctAnswer: 0,
            explanation: "AWS Marketplace allows flexible pay-as-you-go pricing by the hour or month, and enables 1-Click deployment of applications. (Correct answers: A, B)"
        },
        {
            question: "Which of the following is a cloud architectural design principle?",
            options: ["Scale up, not out", "Loosely couple components", "Build monolithic systems", "Use commercial database software"],
            correctAnswer: 1,
            explanation: "Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components. This is a key cloud architectural design principle."
        },
        {
            question: "Under the shared responsibility model, which of the following areas are the customer's responsibility? (Choose TWO)",
            options: ["Firmware upgrades of network infrastructure", "Patching of operating systems", "Patching of the underlying hypervisor", "Physical security of data centers", "Configuration of the security group"],
            correctAnswer: 1,
            explanation: "Customers are responsible for patching guest operating systems and configuring security groups. AWS handles infrastructure components like firmware and hypervisors. (Correct answers: B, E)"
        },
        {
            question: "Which service enables customers to audit and monitor changes in AWS resources?",
            options: ["AWS Trusted Advisor", "Amazon GuardDuty", "Amazon Inspector", "AWS Config"],
            correctAnswer: 3,
            explanation: "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
        },
        {
            question: "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
            options: ["AWS CloudTrail", "AWS Trusted Advisor", "Amazon CloudWatch", "Amazon Inspector"],
            correctAnswer: 1,
            explanation: "AWS Trusted Advisor checks security groups for rules that allow unrestricted access, helping identify potential security vulnerabilities in your AWS environment."
        },
        {
            question: "According to the AWS shared responsibility model, who is responsible for configuration management?",
            options: ["It is solely the responsibility of the customer", "It is solely the responsibility of AWS", "It is shared between AWS and the customer", "It is not part of the AWS shared responsibility model"],
            correctAnswer: 2,
            explanation: "Configuration management is a shared responsibility. AWS maintains the configuration of its infrastructure devices, but customers are responsible for configuring their own guest operating systems, databases, and applications."
        },
        {
            question: "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
            options: ["AWS CloudFormation", "AWS Direct Connect", "Amazon CloudFront", "Amazon Pinpoint"],
            correctAnswer: 2,
            explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."
        },
        {
            question: "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
            options: ["Security", "Reliability", "Elasticity", "High availability"],
            correctAnswer: 2,
            explanation: "Elasticity is the ability to automatically scale resources up or down to match changing workload demands, ensuring optimal resource utilization and cost efficiency."
        },
        {
            question: "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?",
            options: ["AWS Premium Support", "AWS Technical Account Manager", "AWS Solutions Architect", "AWS Abuse team"],
            correctAnswer: 3,
            explanation: "The AWS Abuse team should be contacted first when AWS resources are being used for malicious purposes, including DDoS attacks."
        },
        {
            question: "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose TWO)",
            options: ["There are no upfront commitments", "AWS manages all security in the cloud", "Users have the ability to provision resources on demand", "Users have access to free and unlimited storage", "Users have control over the physical infrastructure"],
            correctAnswer: 0,
            explanation: "AWS Cloud offers no upfront commitments with pay-as-you-go pricing, and users can provision resources on demand as needed. (Correct answers: A, C)"
        },
        {
            question: "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
            options: ["AWS Service Catalog", "AWS Config", "AWS Trusted Advisor", "AWS Organizations"],
            correctAnswer: 3,
            explanation: "AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS. It helps you centrally manage billing, control access, compliance, and security, and share resources across your AWS accounts."
        },
        {
            question: "What is AWS Trusted Advisor?",
            options: ["It is an AWS staff member who provides recommendations and best practices on how to use AWS", "It is a network of AWS partners who provide recommendations and best practices on how to use AWS", "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security", "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security"],
            correctAnswer: 2,
            explanation: "AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices. It provides automated checks and recommendations on cost optimization, performance, security, fault tolerance, and service limits."
        },
        {
            question: "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
            options: ["AWS Budgets", "AWS Cost Explorer", "AWS Organizations", "Consolidated billing"],
            correctAnswer: 1,
            explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time."
        },
        {
            question: "Which AWS service offers on-demand access to AWS security and compliance reports?",
            options: ["AWS CloudTrail", "AWS Artifact", "AWS Health", "Amazon CloudWatch"],
            correctAnswer: 1,
            explanation: "AWS Artifact is your go-to, central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports, including SOC reports, PCI reports, and certifications from accreditation bodies."
        },
        {
            question: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose TWO)",
            options: ["Companies can deploy applications in multiple AWS Regions to reduce latency", "Amazon Translate automatically translates third-party website interfaces into multiple languages", "Amazon CloudFront has multiple edge locations around the world to reduce latency", "Amazon Comprehend allows users to build applications that can respond to user requests in many languages", "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency"],
            correctAnswer: 0,
            explanation: "Deploying applications in multiple AWS Regions and using CloudFront edge locations both help reduce latency for global customers. (Correct answers: A, C)"
        },
        {
            question: "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
            options: ["AWS Config", "AWS Elastic Beanstalk", "Amazon Route 53", "Amazon CloudFront"],
            correctAnswer: 1,
            explanation: "AWS Elastic Beanstalk automatically handles deployment details including capacity provisioning, load balancing, auto-scaling, and application health monitoring. You simply upload your code and Elastic Beanstalk handles everything else."
        },
        {
            question: "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
            options: ["AWS IAM", "Amazon Connect", "Amazon VPC", "Amazon API Gateway"],
            correctAnswer: 2,
            explanation: "Amazon VPC provides network access control lists (ACLs) that act as firewalls for controlling inbound and outbound traffic at the subnet level."
        },
        {
            question: "When a company provisions web servers in multiple AWS Regions, what is being increased?",
            options: ["Coupling", "Availability", "Security", "Durability"],
            correctAnswer: 1,
            explanation: "Provisioning resources in multiple AWS Regions increases availability by ensuring the application can continue operating even if an entire region experiences an outage."
        },
        {
            question: "The pay-as-you-go pricing model for AWS services:",
            options: ["reduces capital expenditures", "requires payment up front for AWS services", "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS", "reduces operational expenditures"],
            correctAnswer: 0,
            explanation: "Pay-as-you-go pricing reduces capital expenditures (CapEx) by eliminating the need for large upfront investments in infrastructure, converting them to operational expenditures (OpEx)."
        },
        {
            question: "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
            options: ["Lifecycle management of IAM credentials", "Physical security of global infrastructure", "Encryption of Amazon EBS volumes", "Firewall configuration"],
            correctAnswer: 1,
            explanation: "AWS is responsible for the physical security of the global infrastructure, including data centers, hardware, and the physical network."
        },
        {
            question: "Which AWS service enables users to consolidate billing across multiple accounts?",
            options: ["Amazon QuickSight", "AWS Organizations", "AWS Budgets", "Amazon Forecast"],
            correctAnswer: 1,
            explanation: "You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked) accounts."
        }
    ],
    18: [
        {
            question: "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
            options: ["Managing edge locations", "Physical security", "Firewall configuration", "Global infrastructure"],
            correctAnswer: 2,
            explanation: "Under the AWS shared responsibility model, customers are responsible for security 'in' the cloud, which includes firewall configuration, security groups, and network ACLs."
        },
        {
            question: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
            options: ["AWS Senior Support Engineers", "AWS Technical Account Managers", "AWS Trusted Advisor", "AWS Discussion Forums"],
            correctAnswer: 3,
            explanation: "AWS Basic Support plan users can obtain technical assistance through AWS Discussion Forums, documentation, and whitepapers. Premium support features like TAMs are not available."
        },
        {
            question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose TWO)",
            options: ["Multiple Availability Zones", "Performance efficiency", "Security", "Encryption usage", "High availability"],
            correctAnswer: 1,
            explanation: "The five pillars of the AWS Well-Architected Framework are: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. (Correct answers: B, C)"
        },
        {
            question: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
            options: ["No upfront payment", "Hourly on-demand payment", "Partial upfront payment", "All upfront payment"],
            correctAnswer: 3,
            explanation: "All upfront payment provides the largest discount for Reserved Instances and Dedicated Host reservations because you commit to paying the entire cost upfront."
        },
        {
            question: "What is an advantage of deploying an application across multiple Availability Zones?",
            options: ["There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.", "The application will have higher availability because it can withstand a service disruption in one Availability Zone.", "There will be better coverage as Availability Zones are geographically distant and can serve a wider area.", "There will be decreased application latency that will improve the user experience."],
            correctAnswer: 1,
            explanation: "Deploying across multiple Availability Zones provides high availability by allowing the application to continue operating even if one AZ experiences a service disruption."
        },
        {
            question: "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?",
            options: ["Inform the user that AWS pricing allows for on-demand pricing.", "Direct the user to the AWS Simple Monthly Calculator for an estimate.", "Use Amazon QuickSight to analyze current spending on-premises.", "Use Amazon AppStream 2.0 for real-time pricing analytics."],
            correctAnswer: 1,
            explanation: "The AWS Simple Monthly Calculator (now AWS Pricing Calculator) is the appropriate tool to estimate costs for running applications on AWS."
        },
        {
            question: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Choose TWO)",
            options: ["Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.", "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.", "Use Amazon Athena to query data from the on-premises database servers.", "Connect the company's on-premises data center to AWS using AWS Direct Connect.", "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers."],
            correctAnswer: 1,
            explanation: "VPN connections and AWS Direct Connect both provide connectivity between on-premises data centers and AWS VPCs. (Correct answers: B, D)"
        },
        {
            question: "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
            options: ["AWS IAM", "Amazon GuardDuty", "Amazon Simple Notification Service (Amazon SNS)", "AWS WAF"],
            correctAnswer: 3,
            explanation: "AWS WAF is a web application firewall that helps protect web applications from common web exploits. You can use AWS WAF to define customizable web security rules that control which traffic accesses your web applications, including blocking specific IP addresses."
        },
        {
            question: "Treating infrastructure as code in the AWS Cloud allows users to:",
            options: ["automate migration of on-premises hardware to AWS data centers.", "let a third party automate an audit of the AWS infrastructure.", "turn over application code to AWS so it can run on the AWS infrastructure.", "automate the infrastructure provisioning process."],
            correctAnswer: 3,
            explanation: "Infrastructure as code (IaC) allows you to automate the provisioning and management of infrastructure using code, enabling consistent, repeatable deployments."
        },
        {
            question: "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?",
            options: ["AWS VPN", "AWS Direct Connect", "Amazon API Gateway", "Amazon Connect"],
            correctAnswer: 1,
            explanation: "You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection."
        },
        {
            question: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
            options: ["AWS Glue", "AWS Data Pipeline", "Amazon CloudSearch", "Amazon Athena"],
            correctAnswer: 3,
            explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL."
        },
        {
            question: "AWS CloudFormation is designed to help the user:",
            options: ["model and provision resources.", "update application code.", "set up data lakes.", "create reports for billing."],
            correctAnswer: 0,
            explanation: "AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment in an automated and secure manner."
        },
        {
            question: "Which of the following is an AWS database service?",
            options: ["Amazon Redshift", "Amazon Elastic Block Store (Amazon EBS)", "Amazon S3 Glacier", "AWS Snowball"],
            correctAnswer: 0,
            explanation: "Amazon Redshift is a fast, scalable data warehouse service that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake."
        },
        {
            question: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
            options: ["Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.", "Run AWS Trusted Advisor and review the findings.", "Open the AWS IAM console and check the inbound rule filters for open access.", "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access."],
            correctAnswer: 1,
            explanation: "AWS Trusted Advisor automatically checks security groups for rules that allow unrestricted access (0.0.0.0/0) to specific ports, providing the simplest solution."
        },
        {
            question: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose TWO)",
            options: ["AWS automatically distributes the data globally for higher durability.", "AWS will take care of operating the application.", "AWS makes it easy to architect for high availability.", "AWS can easily accommodate application demand changes.", "AWS takes care application security patching."],
            correctAnswer: 2,
            explanation: "AWS provides tools and services that make it easy to architect for high availability and can easily accommodate demand changes through elasticity. (Correct answers: C, D)"
        },
        {
            question: "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?",
            options: ["EC2 security groups", "AWS Config", "Amazon Macie", "Amazon Inspector"],
            correctAnswer: 3,
            explanation: "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS by automatically assessing applications for exposure, vulnerabilities, and deviations from best practices."
        },
        {
            question: "How can a company isolate the costs of production and non-production workloads on AWS?",
            options: ["Create Identity and Access Management (IAM) roles for production and non-production workloads.", "Use different accounts for production and non-production expenses.", "Use Amazon EC2 for non-production workloads and other services for production workloads.", "Use Amazon CloudWatch to monitor the use of services."],
            correctAnswer: 1,
            explanation: "Using different AWS accounts for production and non-production workloads is the most effective way to isolate costs and manage billing separately."
        },
        {
            question: "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
            options: ["AWS Service Catalog", "AWS Marketplace", "AWS Quick Start", "AWS CodeDeploy"],
            correctAnswer: 1,
            explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors, including security solutions."
        },
        {
            question: "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?",
            options: ["Amazon S3", "AWS Snowball", "Amazon Redshift", "Amazon S3 Glacier"],
            correctAnswer: 3,
            explanation: "S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers in highly-regulated industries that retain data sets for 7-10 years or longer."
        },
        {
            question: "What are the immediate benefits of using the AWS Cloud? (Choose TWO)",
            options: ["Increased IT staff.", "Capital expenses are replaced with variable expenses.", "User control of infrastructure.", "Increased agility.", "AWS holds responsibility for security in the cloud."],
            correctAnswer: 2,
            explanation: "User control of infrastructure and increased agility are immediate benefits of cloud adoption. (Correct answers: C, D)"
        },
        {
            question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
            options: ["Amazon GuardDuty", "Amazon Macie", "Amazon Inspector", "AWS Shield"],
            correctAnswer: 1,
            explanation: "Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS, including personally identifiable information (PII) or intellectual property."
        },
        {
            question: "What is the purpose of AWS Storage Gateway?",
            options: ["It ensures on-premises data storage is 99.999999999% durable.", "It transports petabytes of data to and from AWS.", "It connects to multiple Amazon EC2 instances.", "It connects on-premises data storage to the AWS Cloud."],
            correctAnswer: 3,
            explanation: "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises storage with AWS cloud storage, providing seamless and secure integration."
        },
        {
            question: "What should users do if they want to install an application in geographically isolated locations?",
            options: ["Install the application using multiple internet gateways.", "Deploy the application to an Amazon VPC.", "Deploy the application to multiple AWS Regions.", "Configure the application using multiple NAT gateways."],
            correctAnswer: 2,
            explanation: "To install applications in geographically isolated locations, you should deploy to multiple AWS Regions, which are physically separated geographic areas."
        },
        {
            question: "A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?",
            options: ["Elasticity", "High Availability", "Scalability", "Agility"],
            correctAnswer: 1,
            explanation: "High Availability refers to systems designed to be operational and accessible even when one or more components fail."
        },
        {
            question: "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?",
            options: ["AWS Direct Connect", "AWS VPN", "Amazon Connect", "AWS Data Pipeline"],
            correctAnswer: 0,
            explanation: "AWS Direct Connect provides a consistent and dedicated private network connection between your on-premises network and AWS."
        },
        {
            question: "Within the AWS shared responsibility model, who is responsible for security and compliance?",
            options: ["The customer is responsible.", "AWS is responsible.", "AWS and the customer share responsibility.", "AWS shares responsibility with the relevant governing body."],
            correctAnswer: 2,
            explanation: "Security and Compliance is a shared responsibility between AWS and the customer. This shared model can help relieve the customer's operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities."
        },
        {
            question: "To use the AWS CLI, users are required to generate:",
            options: ["a password policy.", "an access/secret key.", "a managed policy.", "an API key."],
            correctAnswer: 1,
            explanation: "To use the AWS CLI, users must generate an access key ID and secret access key for authentication and authorization."
        },
        {
            question: "Which AWS service is used to provide encryption for Amazon EBS?",
            options: ["AWS Certificate Manager", "AWS Systems Manager", "AWS KMS", "AWS Config"],
            correctAnswer: 2,
            explanation: "AWS Key Management Service (KMS) is used to create and manage encryption keys that can be used to encrypt Amazon EBS volumes."
        },
        {
            question: "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose TWO)",
            options: ["By the time it takes for the Lambda function to execute.", "By the number of versions of a specific Lambda function.", "By the number of requests made for a given Lambda function.", "By the programming language that is used for the Lambda function.", "By the total number of Lambda functions in an AWS account."],
            correctAnswer: 0,
            explanation: "AWS Lambda charges based on the number of requests and the duration (compute time) for your functions. (Correct answers: A, C)"
        },
        {
            question: "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose TWO)",
            options: ["There are more AWS Regions than Availability Zones.", "There are more edge locations than AWS Regions.", "An edge location is an Availability Zone.", "There are more AWS Regions than edge locations.", "There are more Availability Zones than AWS Regions."],
            correctAnswer: 1,
            explanation: "There are more edge locations (for CloudFront) than AWS Regions, and more Availability Zones than Regions since each Region contains multiple AZs. (Correct answers: B, E)"
        },
        {
            question: "What does AWS Shield Standard provide?",
            options: ["WAF rules", "DDoS protection", "Identity and Access Management (IAM) permissions and access to resources", "Data encryption"],
            correctAnswer: 1,
            explanation: "AWS Shield Standard provides protection for all AWS customers from common, most frequently occurring network and transport layer DDoS attacks at no additional charge."
        },
        {
            question: "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?",
            options: ["The cost of writing custom-built Java or Node .js code", "Penetration testing for security", "hardware required to support new applications", "Writing specific test cases for third-party applications."],
            correctAnswer: 2,
            explanation: "Moving to the AWS Cloud reduces or eliminates the need to purchase and maintain physical hardware for application workloads."
        },
        {
            question: "What does AWS Marketplace allow users to do? (Choose TWO)",
            options: ["Sell unused Amazon EC2 Spot Instances.", "Sell solutions to other AWS users.", "Buy third-party software that runs on AWS.", "Purchase AWS security and compliance documents.", "Order AWS Snowball."],
            correctAnswer: 1,
            explanation: "AWS Marketplace allows users to sell their solutions to other AWS users and buy third-party software that runs on AWS. (Correct answers: B, C)"
        },
        {
            question: "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
            options: ["All resources run using on-premises infrastructure.", "Some resources run on-premises and some run in a colocation center.", "All resources run in the AWS Cloud.", "Some resources run on-premises and some run in the AWS Cloud."],
            correctAnswer: 3,
            explanation: "Hybrid cloud architecture means some resources run on-premises while others run in the AWS Cloud, connected through services like Direct Connect or VPN."
        },
        {
            question: "Which AWS service allows users to identify the changes made to a resource over time?",
            options: ["Amazon Inspector", "AWS Config", "AWS Service Catalog", "AWS IAM"],
            correctAnswer: 1,
            explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to view configuration history and track changes over time."
        },
        {
            question: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
            options: ["By minimizing large capital expenditures", "By having no responsibility for third-party license costs", "By having no operational expenditures", "By having AWS manage applications"],
            correctAnswer: 0,
            explanation: "AWS helps you reduce Total Cost of Ownership (TCO) by reducing the need to invest in large capital expenditures and providing a pay-as-you-go model."
        },
        {
            question: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
            options: ["Ensuring network connectivity from AWS to the internet", "Patching and fixing flaws within the AWS Cloud infrastructure", "Ensuring the physical security of cloud data centers", "Ensuring Amazon EBS volumes are backed up"],
            correctAnswer: 3,
            explanation: "Under the shared responsibility model, customers are responsible for backing up their data, including Amazon EBS volumes."
        },
        {
            question: "What are the advantages of the AWS Cloud? (Choose TWO)",
            options: ["Fixed rate monthly cost", "No need to guess capacity requirements", "Increased speed to market", "Increased upfront capital expenditure", "Physical access to cloud data centers"],
            correctAnswer: 1,
            explanation: "AWS Cloud advantages include eliminating the need to guess capacity requirements and increased speed to market through rapid deployment. (Correct answers: B, C)"
        },
        {
            question: "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose TWO)",
            options: ["The credit card processing fees for application transactions in the cloud.", "The cost of purchasing and installing server hardware in the on-premises data.", "The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.", "The costs of third-party penetration testing.", "The advertising costs associated with an ongoing enterprise-wide campaign."],
            correctAnswer: 1,
            explanation: "TCO calculations should include hardware costs and infrastructure administration costs. (Correct answers: B, C)"
        },
        {
            question: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
            options: ["Service control policies (SCPs)", "Consolidated billing", "All Upfront Reserved Instances", "AWS Cost Explorer"],
            correctAnswer: 1,
            explanation: "Consolidated billing in AWS Organizations allows you to combine usage across all accounts to reach volume discount tiers more quickly."
        },
        {
            question: "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
            options: ["Virtualization infrastructure", "Network infrastructure", "Application security", "Physical security of hardware"],
            correctAnswer: 2,
            explanation: "Customers are responsible for application security, including application code, data, and identity and access management."
        },
        {
            question: "What helps a company provide a lower latency experience to its users globally?",
            options: ["Using an AWS Region that is central to all users", "Using a second Availability Zone in the AWS Region that is using used", "Enabling caching in the AWS Region that is being used", "Using edge locations to put content closer to all users"],
            correctAnswer: 3,
            explanation: "Using edge locations (through services like CloudFront) puts content closer to end users globally, reducing latency."
        },
        {
            question: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
            options: ["Users do not have to wait for infrastructure provisioning.", "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.", "AWS takes over application configuration management on behalf of users.", "Users do not need to address security and compliance issues."],
            correctAnswer: 0,
            explanation: "With AWS Cloud, users can provision infrastructure in minutes rather than waiting weeks or months, significantly increasing workforce productivity."
        },
        {
            question: "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
            options: ["AWS QuickSight", "Amazon Lightsail", "AWS Organizations", "Amazon Connect"],
            correctAnswer: 2,
            explanation: "AWS Organizations provides APIs and automation capabilities to create and manage multiple AWS accounts programmatically."
        },
        {
            question: "Which Amazon RDS feature can be used to achieve high availability?",
            options: ["Multiple Availability Zones", "Amazon Reserved Instances", "Provisioned IOPS storage", "Enhanced monitoring"],
            correctAnswer: 0,
            explanation: "Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments, which automatically maintain a standby replica in a different Availability Zone."
        },
        {
            question: "Where should users report that AWS resources are being used for malicious purposes?",
            options: ["AWS Abuse team", "AWS Shield", "AWS Support", "AWS Developer Forums"],
            correctAnswer: 0,
            explanation: "The AWS Abuse team should be contacted to report AWS resources being used for malicious purposes, including spam, DDoS attacks, or other abuse."
        },
        {
            question: "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
            options: ["AWS CloudTrail", "Amazon Simple Notification Service (Amazon SNS)", "VPC Flow Logs", "AWS CloudHSM"],
            correctAnswer: 0,
            explanation: "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing by logging all API calls and actions taken through the AWS Management Console, SDKs, and CLI."
        },
        {
            question: "What is an AWS Cloud design best practice?",
            options: ["Tight coupling of components", "Single point of failure", "High availability", "Overprovisioning of resources"],
            correctAnswer: 2,
            explanation: "High availability is a key AWS Cloud design best practice, ensuring systems remain operational and accessible even during component failures."
        },
        {
            question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
            options: ["Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.", "Customers retain full administrative access to their Amazon EC2 instances.", "Amazon EC2 instances can be launched on-demand when needed.", "Customers can permanently run enough instances to handle peak workloads."],
            correctAnswer: 2,
            explanation: "The ability to launch instances on-demand when needed allows customers to launch and terminate instances in response to varying workloads, which is more economical than purchasing enough on-premises servers to handle peak load."
        },
        {
            question: "Which AWS service would simplify migration of a database to AWS?",
            options: ["AWS Storage Gateway", "AWS Database Migration Service (AWS DMS)", "Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon AppStream 2.0"],
            correctAnswer: 1,
            explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
        }
    ],
    19: [
        {
            question: "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
            options: ["AWS Config", "AWS OpsWorks", "AWS SDK", "AWS Marketplace"],
            correctAnswer: 3,
            explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, buy, deploy, and manage software that runs on AWS."
        },
        {
            question: "Which AWS networking service enables a company to create a virtual network within AWS?",
            options: ["AWS Config", "Amazon Route 53", "AWS Direct Connect", "Amazon Virtual Private Cloud (Amazon VPC)"],
            correctAnswer: 3,
            explanation: "Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you define, providing complete control over your virtual networking environment."
        },
        {
            question: "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
            options: ["Configuring third-party applications", "Maintaining physical hardware", "Securing application access and data", "Managing custom Amazon Machine Images (AMIs)"],
            correctAnswer: 1,
            explanation: "Under the shared responsibility model, AWS is responsible for the physical infrastructure, including maintaining physical hardware in data centers."
        },
        {
            question: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
            options: ["AWS Regions", "AWS edge locations", "AWS Availability Zones", "Amazon Virtual Private Cloud (Amazon VPC)"],
            correctAnswer: 1,
            explanation: "Amazon CloudFront uses AWS edge locations distributed around the world to cache and deliver content with low latency to end users."
        },
        {
            question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
            options: ["Use AWS Cloud Directory", "Audit AWS Identity and Access Management (IAM) roles", "Enable Multi-Factor Authentication", "Enable AWS CloudTrail"],
            correctAnswer: 2,
            explanation: "Enabling Multi-Factor Authentication (MFA) adds an additional layer of security by requiring users to provide a second form of authentication beyond their password."
        },
        {
            question: "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
            options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS X-Ray", "AWS Identity and Access Management (AWS IAM)"],
            correctAnswer: 1,
            explanation: "AWS CloudTrail logs all API calls made in your AWS account, including who made the call, when it was made, and what action was taken."
        },
        {
            question: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
            options: ["Amazon Simple Notification Service (Amazon SNS)", "AWS CloudTrail", "AWS Trusted Advisor", "Amazon Route 53"],
            correctAnswer: 0,
            explanation: "Amazon Simple Notification Service (SNS) can be configured to send notifications when CloudWatch alarms are triggered."
        },
        {
            question: "Where can a customer find information about prohibited actions on AWS infrastructure?",
            options: ["AWS Trusted Advisor", "AWS Identity and Access Management (IAM)", "AWS Billing Console", "AWS Acceptable Use Policy"],
            correctAnswer: 3,
            explanation: "The AWS Acceptable Use Policy describes prohibited uses of the web services offered by Amazon Web Services."
        },
        {
            question: "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
            options: ["By replacing large variable costs with lower capital investments", "By replacing large capital investments with lower variable costs", "By allowing the provisioning of compute and storage at a fixed level to meet peak demand", "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model"],
            correctAnswer: 1,
            explanation: "AWS does not require minimum spend commitments or long-term contracts. You replace large upfront capital expenses with low variable payments that only apply to what you use."
        },
        {
            question: "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose TWO)",
            options: ["AWS Auto Scaling for Amazon EC2 instances", "Amazon VPC subnet ACLs to check the health of a service", "Distributed resources across multiple Availability Zones", "AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region", "Distributed resources across multiple AWS points of presence"],
            correctAnswer: 0,
            explanation: "AWS Auto Scaling and distributing resources across multiple Availability Zones both improve availability and reduce the impact of failures. (Correct answers: A, C)"
        },
        {
            question: "Which cloud design principle aligns with AWS Cloud best practices?",
            options: ["Create fixed dependencies among application components", "Aggregate services on a single instance", "Deploy applications in a single Availability Zone", "Distribute the compute load across multiple resources"],
            correctAnswer: 3,
            explanation: "Distributing compute load across multiple resources allows your workload to take advantage of the elasticity that AWS provides and improves availability."
        },
        {
            question: "Which of the following are recommended practices for managing IAM users? (Choose TWO)",
            options: ["Require IAM users to change their passwords after a specified period of time", "Prevent IAM users from reusing previous passwords", "Recommend that the same password be used on AWS and other sites", "Require IAM users to store their passwords in raw text", "Disable multi-factor authentication (MFA) for IAM users"],
            correctAnswer: 0,
            explanation: "Best practices include requiring password rotation after a specified period and preventing password reuse. (Correct answers: A, B)"
        },
        {
            question: "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Choose TWO)",
            options: ["Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.", "Contact AWS Support and open a case for assistance", "Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account", "Select a partner from the AWS Partner Network (APN) to assist with the migration", "Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud."],
            correctAnswer: 2,
            explanation: "AWS Professional Services and AWS Partner Network (APN) partners can provide hands-on migration assistance. (Correct answers: C, D)"
        },
        {
            question: "How does the AWS Enterprise Support Concierge team help users?",
            options: ["Supporting application development", "Providing architecture guidance", "Answering billing and account inquires", "Answering questions regarding technical support cases"],
            correctAnswer: 2,
            explanation: "The AWS Enterprise Support Concierge team provides expert assistance with billing and account inquiries for Enterprise Support customers."
        },
        {
            question: "An application designed to span multiple Availability Zones is described as:",
            options: ["being highly available", "having global reach", "using an economy of scale", "having elasticity"],
            correctAnswer: 0,
            explanation: "Applications designed to span multiple Availability Zones are highly available, meaning they can continue operating even if one AZ fails."
        },
        {
            question: "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
            options: ["AWS Regions", "Availability Zones", "subnets", "placement groups"],
            correctAnswer: 1,
            explanation: "To achieve high availability within a single geographic area (Region), EC2 instances should be deployed across at least two Availability Zones."
        },
        {
            question: "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
            options: ["AWS Trusted Advisor", "AWS Simple Monthly Calculator", "AWS Pricing Calculator", "Cost Explorer"],
            correctAnswer: 2,
            explanation: "The AWS Pricing Calculator (formerly TCO Calculator) helps you estimate the cost savings when using AWS compared to on-premises infrastructure."
        },
        {
            question: "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?",
            options: ["Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.", "Enable billing alerts in the AWS Billing and Cost Management console.", "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.", "Enable Reserved Instance sharing in the AWS Billing and Cost Management console."],
            correctAnswer: 0,
            explanation: "To apply Reserved Instance benefits to a single account, purchase from the master payer account and turn off RI sharing to prevent other accounts from using the discount."
        },
        {
            question: "Which situation should be reported to the AWS Abuse team?",
            options: ["In Availability Zone has a service disruption", "An intrusion attempt is made from an AWS IP address", "A user has trouble accessing an Amazon S3 bucket from an AWS IP address", "A user needs to change payment methods due to a compromise"],
            correctAnswer: 1,
            explanation: "Intrusion attempts or malicious activity originating from AWS IP addresses should be reported to the AWS Abuse team."
        },
        {
            question: "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose TWO)",
            options: ["Application Load Balancer", "AWS Global Accelerator", "AWS Direct Connect", "Amazon CloudFront", "AWS Lambda"],
            correctAnswer: 1,
            explanation: "AWS Global Accelerator and Amazon CloudFront both use the AWS global network to provide low latency and high transfer speeds to users worldwide. (Correct answers: B, D)"
        },
        {
            question: "Which AWS service or resource is serverless?",
            options: ["AWS Lambda", "Amazon EC2 instances", "Amazon Lightsail", "Amazon ElastiCache"],
            correctAnswer: 0,
            explanation: "AWS Lambda is a serverless compute service that runs code without provisioning or managing servers."
        },
        {
            question: "Which of the following are components of Amazon VPC? (Choose TWO)",
            options: ["Objects", "Subnets", "Buckets", "Internet gateways", "Access key"],
            correctAnswer: 1,
            explanation: "Subnets and Internet gateways are core components of Amazon VPC. (Correct answers: B, D)"
        },
        {
            question: "AWS Budgets can be used to:",
            options: ["prevent a given user from creating a resource", "send an alert when the utilization of Reserved Instances drops below a certain percentage", "set resource limits in AWS accounts to prevent overspending", "split an AWS bill across multiple forms of payment"],
            correctAnswer: 2,
            explanation: "AWS Budgets allows you to set custom budgets and receive alerts when costs or usage exceed (or are forecasted to exceed) your budgeted amount."
        },
        {
            question: "Which of the following will enhance the security of access to the AWS Management Console? (Choose TWO)",
            options: ["AWS Secrets Manager", "AWS Certificate Manager", "AWS Multi-Factor Authentication (AWS MFA)", "Security groups", "Password policies"],
            correctAnswer: 2,
            explanation: "Multi-Factor Authentication (MFA) and strong password policies enhance the security of AWS Management Console access. (Correct answers: C, E)"
        },
        {
            question: "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose TWO)",
            options: ["Information on Amazon S3 bucket permissions", "AWS service outages", "Multi-factor authentication enabled on the AWS account root user", "Available software patches", "Number of users in the account"],
            correctAnswer: 0,
            explanation: "AWS Trusted Advisor provides checks on S3 bucket permissions and MFA on root user, among other security and optimization recommendations. (Correct answers: A, C)"
        },
        {
            question: "Which functions can users perform using AWS KMS?",
            options: ["Create and manage AWS access keys for the AWS account root user", "Create and manage AWS access keys for an AWS account IAM user", "Create and manage keys for encryption and decryption of data", "Create and manage keys for multi-factor authentication"],
            correctAnswer: 2,
            explanation: "AWS Key Management Service (KMS) is used to create and manage cryptographic keys for encryption and decryption of data."
        },
        {
            question: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose TWO)",
            options: ["It identifies software vulnerabilities in applications running on AWS", "It provides a list of cost optimization recommendations based on current AWS usage", "It detects potential security vulnerabilities caused by permissions settings on account resources", "It automatically corrects potential security issues caused by permissions settings on account resources", "It provides proactive alerting whenever an Amazon EC2 instance has been compromised"],
            correctAnswer: 1,
            explanation: "AWS Trusted Advisor provides cost optimization recommendations and detects security vulnerabilities in resource configurations. (Correct answers: B, C)"
        },
        {
            question: "Which of the following are advantages of the AWS Cloud? (Choose TWO)",
            options: ["AWS manages the maintenance of the cloud infrastructure", "AWS manages the security of applications built on AWS", "AWS manages capacity planning for physical servers", "AWS manages the development of applications on AWS", "AWS manages cost planning for virtual servers"],
            correctAnswer: 0,
            explanation: "AWS manages the maintenance of cloud infrastructure and capacity planning for physical servers. (Correct answers: A, C)"
        },
        {
            question: "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
            options: ["Performance efficiency", "Reliability", "Cost optimization", "Security"],
            correctAnswer: 1,
            explanation: "Deploying RDS in multiple Availability Zones relates to the Reliability pillar, which focuses on the ability of a system to recover from failures and meet demand."
        },
        {
            question: "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose TWO)",
            options: ["AWS VPN", "Amazon Connect", "Amazon Cognito", "AWS Direct Connect", "AWS Managed Services"],
            correctAnswer: 0,
            explanation: "AWS VPN and AWS Direct Connect both provide connectivity between AWS Cloud and on-premises resources. (Correct answers: A, D)"
        },
        {
            question: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
            options: ["AWS Billing and Cost Management", "Consolidated billing", "Amazon CloudWatch", "Amazon QuickSight"],
            correctAnswer: 0,
            explanation: "AWS Billing and Cost Management is the service used to pay bills, monitor usage, and manage budgets."
        },
        {
            question: "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
            options: ["AWS Regions", "Availability Zones", "Edge locations", "Amazon CloudFront"],
            correctAnswer: 1,
            explanation: "Availability Zones are one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region."
        },
        {
            question: "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
            options: ["Security groups", "Elastic network interfaces", "Network ACLs", "VPC Flow Logs"],
            correctAnswer: 3,
            explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
        },
        {
            question: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
            options: ["Amazon AutoScaling", "Amazon Redshift", "AWS CloudTrail", "AWS Lambda"],
            correctAnswer: 0,
            explanation: "Amazon Auto Scaling monitors applications and automatically adjusts capacity to maintain steady, predictable performance without manual intervention."
        },
        {
            question: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
            options: ["AWS Trusted Advisor", "AWS Support case", "Concierge team", "Amazon Connect"],
            correctAnswer: 2,
            explanation: "The Concierge team is exclusively available to AWS Enterprise Support customers for billing and account assistance."
        },
        {
            question: "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?",
            options: ["Amazon RDS", "Amazon DynamoDB", "Amazon DocumentDB", "Amazon ElastiCache"],
            correctAnswer: 0,
            explanation: "Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud, automating time-consuming administration tasks like hardware provisioning, database setup, patching, and backups."
        },
        {
            question: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
            options: ["Contact an AWS Account Manager to sign a new contract", "Move an Availability Zone to the new Region", "Begin deploying resources in the second Region", "Download the AWS Management Console for the new Region"],
            correctAnswer: 2,
            explanation: "To start using a new AWS Region, simply begin deploying resources in that Region. No contract changes or special setup is required."
        },
        {
            question: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
            options: ["Dedicated Hosts", "Dedicated Instances", "Spot Instances", "Reserved Instances"],
            correctAnswer: 0,
            explanation: "Amazon EC2 Dedicated Hosts provide physical servers dedicated for your use, which can help meet compliance and licensing requirements."
        },
        {
            question: "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose TWO)",
            options: ["Amazon Macie", "AWS Certificate Manager", "AWS Key Management Service (AWS KMS)", "AWS Secrets Manager", "AWS CloudHSM"],
            correctAnswer: 2,
            explanation: "AWS KMS and AWS CloudHSM both provide ways to generate and manage encryption keys. (Correct answers: C, E)"
        },
        {
            question: "A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
            options: ["AWS Total Cost of Ownership (TCO) Calculator", "Cost Explorer", "AWS Budgets", "AWS Migration Hub"],
            correctAnswer: 0,
            explanation: "The AWS TCO Calculator provides detailed reports on estimated cost savings when migrating from on-premises to AWS."
        },
        {
            question: "What can assist in evaluating an application for migration to the cloud? (Choose TWO)",
            options: ["AWS Trusted Advisor", "AWS Professional Services", "AWS Systems Manager", "AWS Partner Network (APN)", "AWS Secrets Manager"],
            correctAnswer: 1,
            explanation: "AWS Professional Services and AWS Partner Network (APN) partners can assist in evaluating applications for cloud migration. (Correct answers: B, D)"
        },
        {
            question: "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
            options: ["AWS Secrets Manager", "AWS CloudHSM", "AWS Key Management Service (AWS KMS)", "AWS Directory Service"],
            correctAnswer: 1,
            explanation: "AWS CloudHSM service helps you meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated Hardware Security Module (HSM) instances."
        },
        {
            question: "Under the AWS shared responsibility model, the customer manages which of the following? (Choose TWO)",
            options: ["Decommissioning of physical storage devices", "Security group and ACL configuration", "Patch management of an Amazon RDS instance operating system", "Controlling physical access to data centers", "Patch management of an Amazon EC2 instance operating system"],
            correctAnswer: 1,
            explanation: "Customers are responsible for security group and ACL configuration, and patching the guest OS on EC2 instances. (Correct answers: B, E)"
        },
        {
            question: "Which AWS service is suitable for an event-driven workload?",
            options: ["Amazon EC2", "AWS Elastic Beanstalk", "AWS Lambda", "Amazon Lumberyard"],
            correctAnswer: 2,
            explanation: "AWS Lambda is ideal for event-driven workloads as it automatically runs code in response to events without requiring server management."
        },
        {
            question: "What is a value proposition of the AWS Cloud?",
            options: ["AWS is responsible for security in the AWS Cloud", "No long-term contract is required", "Provision new servers in days", "AWS manages user applications in the AWS Cloud"],
            correctAnswer: 1,
            explanation: "A key value proposition of AWS is the pay-as-you-go model with no long-term contracts or upfront commitments required."
        },
        {
            question: "What is a characteristic of Amazon S3 cross-region replication?",
            options: ["Both source and destination S3 buckets must have versioning disabled", "The source and destination S3 buckets cannot be in different AWS Regions", "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts", "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account"],
            correctAnswer: 2,
            explanation: "S3 cross-region replication can be configured between buckets owned by the same AWS account or different accounts."
        },
        {
            question: "What is a user responsible for when running an application in the AWS Cloud?",
            options: ["Managing physical hardware", "Updating the underlying hypervisor", "Providing a list of users approved for data center access", "Managing application software updates"],
            correctAnswer: 3,
            explanation: "Under the shared responsibility model, users are responsible for managing their application software, including updates and patches."
        },
        {
            question: "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?",
            options: ["Elasticity", "High availability", "Agility", "Reliability"],
            correctAnswer: 2,
            explanation: "Agility in the AWS Cloud enables companies to quickly deliver new functionality and iterate rapidly, minimizing time to market."
        },
        {
            question: "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose TWO)",
            options: ["AWS Cost and Usage report", "AWS product pages", "AWS Simple Monthly Calculator", "Billing alerts and Amazon CloudWatch alarms", "AWS Price List API"],
            correctAnswer: 0,
            explanation: "AWS Cost and Usage reports and billing alerts with CloudWatch alarms can be used to monitor costs and expenses. (Correct answers: A, D)"
        },
        {
            question: "Amazon Route 53 enables users to:",
            options: ["encrypt data in transit", "register DNS domain names", "generate and manage SSL certificates", "establish a dedicated network connection to AWS"],
            correctAnswer: 1,
            explanation: "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service that enables users to register and manage DNS domain names."
        }
    ],
    20: [
        {
            question: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
            options: ["Amazon Rekognition", "AWS Trusted Advisor", "Amazon GuardDuty", "Amazon CloudWatch"],
            correctAnswer: 2,
            explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized behavior to help protect your AWS accounts and workloads."
        },
        {
            question: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
            options: ["AWS Marketplace", "AWS Partner Network (APN)", "AWS Managed Services", "AWS Service Catalog"],
            correctAnswer: 0,
            explanation: "AWS Marketplace allows you to try and purchase third-party software solutions, often with free trials or pay-as-you-go pricing options."
        },
        {
            question: "Which AWS service is a managed NoSQL database?",
            options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora", "Amazon RDS for MariaDB"],
            correctAnswer: 1,
            explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
        },
        {
            question: "Which AWS service should be used to create a billing alarm?",
            options: ["AWS Trusted Advisor", "AWS CloudTrail", "Amazon CloudWatch", "Amazon QuickSight"],
            correctAnswer: 2,
            explanation: "Amazon CloudWatch can be used to create billing alarms that notify you when your estimated AWS charges exceed a threshold you define."
        },
        {
            question: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
            options: ["Scaling the web application and services developed with Docker", "Provisioning or scheduling containers to run on clusters and maintain their availability", "Performing hardware maintenance in the AWS facilities that run the AWS Cloud", "Managing the guest operating system, including updates and security patches"],
            correctAnswer: 2,
            explanation: "Under the shared responsibility model, AWS is responsible for the physical infrastructure, including hardware maintenance in AWS facilities."
        },
        {
            question: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
            options: ["Amazon CloudFront", "AWS Direct Connect", "Amazon EC2 Auto Scaling", "AWS Transit Gateway"],
            correctAnswer: 0,
            explanation: "Amazon CloudFront is a CDN that caches content at edge locations worldwide, reducing latency for global users."
        },
        {
            question: "Which actions represent best practices for using AWS IAM? (Choose TWO)",
            options: ["Configure a strong password policy", "Share the security credentials among users of AWS accounts who are in the same Region", "Use access keys to log in to the AWS Management Console", "Rotate access keys on a regular basis", "Avoid using IAM roles to delegate permissions"],
            correctAnswer: 0,
            explanation: "Best practices include configuring strong password policies and rotating access keys regularly. (Correct answers: A, D)"
        },
        {
            question: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
            options: ["AWS Config", "VPC Flow Logs", "AWS Trusted Advisor", "AWS CloudTrail"],
            correctAnswer: 1,
            explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC."
        },
        {
            question: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
            options: ["Amazon Inspector", "Amazon CloudWatch", "AWS Global Accelerator", "Amazon CloudFront"],
            correctAnswer: 2,
            explanation: "AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications and continually monitors the health of your application endpoints, redirecting traffic to healthy endpoints."
        },
        {
            question: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose TWO)",
            options: ["Use AWS Config to generate an inventory of AWS resources", "Use service limits to prevent users from creating or making changes to AWS resources", "Use AWS CloudTrail to record AWS API calls into an auditable log file", "Use AWS Certificate Manager to whitelist approved AWS resources and services", "Use Amazon GuardDuty to validate configuration changes made to AWS resources"],
            correctAnswer: 0,
            explanation: "Using AWS Config for resource inventory and AWS CloudTrail for API call auditing are key change management practices for reliability. (Correct answers: A, C)"
        },
        {
            question: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
            options: ["Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor", "AWS IAM"],
            correctAnswer: 0,
            explanation: "Amazon CloudWatch can monitor and send alerts for root user sign-in events by creating alarms based on CloudTrail logs."
        },
        {
            question: "Which design principle should be considered when architecting in the AWS Cloud?",
            options: ["Think of servers as non-disposable resources", "Use synchronous integration of services", "Design loosely coupled components", "Implement the least permissive rules for security groups"],
            correctAnswer: 2,
            explanation: "Designing loosely coupled components is a key AWS architectural principle that improves scalability and resilience."
        },
        {
            question: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose TWO)",
            options: ["AWS Snowball", "AWS Lambda", "AWS ElastiCache", "AWS Database Migration Service (AWS DMS)", "Amazon API Gateway"],
            correctAnswer: 0,
            explanation: "AWS Snowball for physical data transfer and AWS Database Migration Service for database migrations are both used to move data to AWS. (Correct answers: A, D)"
        },
        {
            question: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
            options: ["Run the application on a bigger EC2 instance size.", "Switch to an EC2 instance family that better matches batch requirements.", "Distribute the application across multiple EC2 instances and run the workload in parallel.", "Run the application on a bare metal EC2 instance."],
            correctAnswer: 2,
            explanation: "Distributing the workload across multiple instances and running in parallel provides horizontal scalability to handle growing demand."
        },
        {
            question: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
            options: ["Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.", "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.", "Configure AWS Organizations in each of the existing accounts. Then link all accounts together.", "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."],
            correctAnswer: 1,
            explanation: "Creating AWS Organizations with a master payer account and inviting existing accounts is the proper way to centralize governance and consolidate billing."
        },
        {
            question: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
            options: ["Economy of scale", "Elasticity", "High availability", "Agility"],
            correctAnswer: 1,
            explanation: "Elasticity is the ability to scale resources up or down based on demand, which is a core benefit of cloud computing."
        },
        {
            question: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
            options: ["AWS CloudTrail", "Amazon EC2 Auto Scaling", "Amazon Forecast", "AWS Config"],
            correctAnswer: 1,
            explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand, perfect for handling traffic spikes."
        },
        {
            question: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
            options: ["Amazon VPC peering", "AWS Direct Connect", "AWS VPN", "Amazon Pinpoint"],
            correctAnswer: 2,
            explanation: "AWS VPN enables secure connections to AWS resources over the public internet using encrypted tunnels."
        },
        {
            question: "Which tool is used to forecast AWS spending?",
            options: ["AWS Trusted Advisor", "AWS Organizations", "Cost Explorer", "Amazon Inspector"],
            correctAnswer: 2,
            explanation: "AWS Cost Explorer provides forecasting capabilities to predict future AWS spending based on historical usage patterns."
        },
        {
            question: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
            options: ["Amazon ElastiCache", "Amazon CloudFront", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)"],
            correctAnswer: 1,
            explanation: "Amazon CloudFront employs a global network of edge locations that cache copies of your content close to your viewers, reducing latency."
        },
        {
            question: "Which of the following is a component of the AWS Global Infrastructure?",
            options: ["Amazon Alexa", "AWS Regions", "Amazon Lightsail", "AWS Organizations"],
            correctAnswer: 1,
            explanation: "AWS Regions are a fundamental component of the AWS Global Infrastructure, consisting of geographic areas with multiple Availability Zones."
        },
        {
            question: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
            options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "Amazon Inspector"],
            correctAnswer: 0,
            explanation: "Amazon CloudWatch monitors AWS resources and applications, including CPU utilization metrics for EC2 instances."
        },
        {
            question: "Why is it beneficial to use Elastic Load Balancers with applications?",
            options: ["They allow for the conversion from Application Load Balancers to Classic Load Balancers.", "They are capable of handling constant changes in network traffic patterns.", "They automatically adjust capacity.", "They are provided at no charge to users."],
            correctAnswer: 1,
            explanation: "Elastic Load Balancers automatically distribute incoming traffic across multiple targets and can handle constant changes in traffic patterns."
        },
        {
            question: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose TWO)",
            options: ["Infrastructure facilities access management", "Cloud infrastructure hardware lifecycle management", "Configuration management of user's applications", "Networking infrastructure protection", "Security groups configuration"],
            correctAnswer: 2,
            explanation: "Customers are responsible for configuring their applications and security groups. (Correct answers: C, E)"
        },
        {
            question: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
            options: ["Scalability", "Loose coupling", "Automation", "Automatic scaling"],
            correctAnswer: 1,
            explanation: "Loose coupling is the architectural principle of reducing interdependencies between components to improve resilience."
        },
        {
            question: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose TWO)",
            options: ["AWS WAF", "AWS Trusted Advisor", "AWS Direct Connect", "AWS Organizations", "Network ACLs"],
            correctAnswer: 0,
            explanation: "AWS WAF can block requests based on IP addresses and other criteria, and Network ACLs can block traffic at the subnet level. (Correct answers: A, E)"
        },
        {
            question: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
            options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "AWS Artifact"],
            correctAnswer: 1,
            explanation: "Amazon Elastic File System (EFS) provides a shared file system that can be accessed by multiple EC2 instances simultaneously."
        },
        {
            question: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose TWO)",
            options: ["Running a virus scan on EC2 instances", "Protecting against IP spoofing and packet sniffing", "Installing the latest security patches on the RDS instance", "Encrypting communication between the EC2 instances and the Elastic Load Balancer", "Configuring a security group and a network access control list (NACL) for EC2"],
            correctAnswer: 1,
            explanation: "AWS is responsible for protecting against IP spoofing/packet sniffing and patching the underlying RDS infrastructure. (Correct answers: B, C)"
        },
        {
            question: "What is the benefit of elasticity in the AWS Cloud?",
            options: ["Ensure web traffic is automatically spread across multiple AWS Regions.", "Minimize storage costs by automatically archiving log data.", "Enable AWS to automatically select the most cost-effective services.", "Automatically adjust the required compute capacity to maintain consistent performance."],
            correctAnswer: 3,
            explanation: "Elasticity allows AWS to automatically adjust compute capacity to maintain consistent performance as demand changes."
        },
        {
            question: "The continual reduction of AWS Cloud pricing is due to:",
            options: ["pay-as-you go pricing", "the AWS global infrastructure", "economies of scale", "reserved storage pricing"],
            correctAnswer: 2,
            explanation: "AWS passes savings from economies of scale back to customers through continual price reductions."
        },
        {
            question: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
            options: ["Enable S3 Block Public Access from the AWS Management Console.", "Hold a team meeting to discuss the importance if only uploading private S3 objects.", "Require all S3 objects to be manually approved before uploading.", "Create a service to monitor all S3 uploads and remove any public uploads."],
            correctAnswer: 0,
            explanation: "S3 Block Public Access is a feature that prevents public access to S3 buckets and objects, meeting compliance requirements."
        },
        {
            question: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
            options: ["Open a detailed case related to billing and submit it to AWS Support for help.", "Upload data describing the issue to a new object in a private Amazon S3 bucket.", "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.", "Proceed with creating a new dashboard in Amazon QuickSight."],
            correctAnswer: 0,
            explanation: "For billing issues, the appropriate action is to open a support case with AWS Support."
        },
        {
            question: "What does the AWS Simple Monthly Calculator do?",
            options: ["Compares on-premises costs to colocation environments", "Estimates monthly billing based on projected usage", "Estimates power consumption at existing data centers", "Estimates CPU utilization"],
            correctAnswer: 1,
            explanation: "The AWS Simple Monthly Calculator (now AWS Pricing Calculator) estimates monthly billing based on projected resource usage."
        },
        {
            question: "Who is responsible for patching the guest operating system for Amazon RDS?",
            options: ["The AWS Product team", "The customer Database Administrator", "Managed partners", "AWS Support"],
            correctAnswer: 1,
            explanation: "For Amazon RDS, AWS manages the underlying infrastructure and database engine patching, but customers are responsible for application-level configurations."
        },
        {
            question: "Which AWS services may be scaled using AWS Auto Scaling? (Choose TWO)",
            options: ["Amazon EC2", "Amazon DynamoDB", "Amazon S3", "Amazon Route 53", "Amazon Redshift"],
            correctAnswer: 0,
            explanation: "AWS Auto Scaling supports Amazon EC2 instances and Amazon DynamoDB tables. (Correct answers: A, B)"
        },
        {
            question: "Which of the following are benefits of AWS Global Accelerator? (Choose TWO)",
            options: ["Reduced cost to run services on AWS", "Improved availability of applications deployed on AWS", "Higher durability of data stored on AWS", "Decreased latency to reach applications deployed on AWS", "Higher security of data stored on AWS"],
            correctAnswer: 1,
            explanation: "AWS Global Accelerator improves availability by routing traffic to healthy endpoints and decreases latency using the AWS global network. (Correct answers: B, D)"
        },
        {
            question: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
            options: ["the AWS Support forum", "AWS Abuse", "an AWS Solutions Architect", "AWS Support"],
            correctAnswer: 3,
            explanation: "Account and billing issues should be submitted to AWS Support for resolution."
        },
        {
            question: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
            options: ["Provision capacity based on past usage and theoretical peaks", "Dynamically and predictively scale to meet usage demands", "Build the application and infrastructure in a data center that grants physical access", "Break apart the application into loosely coupled components"],
            correctAnswer: 1,
            explanation: "Dynamically and predictively scaling to meet usage demands takes full advantage of cloud elasticity and agility."
        },
        {
            question: "Which method helps to optimize costs of users moving to the AWS Cloud?",
            options: ["Paying only for what is used", "Purchasing hardware before it is needed", "Manually provisioning cloud resources", "Purchasing for the maximum possible load"],
            correctAnswer: 0,
            explanation: "The pay-as-you-go model, where you only pay for what you use, is a key cost optimization method in AWS."
        },
        {
            question: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
            options: ["Installing security patches for the Xen and KVM hypervisors", "Installing operating system patches for Amazon DynamoDB", "Installing operating system security patches for Amazon EC2 database instances", "Installing operating system security patches for Amazon RDS database instances"],
            correctAnswer: 2,
            explanation: "Customers are responsible for patching the guest operating system on EC2 instances, including EC2 instances running databases."
        },
        {
            question: "The AWS Cost Management tools give users the ability to do which of the following? (Choose TWO)",
            options: ["Terminate all AWS resources automatically if budget thresholds are exceeded.", "Break down AWS costs by day, service, and linked AWS account.", "Create budgets and receive notifications if current of forecasted usage exceeds the budgets.", "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.", "Move data stored in Amazon S3 to a more cost-effective storage class."],
            correctAnswer: 1,
            explanation: "AWS Cost Management tools allow you to break down costs by various dimensions and create budgets with notifications. (Correct answers: B, C)"
        },
        {
            question: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
            options: ["AWS Support", "the customer", "AWS Systems Manager", "AWS Config"],
            correctAnswer: 1,
            explanation: "Customers are responsible for the security and patching of the guest operating system on their EC2 instances."
        },
        {
            question: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
            options: ["AWS Direct Connect", "Amazon Connect", "AWS Identity and Access Management (IAM)", "AWS Firewall Manager"],
            correctAnswer: 2,
            explanation: "AWS IAM enables you to create and manage users, groups, and permissions at no additional charge."
        },
        {
            question: "Which AWS service provides on-demand of AWS security and compliance documentation?",
            options: ["AWS Directory Service", "AWS Artifact", "AWS Trusted Advisor", "Amazon Inspector"],
            correctAnswer: 1,
            explanation: "AWS Artifact is your go-to resource for on-demand access to AWS security and compliance reports and agreements."
        },
        {
            question: "Which AWS service can be used to turn text into life-like speech?",
            options: ["Amazon Polly", "Amazon Transcribe", "Amazon Rekognition", "Amazon Lex"],
            correctAnswer: 0,
            explanation: "Amazon Polly is a service that turns text into lifelike speech using deep learning technologies."
        },
        {
            question: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
            options: ["Design using a serverless architecture", "Assume that all components within an application can fail", "Design AWS Auto Scaling into every application", "Design all components using open-source code"],
            correctAnswer: 1,
            explanation: "Designing for failure by assuming all components can fail is a core principle of building highly available applications in the cloud."
        },
        {
            question: "A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include: (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) Where can all this information be found in one location?",
            options: ["Amazon QuickSight dashboard", "AWS CloudTrail trails", "AWS Trusted Advisor report", "IAM credential report"],
            correctAnswer: 2,
            explanation: "AWS Trusted Advisor provides comprehensive security checks including S3 bucket permissions, MFA on root user, and security group configurations."
        },
        {
            question: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
            options: ["Dedicated Hosts", "On-Demand Instances", "Spot Instances", "Reserved Instances"],
            correctAnswer: 0,
            explanation: "Dedicated Hosts provide visibility into the number of sockets and physical cores, which is required for per-core software licensing."
        },
        {
            question: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
            options: ["AWS Regions", "Availability Zones", "Edge locations", "Data centers"],
            correctAnswer: 2,
            explanation: "Edge locations are used by CloudFront to cache copies of content closer to end users for faster delivery."
        },
        {
            question: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
            options: ["Security", "Operational excellence", "Performance efficiency", "Cost optimization"],
            correctAnswer: 0,
            explanation: "Recording, auditing, and evaluating changes for traceability is a key practice in the Security pillar of the AWS Well-Architected Framework."
        }
    ]
};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questionSets };
}
